#!/usr/bin/env node
/**
 * Maxxim 3D Process pack builder.
 *
 * Wraps the generated documents in memory/generated/ in a styled shell,
 * emits the pack home page, copies the brand photography and the flagship
 * brand-book template, and mounts the A4 print edition under /book/.
 *
 * Output: site/dist (the Cloudflare Workers assets directory).
 * Run: node site/build.mjs
 */
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const SRC = join(ROOT, 'memory', 'generated')
const OUT = join(ROOT, 'site', 'dist')

/* ---------------------------------------------------------------- tokens */

const C = {
  blue: '#2D5BFF',
  blueTint: '#7D9BFF',
  blueSoft: '#C7D2FF',
  ink: '#0A0A0A',
  white: '#FFFFFF',
  mist: '#F5F6F8',
  bodyGrey: '#3A3D46',
  captionGrey: '#6A6F7B',
  labelGrey: '#8A8F9C',
  border: '#E4E6EC',
  borderSoft: '#EEF0F4',
}

const MONOGRAM = (size, cls = '') =>
  `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 100 100" fill="none" aria-hidden="true"><defs><mask id="mxk11"><rect x="2" y="2" width="96" height="96" rx="26" fill="#fff"/><path d="M29 69 L29 32 L50 54 L71 32 L71 69" fill="none" stroke="#000" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/></mask></defs><rect x="2" y="2" width="96" height="96" rx="26" fill="currentColor" mask="url(#mxk11)"/></svg>`

/* ------------------------------------------------------------- registry */

const PHASES = [
  { key: 'discover', label: 'Discover', no: '01' },
  { key: 'design', label: 'Design', no: '02' },
  { key: 'deploy', label: 'Deploy', no: '03' },
]

// file → slug. brand-guidelines.html feeds the flagship brand-book page and
// is also published as a plain source document.
const DOCS = [
  { phase: 'discover', file: 'discover-summary.html', slug: 'discover-summary', feature: true },
  { phase: 'discover', file: 'discover-addendum.html', slug: 'discover-addendum' },
  { phase: 'discover', file: 'audience-teardown.html', slug: 'audience-teardown' },
  { phase: 'discover', file: 'competitor-analysis.html', slug: 'competitor-analysis' },
  { phase: 'discover', file: 'offer-worksheet.html', slug: 'offer-worksheet' },

  { phase: 'design', file: 'strategy-summary.html', slug: 'strategy-summary', feature: true },
  { phase: 'design', file: 'brand-strategy.html', slug: 'brand-strategy' },
  { phase: 'design', file: 'brand-guidelines.html', slug: 'brand-guidelines' },
  { phase: 'design', file: 'logo-brief.html', slug: 'logo-brief' },
  { phase: 'design', file: 'copy-deck.html', slug: 'copy-deck' },
  { phase: 'design', file: 'customer-profile.html', slug: 'customer-profile' },
  { phase: 'design', file: 'business-plan.html', slug: 'business-plan' },
  { phase: 'design', file: 'marketing-plan.html', slug: 'marketing-plan' },
  { phase: 'design', file: 'social-strategy.html', slug: 'social-strategy' },
  { phase: 'design', file: 'website-strategy.html', slug: 'website-strategy' },

  { phase: 'deploy', file: 'imc-summary.html', slug: 'imc-summary', feature: true },
  { phase: 'deploy', file: 'website-brief.html', slug: 'website-brief' },
  { phase: 'deploy', file: 'design-brief.html', slug: 'design-brief' },
  { phase: 'deploy', file: 'case-study.html', slug: 'case-study' },
  { phase: 'deploy', file: 'crm-plan.html', slug: 'crm-plan' },
  { phase: 'deploy', file: 'edm-plan.html', slug: 'edm-plan' },
  { phase: 'deploy', file: 'events-plan.html', slug: 'events-plan' },
  { phase: 'deploy', file: 'paid-media-plan.html', slug: 'paid-media-plan' },
  { phase: 'deploy', file: 'photo-video-brief.html', slug: 'photo-video-brief' },
  { phase: 'deploy', file: 'pr-plan.html', slug: 'pr-plan' },
  { phase: 'deploy', file: 'seo-strategy.html', slug: 'seo-strategy' },
  { phase: 'deploy', file: 'traditional-media-plan.html', slug: 'traditional-media-plan' },
]

/* ------------------------------------------------------------ shared css */

const FONTS = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">`

