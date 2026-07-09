#!/usr/bin/env node
/**
 * Build the hosted On-a-Page pack: merge the four A3 sheets
 * (../templates/*.a3.html) into one self-contained HTML document with a
 * navigation bar, per-sheet anchors, and print support (4 × A3 landscape
 * pages) — and, when present, incorporate the full BTC 3D Process summary
 * document below the sheets. Output: public/index.html — served by the
 * password-gated Worker.
 *
 * Scoping: the sheets' framework CSS is scoped under `.pg`, each sheet's own
 * CSS under its `#pg-<name>`, and the BTC document's CSS under `#btc-pack`,
 * with all `:root` token blocks re-homed onto those wrappers — so the three
 * style systems can never collide (e.g. `.pill` exists on both sides with
 * different meanings, and the two `--radius` tokens disagree).
 *
 * BTC document source: src/btc-pack.html (gitignored — client content stays
 * out of the repo; the deployed Worker is password-gated). Refresh it with:
 *   curl -c c.txt -X POST -d "password=<pack password>" \
 *     https://claude-btc-summary-document-a39ull-beyondtheclinic.clent.workers.dev/__auth
 *   curl -b c.txt -o src/btc-pack.html \
 *     https://claude-btc-summary-document-a39ull-beyondtheclinic.clent.workers.dev/
 * If src/btc-pack.html is absent, the pack builds with the four sheets only.
 *
 * Run: node build.mjs
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const TPL = join(HERE, '..', 'templates')
const OUT = join(HERE, 'public')
const BTC_SRC = join(HERE, 'src', 'btc-pack.html')

const PAGES = [
  { name: 'overall', file: 'overall.a3.html', label: '3D on a page', sub: 'Source of truth' },
  { name: 'discover', file: 'discover.a3.html', label: 'Discover', sub: 'CP1 · Gate 1' },
  { name: 'design', file: 'design.a3.html', label: 'Design', sub: 'CP2 · Gate 2' },
  { name: 'deploy', file: 'deploy.a3.html', label: 'Deploy', sub: 'CP3 · Gate 3' },
]

const framework = readFileSync(join(HERE, '..', 'a3-framework.css'), 'utf8')
const zoomJs = readFileSync(join(HERE, '..', 'a3-zoom.js'), 'utf8')

// a3-framework.css ends with the zoom/lightbox block. That block must NOT go
// through the `.pg`-scoping pass below — the lightbox overlay it styles is
// appended straight to <body>, outside every `.pg` section, so a scoped
// selector like `.pg .a3-lightbox` would simply never match. Split it off
// and emit it once, verbatim, globally (its class names are namespaced
// enough — a3-* — to never collide with sheet or pack content).
const ZOOM_MARKER = '/* ================================================================\n   Zoom / lightbox'
const zoomSplit = framework.indexOf(ZOOM_MARKER)
const frameworkCore = zoomSplit === -1 ? framework : framework.slice(0, zoomSplit)
const zoomCss = zoomSplit === -1 ? '' : framework.slice(zoomSplit)

/**
 * Scope a full stylesheet under `prefix`. Handles @media (recurses),
 * keeps @keyframes/@font-face verbatim, drops @page (the pack sets its own),
 * re-homes :root/body onto the prefix, and drops bare html rules.
 */
