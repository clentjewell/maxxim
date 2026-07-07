/**
 * Maxxim Workers entrypoint (maxxim.ai / *-maxxim.clent.workers.dev).
 *
 * The site is a static Astro build in dist/, served by the [assets] binding.
 * This Worker runs first for HTML pages so that live copy overrides (the
 * inline Copy Editor) can be applied at the edge, and it serves the small
 * /api/copy endpoint that stores those edits. Hashed and binary assets are
 * excluded via `run_worker_first` in wrangler.jsonc and served directly.
 *
 * The Worker is self-contained: it has no imports and degrades safely. When
 * the COPY KV namespace or the COPY_EDIT_TOKEN secret is absent, the site
 * behaves exactly as a plain static deploy — the editor simply reports that
 * saving is unconfigured. The repo stays the source of truth; overrides are a
 * live layer that /api/copy?all can export for folding back into the code.
 */

// Minimal ambient shapes, so the Worker type-checks without external deps.
interface KVNamespace {
  get(key: string): Promise<string | null>;
  put(key: string, value: string): Promise<void>;
  delete(key: string): Promise<void>;
  list(opts?: { prefix?: string }): Promise<{ keys: { name: string }[] }>;
}
interface Fetcher {
  fetch(request: Request): Promise<Response>;
}

interface Env {
  ASSETS: Fetcher;
  /** KV store for live copy overrides. Optional — absent = static behaviour. */
  COPY?: KVNamespace;
  /** Shared secret that authorises copy edits. Set as a Worker secret. */
  COPY_EDIT_TOKEN?: string;
}

interface CopyItem {
  find: string;
  replace: string;
}

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/copy") {
      return handleCopy(request, env);
    }

    // Not an API route: serve the static asset (or its 404 page), applying any
    // live copy overrides to HTML responses.
    const assetRes = await env.ASSETS.fetch(request);
    return applyCopyOverrides(request, assetRes, env);
  },
};

/* ==========================================================================
   LIVE COPY OVERRIDES.
   Copy edits made in the browser are stored in KV as exact text-node
   find/replace pairs, keyed per page (copy:/method) plus a global set
   (copy:*). HTML responses are rewritten at the edge, so copy changes go
   live instantly without a rebuild.
   ========================================================================== */

/** Page key: pathname without trailing slash or index.html ("/" for root). */
function copyPath(pathname: string): string {
  let p = pathname.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  return p || "/";
}

function escapeHtmlText(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function parseItems(raw: string | null): CopyItem[] {
  if (!raw) return [];
  try {
    const v = JSON.parse(raw);
    return Array.isArray(v)
      ? v.filter((i) => typeof i?.find === "string" && typeof i?.replace === "string")
      : [];
  } catch {
    return [];
  }
}

async function applyCopyOverrides(request: Request, res: Response, env: Env): Promise<Response> {
  if (!env.COPY || request.method !== "GET") return res;
  const ct = res.headers.get("content-type") || "";
  if (!ct.includes("text/html")) return res;
  const page = copyPath(new URL(request.url).pathname);
  const [pageRaw, globalRaw] = await Promise.all([
    env.COPY.get(`copy:${page}`),
    env.COPY.get("copy:*"),
  ]);
  if (!pageRaw && !globalRaw) return res;
  const items = [...parseItems(globalRaw), ...parseItems(pageRaw)];
  if (items.length === 0) return res;

  let html = await res.text();
  for (const { find, replace } of items) {
    // Plain-text replacement only: the stored text came from DOM text nodes,
    // so escape it for HTML and try both raw and entity-encoded source forms.
    const to = escapeHtmlText(replace);
    const candidates = [escapeHtmlText(find), find];
    for (const from of candidates) {
      if (from && html.includes(from)) {
        html = html.split(from).join(to);
        break;
      }
    }
  }
  const headers = new Headers(res.headers);
  headers.delete("content-length");
  return new Response(html, { status: res.status, headers });
}

/** /api/copy — read overrides (public; they render into public pages anyway),
 *  write/delete with the COPY_EDIT_TOKEN secret. */
async function handleCopy(request: Request, env: Env): Promise<Response> {
  if (!env.COPY) {
    return jsonResponse(
      { ok: false, error: "Copy store not configured. Create the KV namespace and bind it as COPY (see wrangler.jsonc)." },
      503
    );
  }
  const url = new URL(request.url);

  if (request.method === "GET") {
    const all = url.searchParams.get("all");
    if (all) {
      if (!authorised(request, url, env)) return jsonResponse({ ok: false, error: "Unauthorised" }, 401);
      const list = await env.COPY.list({ prefix: "copy:" });
      const out: Record<string, CopyItem[]> = {};
      for (const k of list.keys) {
        out[k.name.slice(5)] = parseItems(await env.COPY.get(k.name));
      }
      return jsonResponse({ ok: true, overrides: out });
    }
    const page = copyPath(url.searchParams.get("path") || "/");
    const [pageRaw, globalRaw] = await Promise.all([
      env.COPY.get(`copy:${page}`),
      env.COPY.get("copy:*"),
    ]);
    return jsonResponse({ ok: true, path: page, items: parseItems(pageRaw), global: parseItems(globalRaw) });
  }

  if (request.method !== "POST" && request.method !== "DELETE") {
    return jsonResponse({ ok: false, error: "Method not allowed" }, 405);
  }
  if (!env.COPY_EDIT_TOKEN) {
    return jsonResponse({ ok: false, error: "COPY_EDIT_TOKEN secret is not set on the Worker." }, 503);
  }

  let body: { token?: string; path?: string; items?: CopyItem[]; find?: string };
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ ok: false, error: "Invalid JSON" }, 400);
  }
  if (body.token !== env.COPY_EDIT_TOKEN) return jsonResponse({ ok: false, error: "Unauthorised" }, 401);

  const page = copyPath(body.path || "/");
  const key = `copy:${page}`;
  const existing = parseItems(await env.COPY.get(key));

  if (request.method === "DELETE") {
    if (typeof body.find === "string") {
      const target = body.find;
      const next = existing.filter((i) => i.find !== target);
      if (next.length === 0) await env.COPY.delete(key);
      else await env.COPY.put(key, JSON.stringify(next));
      return jsonResponse({ ok: true, path: page, items: next });
    }
    await env.COPY.delete(key);
    return jsonResponse({ ok: true, path: page, items: [] });
  }

  const incoming = (body.items || []).filter(
    (i) =>
      typeof i?.find === "string" &&
      typeof i?.replace === "string" &&
      i.find.trim().length > 0 &&
      i.find !== i.replace
  );
  if (incoming.length === 0) return jsonResponse({ ok: false, error: "No valid items" }, 400);
  for (const item of incoming) {
    const idx = existing.findIndex((i) => i.find === item.find);
    if (idx >= 0) existing[idx] = { find: item.find, replace: item.replace };
    else existing.push({ find: item.find, replace: item.replace });
  }
  await env.COPY.put(key, JSON.stringify(existing));
  return jsonResponse({ ok: true, path: page, items: existing });
}

function authorised(request: Request, url: URL, env: Env): boolean {
  if (!env.COPY_EDIT_TOKEN) return false;
  const t = request.headers.get("x-copy-token") || url.searchParams.get("token");
  return t === env.COPY_EDIT_TOKEN;
}