const FAVICON = `<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="2" y="2" width="96" height="96" rx="26" fill="${C.blue}"/><path d="M29 69 L29 32 L50 54 L71 32 L71 69" stroke="#fff" stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`
)}">`

const SHELL_CSS = `
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --blue:${C.blue};--blue-tint:${C.blueTint};--blue-soft:${C.blueSoft};
  --ink:${C.ink};--mist:${C.mist};--body:${C.bodyGrey};--caption:${C.captionGrey};
  --label:${C.labelGrey};--border:${C.border};--border-soft:${C.borderSoft};
  --sans:'Poppins',system-ui,sans-serif;--mono:'IBM Plex Mono',ui-monospace,monospace;
}
html{scroll-behavior:smooth}
body{font-family:var(--sans);color:var(--ink);background:#fff;-webkit-font-smoothing:antialiased}
a{color:var(--blue);text-decoration:none}
a:hover{text-decoration:underline}

.sidebar{position:fixed;inset:0 auto 0 0;width:236px;background:#fff;border-right:1px solid var(--border);
  padding:28px 24px;display:flex;flex-direction:column;overflow-y:auto;z-index:10}
.sidebar .mark{display:flex;align-items:center;gap:9px;color:var(--blue)}
.sidebar .mark span{font-size:19px;font-weight:700;letter-spacing:-0.02em;color:var(--ink)}
.sidebar .eyebrow{margin-top:10px;font-family:var(--mono);font-size:10.5px;font-weight:600;
  letter-spacing:.18em;color:var(--label);text-transform:uppercase}
.sidebar nav{margin-top:26px;flex:1}
.sidebar .phase{margin-bottom:18px}
.sidebar .phase>.plabel{font-family:var(--mono);font-size:10.5px;font-weight:600;letter-spacing:.14em;
  color:var(--blue);text-transform:uppercase;margin-bottom:8px;display:block}
.sidebar .doc{display:flex;gap:9px;align-items:baseline;padding:5px 0;font-size:13px;font-weight:500;color:var(--body)}
.sidebar .doc:hover{color:var(--blue);text-decoration:none}
.sidebar .doc.current{color:var(--blue);font-weight:600}
.sidebar .doc .n{font-family:var(--mono);font-size:10px;color:var(--label);flex:none}
.sidebar .foot{margin-top:22px;font-size:11px;color:var(--label);line-height:1.5}
.sidebar .back{display:inline-flex;align-items:center;gap:6px;margin-top:4px;font-size:12.5px;font-weight:600}

.main{margin-left:236px;min-height:100vh}
.content{max-width:1080px;padding:56px 64px 96px}

@media(max-width:960px){
  .sidebar{position:static;width:auto;border-right:none;border-bottom:1px solid var(--border);
    flex-direction:column;padding:20px 22px}
  .sidebar nav{margin-top:16px;display:flex;gap:22px;overflow-x:auto;padding-bottom:6px}
  .sidebar .phase{margin-bottom:0;min-width:180px}
  .main{margin-left:0}
  .content{padding:36px 22px 72px}
}
`

const DOC_CSS = `
.doc-head .phase-chip{display:inline-flex;align-items:center;gap:8px;font-family:var(--mono);
  font-size:11px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--blue);
  background:var(--mist);border:1px solid var(--border);border-radius:999px;padding:6px 14px}
.doc-head h1{margin-top:18px;font-size:46px;font-weight:700;letter-spacing:-.025em;line-height:1.05}
.doc-head .rule{margin-top:22px;height:2px;background:var(--blue)}
.doc-body{margin-top:34px}
.doc-body section{margin:0 0 44px}
.doc-body h2{font-size:26px;font-weight:600;letter-spacing:-.015em;margin:44px 0 14px;color:var(--ink)}
.doc-body h3{font-size:19px;font-weight:600;margin:28px 0 10px}
.doc-body h4{font-size:16px;font-weight:600;margin:22px 0 8px}
.doc-body p{font-size:15.5px;line-height:1.7;color:var(--body);margin:0 0 14px;max-width:76ch}
.doc-body ul,.doc-body ol{margin:0 0 16px 22px}
.doc-body li{font-size:15.5px;line-height:1.65;color:var(--body);margin-bottom:8px;max-width:72ch}
.doc-body table{width:100%;border-collapse:collapse;margin:18px 0 24px;font-size:14px;line-height:1.5}
.doc-body th{text-align:left;background:var(--ink);color:#fff;font-weight:600;padding:11px 14px;font-size:13px}
.doc-body th:first-child{border-radius:10px 0 0 0}
.doc-body th:last-child{border-radius:0 10px 0 0}
.doc-body td{padding:11px 14px;border-bottom:1px solid var(--border-soft);vertical-align:top;color:var(--body)}
.doc-body tr:nth-child(even) td{background:var(--mist)}
.doc-body figure{margin:20px 0 26px}
.doc-body figure img{max-width:100%;border-radius:14px;border:1px solid var(--border)}
.doc-body figcaption{margin-top:8px;font-size:12.5px;color:var(--label)}
.doc-body strong{color:var(--ink)}
.doc-end{margin-top:56px;border-top:1px solid var(--border);padding-top:18px;
  font-family:var(--mono);font-size:11.5px;letter-spacing:.08em;color:var(--label);text-transform:uppercase}
.doc-end.trunc{color:#B4841F}
.doc-nav{margin-top:26px;display:flex;justify-content:space-between;gap:16px}
.doc-nav a{display:inline-flex;flex-direction:column;gap:3px;border:1px solid var(--border);
  border-radius:14px;padding:14px 20px;min-width:200px}
.doc-nav a:hover{border-color:var(--blue);text-decoration:none}
.doc-nav .lbl{font-family:var(--mono);font-size:10px;letter-spacing:.14em;color:var(--label);text-transform:uppercase}
.doc-nav .ttl{font-size:14px;font-weight:600;color:var(--ink)}
`