function scopeStylesheet(css, prefix) {
  css = css.replace(/\/\*[\s\S]*?\*\//g, '')
  const out = []
  let i = 0
  while (i < css.length) {
    const brace = css.indexOf('{', i)
    if (brace === -1) break
    const header = css.slice(i, brace).trim()
    let depth = 1
    let j = brace + 1
    while (j < css.length && depth > 0) {
      if (css[j] === '{') depth++
      else if (css[j] === '}') depth--
      j++
    }
    const body = css.slice(brace + 1, j - 1)
    if (header.startsWith('@media')) {
      out.push(`${header} {\n${scopeStylesheet(body, prefix)}\n}`)
    } else if (header.startsWith('@keyframes') || header.startsWith('@font-face')) {
      out.push(`${header} {${body}}`)
    } else if (header.startsWith('@page')) {
      // dropped — the pack shell owns page setup
    } else {
      const scoped = header
        .split(',')
        .map(s => {
          s = s.trim()
          if (!s) return null
          if (s === ':root' || s === 'body' || s === 'html, body' || s === 'html,body') return prefix
          if (s === 'html') return null
          if (s === '*') return `${prefix} *`
          s = s.replace(/^(html|body)\s+/, '')
          return `${prefix} ${s}`
        })
        .filter(Boolean)
        .join(', ')
      if (scoped && body.trim()) out.push(`${scoped} { ${body.trim()} }`)
    }
    i = j
  }
  return out.join('\n')
}

/* ------------------------------------------------------------- the sheets */

let logo = ''
const sections = []
const pageCss = []

for (const p of PAGES) {
  const raw = readFileSync(join(TPL, p.file), 'utf8')
  const styles = [...raw.matchAll(/<style>([\s\S]*?)<\/style>/g)].map(m => m[1])
  // Each template inlines 3 style blocks: [0] the framework (verbatim copy —
  // ignored here, the canonical file above is used instead), [1] the
  // page-specific brand tokens + grid placement, [2] a duplicate copy of the
  // framework's zoom/lightbox block (also ignored — emitted once globally
  // above). Always the grid block specifically, never "whichever is last".
  pageCss.push(`/* ---- ${p.name} ---- */\n${scopeStylesheet(styles[1], `#pg-${p.name}`)}`)
  const body = raw.replace(/^[\s\S]*?<body>/, '').replace(/<script>[\s\S]*$/, '')
  const stage = body.match(/<div class="stage">([\s\S]*)<\/div>\s*$/)?.[1]
  if (!stage) throw new Error(`no .stage found in ${p.file}`)
  if (!logo) logo = raw.match(/src="(data:image\/[^"]+)"/)?.[1] ?? ''
  sections.push(`<section class="pg" id="pg-${p.name}">\n<div class="stage">${stage}</div>\n</section>`)
}

/* ------------------------------------------- the full BTC pack (optional) */

let btcSection = ''
let btcCss = ''
let btcScript = ''
if (existsSync(BTC_SRC)) {
  const raw = readFileSync(BTC_SRC, 'utf8')
  btcCss = [...raw.matchAll(/<style>([\s\S]*?)<\/style>/g)]
    .map(m => scopeStylesheet(m[1], '#btc-pack'))
    .join('\n')
  let body = raw.replace(/^[\s\S]*?<body[^>]*>/, '').replace(/<\/body>[\s\S]*$/, '')
  const scripts = [...body.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1])
  btcScript = scripts.join('\n;\n')
  body = body.replace(/<script>[\s\S]*?<\/script>/g, '')
  btcSection = `
<section id="btc-pack-head">
  <span class="k">The full pack</span>
  <h2>Every document behind the sheets</h2>
  <p>The complete Discover, Design and Deploy output set — the four pages above distil what follows.</p>
</section>
<div id="btc-pack">
${body}
</div>`
}

const nav =
  PAGES.map(
    p => `<a href="#pg-${p.name}"><span class="nl">${p.label}</span><span class="ns">${p.sub}</span></a>`
  ).join('\n      ') +
  (btcSection
    ? `\n      <a href="#btc-pack-head"><span class="nl">Full pack</span><span class="ns">27 documents</span></a>`
    : '')

