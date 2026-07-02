# Maxxim Admin — Access Attempt & Limitation Report

**Crawled at:** 2026-07-02
**Target:** `https://admin.maxxim.ai/admin` and `https://admin.maxxim.ai/`
**Result:** NOT ACCESSIBLE. The entire admin surface is gated behind **Cloudflare Access** (zero-trust identity gateway). No admin content is readable by an unauthenticated client. No 3D Process outputs, business strategy, brand/website/messaging/audience/Design/Deploy outputs, taxonomy, or content structure could be captured.

---

## What happens on request

Any unauthenticated request to `admin.maxxim.ai` — for the root, `/admin`, or any deeper path — is answered with an HTTP 302 that lands (HTTP 200) on the Cloudflare Access sign-in page hosted on the org's team domain:

```
https://maxxim-partners.cloudflareaccess.com/cdn-cgi/access/login/admin.maxxim.ai?kid=...&meta=<JWT>&redirect_url=%2Fadmin
```

- The page title is `Sign in ・ Cloudflare Access`.
- The Cloudflare Access **team/org name is `maxxim-partners`** (i.e. `maxxim-partners.cloudflareaccess.com`).
- The `meta` query param is a signed JWT whose decoded payload confirms this is a pure auth gate: `"auth_status":"NONE"`, `hostname:"admin.maxxim.ai"`, `redirect_url:"/"` (or `/admin`), `app_session_hash:...`. It carries no application data.
- The sign-in page is a generic Cloudflare Access shell (`data-auto-redirect-to-identity="false"`, no auto-redirect URL, no inline message). Identity-provider buttons are loaded client-side; none are exposed as static content to scrape.
- The only application-branded asset on the login shell is the org logo, served from a **separate public CDN**: `https://assets.maxxim.ai/brand/logo.png` (HTTP 200, `image/png`). `https://assets.maxxim.ai/` root returns 404 (no directory listing).

## URLs tried (all unauthenticated, read-only GET)

| URL | Status | Notes |
|---|---|---|
| `https://admin.maxxim.ai/` | 200 (after 1 redirect) | Redirects to CF Access login |
| `https://admin.maxxim.ai/admin` | 200 (after 1 redirect) | Redirects to CF Access login |
| `https://admin.maxxim.ai/login` | 200 | Redirects to CF Access login |
| `https://admin.maxxim.ai/api` | 200 | Redirects to CF Access login |
| `https://admin.maxxim.ai/api/health` | 200 | Redirects to CF Access login |
| `https://admin.maxxim.ai/api/status` | 200 | Redirects to CF Access login |
| `https://admin.maxxim.ai/api/projects` | 200 | Redirects to CF Access login |
| `https://admin.maxxim.ai/api/brands` | 200 | Redirects to CF Access login |
| `https://admin.maxxim.ai/api/outputs` | 200 | Redirects to CF Access login |
| `https://admin.maxxim.ai/api/v1` | 200 | Redirects to CF Access login |
| `https://admin.maxxim.ai/admin/api` | 200 | Redirects to CF Access login |
| `https://admin.maxxim.ai/health` | 200 | Redirects to CF Access login |
| `https://admin.maxxim.ai/assets/index.js` | 200 | Redirects to CF Access login |
| `https://admin.maxxim.ai/_app` | 200 | Redirects to CF Access login |
| `https://admin.maxxim.ai/manifest.json` | 200 | Redirects to CF Access login |
| `https://admin.maxxim.ai/sitemap.xml` | 200 | Redirects to CF Access login |
| `https://admin.maxxim.ai/favicon.ico` | 200 | Redirects to CF Access login |
| `https://admin.maxxim.ai/robots.txt` | 200 | **Served directly** (not gated) — generic Cloudflare-managed robots, no app info |
| `https://admin.maxxim.ai/cdn-cgi/access/get-identity` | 400 | CF Access identity endpoint; 400 (no session) — confirms gate, leaks nothing |
| `https://assets.maxxim.ai/brand/logo.png` | 200 | Public CDN, org logo (PNG) |
| `https://assets.maxxim.ai/` | 404 | No directory listing |
| `https://maxxim.ai/` | 200 | Public marketing site (separate from admin; not part of this task) |

**Note:** The 200 status codes above are the final response of the *login page*, reached after `curl -L` followed the redirect. Every gated path resolves to `maxxim-partners.cloudflareaccess.com/cdn-cgi/access/...`. The only paths served directly by the origin without the gate are `/robots.txt` (Cloudflare-managed default) and out-of-scope hosts.

`robots.txt` is the stock Cloudflare-managed file (content-signals block + AI-crawler disallows including `ClaudeBot`, `GPTBot`, `Google-Extended`, etc.); it reveals nothing about the admin's routes or structure.

## What would be needed to proceed

To scrape any admin content, an authenticated session against the `maxxim-partners` Cloudflare Access application is required. Options:

1. **Interactive login** through an authorized identity provider on `maxxim-partners.cloudflareaccess.com` (the email `clent@jewellprojects.com` would need to be on the CF Access allow-list / a member of the required Access policy group), yielding a `CF_Authorization` session cookie.
2. **Service token** — a Cloudflare Access service token (`CF-Access-Client-Id` + `CF-Access-Client-Secret` header pair) issued by the org, if the Access policy permits non-interactive service auth. (Sending a dummy `CF-Access-Client-Id` header was tested and still redirects to login — a valid, org-issued pair is required.)

Either credential must be obtained from the Maxxim / maxxim-partners administrators. No unauthenticated bypass exists, and none was attempted.

## Structural hints available from the unauthenticated surface

- **Auth layer:** Cloudflare Access (zero-trust), org/team domain `maxxim-partners`.
- **Branding CDN:** `assets.maxxim.ai` (public) — e.g. `/brand/logo.png`.
- **App framework / routes / API taxonomy:** UNKNOWN. Because the gate sits in front of the origin, no application HTML, JS bundle, route manifest, or API shape is observable. The `/api/*`, `/admin`, `/_app`, `/assets/*` paths probed are guesses that were uniformly gated; their existence could not be confirmed or denied — the gate returns the login page identically for real and non-existent paths.
- Nothing about the 3D Process (Discover/Design/Deploy) outputs, business strategy, website briefs, brand/messaging/audience outputs, or admin taxonomy is exposed. All of it lives behind authentication.