/* --------------------------------------------------------------- helpers */

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function readDoc(doc) {
  const raw = readFileSync(join(SRC, doc.phase, doc.file), 'utf8')
  const title = (raw.match(/<title>(.*?)<\/title>/s)?.[1] ?? doc.slug)
    .replace(/[,-]\s*Maxxim\s*$/i, '')
    .trim()
  const complete = /<\/html>\s*$/.test(raw)
  let body = raw.replace(/^[\s\S]*?<body>/, '').replace(/<\/body>[\s\S]*$/, '')
  body = body.replace(/<h1>[\s\S]*?<\/h1>/, '') // shell renders the title
  // Re-point cross-doc links at pack URLs.
  body = body.replace(/href="(?:\.\.\/)?(discover|design|deploy)\/([a-z0-9-]+)\.html"/g, 'href="/3d-process/$1/$2/"')
  for (const p of PHASES) {
    body = body.replace(
      new RegExp(`href="([a-z0-9-]+)\\.html"`, 'g'),
      (m, slug) => (DOCS.some(d => d.phase === doc.phase && d.slug === slug) ? `href="/3d-process/${doc.phase}/${slug}/"` : m)
    )
  }
  return { title, complete, body }
}

function sidebar({ current = null, home = false } = {}) {
  const groups = PHASES.map(p => {
    const items = DOCS.filter(d => d.phase === p.key)
      .map(d => {
        const cls = current === `${d.phase}/${d.slug}` ? 'doc current' : 'doc'
        return `<a class="${cls}" href="/3d-process/${d.phase}/${d.slug}/"><span class="n">·</span>${esc(d.title)}</a>`
      })
      .join('\n')
    const extra =
      p.key === 'design'
        ? `<a class="doc${current === 'design/brand-book' ? ' current' : ''}" href="/3d-process/design/brand-book/"><span class="n">★</span>Brand Book</a>\n`
        : p.key === 'discover'
          ? `<a class="doc" href="/3d-process/discover/discover-summary-deck/"><span class="n">▸</span>Gate 1 Deck</a>\n`
          : ''
    return `<div class="phase"><span class="plabel">${p.no} ${p.label}</span>\n${extra}${items}</div>`
  }).join('\n')
  return `<aside class="sidebar">
  <a class="mark" href="/">${MONOGRAM(26)}<span>Maxxim</span></a>
  <span class="eyebrow">3D Process</span>
  <nav>${groups}</nav>
  <div class="foot">${home ? '' : '<a class="back" href="/">← Pack home</a><br>'}Edition 03 · 2026</div>
</aside>`
}

/* -------------------------------------------------------------- doc page */