const html = `<!doctype html>
<!-- oap-build:v3 -->
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Beyond the Clinic — On a Page · Maxxim 3D Process</title>
<meta name="maxxim:client" content="beyond-the-clinic">
<meta name="maxxim:skill" content="on-a-page">
<meta name="maxxim:document" content="on-a-page-pack">
<meta name="maxxim:archetype" content="sme">
<meta name="maxxim:generated" content="2026-07-09">
<meta name="maxxim:sources" content="discover-summary, audience-teardown, competitor-analysis, offer-worksheet, strategy-summary, brand-strategy, brand-guidelines, customer-profile, business-plan, marketing-plan, copy-deck, imc-summary, channel plans, validation-register">
<link rel="icon" href="${logo}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Inter+Tight:wght@500;600;700&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
<style>
/* ------------------------------------------------ pack shell (global) */
* { box-sizing: border-box; margin: 0; padding: 0; }
:root { --shell-ink: #171c3d; --shell-accent: #fd8457; }
html { scroll-behavior: smooth; }
html, body { background: #3a3f4c; }
body { font-family: 'Inter', system-ui, sans-serif; }
@page { size: A3 landscape; margin: 0; }
.pg-nav{position:fixed;inset:0 0 auto 0;z-index:30;display:flex;align-items:center;gap:18px;
  padding:10px 20px;background:var(--shell-ink);box-shadow:0 2px 14px rgba(0,0,0,.35)}
.pg-nav .mark{display:flex;align-items:center;gap:10px}
.pg-nav .mark img{height:22px;filter:brightness(0) invert(1)}
.pg-nav .mark span{font-family:'Inter Tight',sans-serif;font-weight:700;font-size:14px;color:#fff;white-space:nowrap}
.pg-nav nav{display:flex;gap:6px;flex:1;justify-content:center;flex-wrap:wrap}
.pg-nav nav a{display:flex;flex-direction:column;align-items:center;gap:1px;text-decoration:none;
  border:1px solid rgba(255,255,255,.22);border-radius:9px;padding:5px 14px}
.pg-nav nav a:hover{border-color:var(--shell-accent)}
.pg-nav .nl{font-family:'Inter Tight',sans-serif;font-weight:600;font-size:12.5px;color:#fff}
.pg-nav .ns{font-family:'Poppins',sans-serif;font-weight:600;font-size:8px;letter-spacing:.12em;
  text-transform:uppercase;color:var(--shell-accent)}
.pg-nav .print button{font-family:'Poppins',sans-serif;font-weight:600;font-size:12px;cursor:pointer;
  background:var(--shell-accent);color:#fff;border:0;border-radius:8px;padding:9px 16px;white-space:nowrap}
#btc-pack-head{width:min(100% - 32px, 1587px);margin:26px auto 14px;color:#fff}
#btc-pack-head .k{font-family:'Poppins',sans-serif;font-weight:600;font-size:10px;letter-spacing:.18em;
  text-transform:uppercase;color:var(--shell-accent)}
#btc-pack-head h2{font-family:'Inter Tight',sans-serif;font-weight:700;font-size:26px;margin:6px 0 4px}
#btc-pack-head p{font-size:14px;color:rgba(255,255,255,.75);max-width:70ch}
#btc-pack{width:min(100% - 32px, 1587px);margin:0 auto 60px;background:#fff;border-radius:14px;
  overflow:hidden;box-shadow:0 12px 48px rgba(0,0,0,.45)}
#btc-pack .sidebar{top:76px;max-height:calc(100vh - 92px)}
@media screen{
  body{padding:76px 0 40px}
  .pg{margin:0 auto 28px;scroll-margin-top:72px}
  .pg .sheet{box-shadow:0 12px 48px rgba(0,0,0,.45)}
  #btc-pack-head{scroll-margin-top:86px}
}
@media print{
  html,body{background:#fff;padding:0}
  .pg-nav{display:none}
  .pg{margin:0}
  .pg .stage{transform:none!important;height:auto!important}
  .pg .sheet{break-after:page;box-shadow:none}
  .pg:last-of-type .sheet{break-after:auto}
  #btc-pack-head,#btc-pack{display:none}
}
</style>
<style>
/* --------------------------------------- A3 framework, scoped to sheets */
${scopeStylesheet(frameworkCore, '.pg')}
</style>
<style>
${pageCss.join('\n')}
</style>
${btcCss ? `<style>\n/* ----------------------------- BTC pack document, scoped */\n${btcCss}\n</style>` : ''}
<style>
/* --------------------------- On-a-Page zoom/lightbox, global (unscoped) */
${zoomCss}
</style>
</head>
<body>
<header class="pg-nav">
  <div class="mark"><img src="${logo}" alt="Beyond the Clinic"><span>Beyond the Clinic · On a Page</span></div>
  <nav>
      ${nav}
  </nav>
  <div class="print"><button onclick="print()">Print / Save PDF (4 × A3)</button></div>
</header>
${sections.join('\n')}
${btcSection}
<script>
const fit = () => {
  document.querySelectorAll('.pg .stage').forEach(st => {
    const sh = st.querySelector('.sheet')
    const f = Math.min(1, (innerWidth - 32) / sh.offsetWidth)
    st.style.transform = 'scale(' + f + ')'
    st.style.transformOrigin = 'top center'
    st.style.height = sh.offsetHeight * f + 'px'
  })
}
addEventListener('resize', fit)
addEventListener('load', fit)
fit()
</script>
<script>
${zoomJs}
</script>
${btcScript ? `<script>\n${btcScript}\n</script>` : ''}
</body>
</html>
`

mkdirSync(OUT, { recursive: true })
writeFileSync(join(OUT, 'index.html'), html)
console.log(
  'built public/index.html —',
  PAGES.length,
  'sheets' + (btcSection ? ' + full BTC pack' : ' (no src/btc-pack.html — sheets only)') + ',',
  (html.length / 1024).toFixed(0) + 'KB'
)
