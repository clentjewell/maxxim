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

/** Sane bounds so a stray token (or a leaked one) can't turn every page
 *  load into an expensive rewrite or blow up KV value size. */
const MAX_ITEMS_PER_KEY = 300;
const MAX_ITEMS_PER_REQUEST = 50;
const MAX_STRING_LENGTH = 4000;

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

/**
 * Apply find/replace overrides to HTML, but ONLY inside genuine text-node
 * content — never inside a tag's markup (attribute values, tag names) and
 * never inside <script> or <style> element bodies.
 *
 * This matters because overrides are plain strings, not DOM references: a
 * naive `html.split(find).join(to)` over the whole document would also
 * rewrite any coincidental match inside an attribute value (e.g. the same
 * word appearing in an `aria-label`, `alt`, or — critically — inside the
 * page's own `<meta http-equiv="content-security-policy" content="...">`
 * tag, which repeats the literal token `self` many times) or inside an
 * inline <script>/<style> block (corrupting its source so it no longer
 * matches the CSP's precomputed SHA-256 hash, or breaking a JS/CSS string
 * literal outright). Because `escapeHtmlText` only encodes `& < >` — which
 * is sufficient for text-node content but NOT for attribute-value or
 * script-body contexts (quotes, semicolons, etc. are not encoded) — letting
 * an override reach those other contexts is an HTML/CSP-injection path for
 * anyone holding (or leaking) COPY_EDIT_TOKEN. So we tokenize the document
 * into "inside a tag" vs "between tags" spans and only ever touch the
 * latter, skipping spans that fall inside <script>/<style>.
 */
function replaceInTextNodesOnly(html: string, items: CopyItem[]): string {
  // Splitting on tag boundaries keeps every attribute/tag-name span in its
  // own (untouched) array slot; only the interleaved text spans are edited.
  const parts = html.split(/(<[^>]*>)/);
  let skipTag: "script" | "style" | null = null;
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (part.startsWith("<")) {
      const m = /^<\s*(\/?)\s*([a-zA-Z][a-zA-Z0-9-]*)/.exec(part);
      const closing = m ? m[1] === "/" : false;
      const name = m ? (m[2].toLowerCase() as "script" | "style") : null;
      if (name === "script" || name === "style") {
        if (closing) {
          if (skipTag === name) skipTag = null;
        } else if (!/\/>\s*$/.test(part)) {
          skipTag = name;
        }
      }
      continue; // never edit tag markup itself
    }
    if (skipTag) continue; // inside <script> or <style> body text
    let text = part;
    for (const { find, replace } of items) {
      // Plain-text replacement only: the stored text came from DOM text
      // nodes, so escape it for HTML and try both raw and entity-encoded
      // source forms. `&<>` encoding is safe here because this span is
      // guaranteed to be real text-node content, never an attribute value.
      const to = escapeHtmlText(replace);
      const candidates = [escapeHtmlText(find), find];
      for (const from of candidates) {
        if (from && text.includes(from)) {
          text = text.split(from).join(to);
          break;
        }
      }
    }
    parts[i] = text;
  }
  return parts.join("");
}

async function applyCopyOverrides(request: Request, res: Response, env: Env): Promise<Response> {
  if (!env.COPY || request.method !== "GET") return res;
  const ct = res.headers.get("content-type") || "";
  if (!ct.includes("text/html")) return res;
  // Keep an untouched clone: on any failure below we must serve the
  // original asset rather than let a Copy Editor bug break the site.
  const fallback = res.clone();
  try {
    const page = copyPath(new URL(request.url).pathname);
    const [pageRaw, globalRaw] = await Promise.all([
      env.COPY.get(`copy:${page}`),
      env.COPY.get("copy:*"),
    ]);
    if (!pageRaw && !globalRaw) return res;
    const items = [...parseItems(globalRaw), ...parseItems(pageRaw)];
    if (items.length === 0) return res;

    const html = replaceInTextNodesOnly(await res.text(), items);
    const headers = new Headers(res.headers);
    headers.delete("content-length");
    return new Response(html, { status: res.status, headers });
  } catch {
    return fallback;
  }
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

  const incoming = (body.items || [])
    .slice(0, MAX_ITEMS_PER_REQUEST)
    .filter(
      (i) =>
        typeof i?.find === "string" &&
        typeof i?.replace === "string" &&
        i.find.trim().length > 0 &&
        i.find !== i.replace &&
        i.find.length <= MAX_STRING_LENGTH &&
        i.replace.length <= MAX_STRING_LENGTH
    );
  if (incoming.length === 0) return jsonResponse({ ok: false, error: "No valid items" }, 400);
  for (const item of incoming) {
    const idx = existing.findIndex((i) => i.find === item.find);
    if (idx >= 0) existing[idx] = { find: item.find, replace: item.replace };
    else existing.push({ find: item.find, replace: item.replace });
  }
  if (existing.length > MAX_ITEMS_PER_KEY) {
    return jsonResponse(
      { ok: false, error: `Too many overrides for "${page}" (limit ${MAX_ITEMS_PER_KEY}). Delete some first.` },
      400
    );
  }
  await env.COPY.put(key, JSON.stringify(existing));
  return jsonResponse({ ok: true, path: page, items: existing });
}

function authorised(request: Request, url: URL, env: Env): boolean {
  if (!env.COPY_EDIT_TOKEN) return false;
  const t = request.headers.get("x-copy-token") || url.searchParams.get("token");
  return t === env.COPY_EDIT_TOKEN;
}