function docPage(doc, prev, next) {
  const phase = PHASES.find(p => p.key === doc.phase)
  const nav = [
    prev
      ? `<a href="/3d-process/${prev.phase}/${prev.slug}/"><span class="lbl">← Previous</span><span class="ttl">${esc(prev.title)}</span></a>`
      : '<span></span>',
    next
      ? `<a href="/3d-process/${next.phase}/${next.slug}/" style="text-align:right"><span class="lbl">Next →</span><span class="ttl">${esc(next.title)}</span></a>`
      : '<span></span>',
  ].join('\n')
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(doc.title)} · Maxxim 3D Process</title>
${FAVICON}${FONTS}
<style>${SHELL_CSS}${DOC_CSS}</style>
</head>
<body>
${sidebar({ current: `${doc.phase}/${doc.slug}` })}
<div class="main"><div class="content">
  <header class="doc-head">
    <span class="phase-chip">${phase.no} · ${phase.label}</span>
    <h1>${esc(doc.title)}</h1>
    <div class="rule"></div>
  </header>
  <div class="doc-body">
${doc.body}
  </div>
  <div class="doc-end${doc.complete ? '' : ' trunc'}">${
    doc.complete ? 'End of document' : 'Source capture ends here — full document held in the Maxxim engine'
  }</div>
  <div class="doc-nav">${nav}</div>
</div></div>
</body>
</html>`
}

/* -------------------------------------------------------------- home page */

function homePage() {
  const cards = PHASES.map(p => {
    const items = DOCS.filter(d => d.phase === p.key)
      .map(
        d => `<a class="card${d.feature ? ' feature' : ''}" href="/3d-process/${d.phase}/${d.slug}/">
  <span class="cn">${p.no}</span><span class="ct">${esc(d.title)}</span>
  <span class="arrow">→</span></a>`
      )
      .join('\n')
    return `<section class="phase-block" id="${p.key}">
  <h2><span class="pno">${p.no}</span>${p.label}</h2>
  <div class="grid">${items}</div>
</section>`
  }).join('\n')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Maxxim · 3D Process Pack</title>
${FAVICON}${FONTS}
<style>${SHELL_CSS}
.hero{background:var(--ink);color:#fff;border-radius:24px;padding:56px 56px 50px;position:relative;overflow:hidden}
.hero .kicker{font-family:var(--mono);font-size:11.5px;font-weight:600;letter-spacing:.2em;color:var(--blue-tint);text-transform:uppercase}
.hero h1{margin-top:18px;font-size:56px;font-weight:700;letter-spacing:-.03em;line-height:1.02;max-width:16ch}
.hero h1 em{font-style:normal;color:var(--blue-tint)}
.hero p{margin-top:20px;font-size:17px;font-weight:300;line-height:1.6;color:rgba(255,255,255,.78);max-width:56ch}
.hero .cta{display:inline-flex;align-items:center;gap:10px;margin-top:30px;background:var(--blue);color:#fff;
  font-weight:600;font-size:15px;border-radius:12px;padding:14px 26px}
.hero .cta:hover{text-decoration:none;filter:brightness(1.07)}
.keyvis{margin-top:26px;border-radius:20px;overflow:hidden;position:relative}
.keyvis img{width:100%;height:340px;object-fit:cover;display:block}
.keyvis .tag{position:absolute;right:20px;bottom:16px;display:flex;align-items:center;gap:8px;color:#fff;
  font-weight:700;letter-spacing:-.02em;font-size:18px;text-shadow:0 1px 8px rgba(0,0,0,.35)}
.phase-block{margin-top:56px}
.phase-block h2{font-size:30px;font-weight:700;letter-spacing:-.02em;display:flex;align-items:baseline;gap:14px}
.phase-block .pno{font-family:var(--mono);font-size:14px;font-weight:600;color:var(--blue)}
.grid{margin-top:18px;display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:14px}
.card{display:flex;align-items:center;gap:12px;border:1px solid var(--border);border-radius:14px;
  padding:16px 20px;color:var(--ink)}
.card:hover{border-color:var(--blue);text-decoration:none}
.card .cn{font-family:var(--mono);font-size:10.5px;color:var(--label)}
.card .ct{font-size:14.5px;font-weight:600;flex:1}
.card .arrow{color:var(--blue);font-weight:600}
.card.feature{background:var(--mist)}
.bb-feature{margin-top:56px;display:grid;grid-template-columns:1fr 1fr;gap:0;border-radius:24px;overflow:hidden;
  background:var(--blue);color:#fff}
.bb-feature .txt{padding:44px 46px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start}
.bb-feature .kicker{font-family:var(--mono);font-size:11px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.72)}
.bb-feature h2{margin-top:14px;font-size:36px;font-weight:700;letter-spacing:-.025em;line-height:1.08}
.bb-feature p{margin-top:14px;font-size:15.5px;font-weight:300;line-height:1.6;color:rgba(255,255,255,.85)}
.bb-feature .cta{margin-top:24px;background:#fff;color:var(--blue);font-weight:600;font-size:15px;border-radius:12px;padding:13px 24px}
.bb-feature .cta:hover{text-decoration:none}
.bb-feature img{width:100%;height:100%;object-fit:cover;display:block;min-height:320px}
.also{margin-top:18px;font-size:13.5px;color:var(--caption)}
@media(max-width:960px){.hero{padding:36px 26px}.hero h1{font-size:38px}.bb-feature{grid-template-columns:1fr}}
</style>
</head>
<body>
${sidebar({ home: true })}
<div class="main"><div class="content">
  <div class="hero">
    <span class="kicker">Maxxim × Jewell · 3D Process · Edition 03 · 2026</span>
    <h1>The proven method, run by a <em>human</em>, at AI speed.</h1>
    <p>The complete Maxxim strategy pack: Discover, Design and Deploy, produced by the engine and
       signed off by the accountable human at every gate. Start with the brand book, then work
       through each phase in order.</p>
    <a class="cta" href="/brand-guidelines/">Open the Brand Guidelines →</a>
  </div>

  <div class="keyvis">
    <img src="/images/cover-city.jpg" alt="City at dusk in the Signal Blue grade">
    <span class="tag">${MONOGRAM(22)} Maxxim</span>
  </div>

  <div class="bb-feature">
    <div class="txt">
      <span class="kicker">Flagship · Brand Identity Guidelines · Edition 03</span>
      <h2>The Maxxim Brand Book</h2>
      <p>Strategy foundation, logo system, Signal Blue, the Poppins scale, voice, imagery and
         applications — the canonical record of the brand, with the Edition 03 photography.</p>
      <a class="cta" href="/brand-guidelines/">Read it →</a>
    </div>
    <img src="/images/s4-flatlay.jpg" alt="Maxxim brand materials flat lay">
  </div>
  <p class="also">Also available: <a href="/3d-process/design/brand-book/">the web edition</a> (single scrolling page) and <a href="/book/">the A4 print edition</a> (22-page landscape document).</p>

  ${cards}
</div></div>
</body>
</html>`
}

