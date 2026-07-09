/**
 * Password gate for the hosted On-a-Page pack, matching the BTC summary
 * document worker's behaviour: every request must carry a valid auth cookie;
 * otherwise a branded gate page is served with 401. POST /__auth checks the
 * password and sets the cookie (SHA-256 of the password — no secrets in the
 * cookie itself, and rotating PACK_PASSWORD invalidates all sessions).
 *
 * Config: PACK_PASSWORD var in wrangler.jsonc (override with a secret of the
 * same name to keep it out of the repo).
 */

const COOKIE = 'oap_auth'

async function sha256Hex(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('')
}

function getCookie(request, name) {
  const raw = request.headers.get('Cookie') ?? ''
  const m = raw.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`))
  return m?.[1] ?? null
}

function gatePage(err = false) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Beyond the Clinic — On a Page</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Inter+Tight:wght@700&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;padding:24px;color:#fff;
  font-family:'Inter',system-ui,sans-serif;background:linear-gradient(135deg,#171C3D 0%,#232a56 100%)}
.card{width:100%;max-width:392px;text-align:center}
h1{font-family:'Inter Tight',sans-serif;font-weight:700;margin:0 0 6px;font-size:26px}
p.sub{opacity:.85;margin:0 0 22px;font-size:15px}
p.err{background:rgba(253,132,87,.2);border:1px solid rgba(253,132,87,.6);
  border-radius:5px;padding:10px 12px;margin:0 0 14px;font-size:14px}
form{display:flex;flex-direction:column;gap:12px}
input{padding:13px 14px;border-radius:5px;border:1px solid rgba(255,255,255,.3);
  background:rgba(255,255,255,.08);color:#fff;font-size:15px}
input::placeholder{color:rgba(255,255,255,.55)}
button{padding:13px 14px;border-radius:5px;border:0;background:#FD8457;color:#fff;
  font-weight:600;font-size:15px;cursor:pointer}
.foot{margin-top:22px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;opacity:.6}
</style>
</head>
<body>
<main class="card">
  <h1>Beyond the Clinic</h1>
  <p class="sub">The 3D Process — on a page. Enter the pack password.</p>
  ${err ? '<p class="err">That password didn’t match. Try again.</p>' : ''}
  <form method="POST" action="/__auth">
    <input type="password" name="password" placeholder="Password" autofocus
           autocomplete="current-password" aria-label="Password" required>
    <button type="submit">View the pack</button>
  </form>
  <p class="foot">Maxxim 3D Process</p>
</main>
</body>
</html>`
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const password = env.PACK_PASSWORD
    const token = await sha256Hex(`${password}:${COOKIE}`)

    if (url.pathname === '/__auth' && request.method === 'POST') {
      const form = await request.formData()
      const given = form.get('password') ?? ''
      if (given === password) {
        return new Response(null, {
          status: 303,
          headers: {
            Location: '/',
            'Set-Cookie': `${COOKIE}=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=2592000`,
          },
        })
      }
      return new Response(gatePage(true), {
        status: 401,
        headers: { 'Content-Type': 'text/html; charset=UTF-8', 'Cache-Control': 'no-store' },
      })
    }

    if (getCookie(request, COOKIE) !== token) {
      return new Response(gatePage(), {
        status: 401,
        headers: {
          'Content-Type': 'text/html; charset=UTF-8',
          'Cache-Control': 'no-store',
          'X-Robots-Tag': 'noindex',
        },
      })
    }

    const res = await env.ASSETS.fetch(request)
    const out = new Response(res.body, res)
    out.headers.set('X-Robots-Tag', 'noindex')
    out.headers.set('Cache-Control', 'no-store')
    return out
  },
}