/* ----------------------------------------------------------------- build */

rmSync(OUT, { recursive: true, force: true })
mkdirSync(OUT, { recursive: true })

// Load doc content + titles first (sidebar needs titles).
for (const doc of DOCS) Object.assign(doc, readDoc(doc))

// Doc pages with prev/next within the full ordered list.
DOCS.forEach((doc, i) => {
  const dir = join(OUT, '3d-process', doc.phase, doc.slug)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), docPage(doc, DOCS[i - 1], DOCS[i + 1]))
})

// Gate 1 deck, complete and self-contained — served raw.
{
  const dir = join(OUT, '3d-process', 'discover', 'discover-summary-deck')
  mkdirSync(dir, { recursive: true })
  cpSync(join(SRC, 'discover', 'discover-summary.deck.html'), join(dir, 'index.html'))
}

// Brand photography.
cpSync(join(ROOT, 'brand-guidelines', 'public', 'images'), join(OUT, 'images'), { recursive: true })

// Flagship brand book (web edition, hand-built single page).
{
  const dir = join(OUT, '3d-process', 'design', 'brand-book')
  mkdirSync(dir, { recursive: true })
  cpSync(join(ROOT, 'site', 'templates', 'brand-book.html'), join(dir, 'index.html'))
}

// Official Brand Guidelines — the authored Bundled Page, with its
// image-slots wired to the Edition 03 photography and a self-hosted
// React/Babel runtime (so it never depends on a public CDN).
{
  const dir = join(OUT, 'brand-guidelines')
  mkdirSync(dir, { recursive: true })
  cpSync(join(ROOT, 'site', 'templates', 'brand-guidelines.html'), join(dir, 'index.html'))
  cpSync(join(ROOT, 'brand-guidelines', 'public', 'images'), join(dir, 'images'), { recursive: true })
  cpSync(join(ROOT, 'site', 'vendor'), join(dir, 'vendor'), { recursive: true })
}

// A4 print edition (built separately with base=/book/).
const BOOK = join(ROOT, 'brand-guidelines', 'dist')
if (existsSync(join(BOOK, 'index.html'))) {
  cpSync(BOOK, join(OUT, 'book'), { recursive: true })
}

// Pack home.
writeFileSync(join(OUT, 'index.html'), homePage())

console.log('Built site/dist:', DOCS.length, 'docs + brand book + deck + home')
