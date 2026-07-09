#!/usr/bin/env node
/**
 * Build the hosted On-a-Page pack: merge the four A3 sheets
 * (../templates/*.a3.html) into one self-contained HTML document with a
 * navigation bar, per-sheet anchors, and print support (4 × A3 landscape
 * pages). Output: public/index.html — served by the password-gated Worker.
 *
 * Each sheet's page-specific CSS is scoped under its #pg-<name> wrapper so
 * the four style blocks can never collide (e.g. .b-gate exists on two
 * sheets). The shared framework CSS is inlined once from ../a3-framework.css.
 *
 * Run: node build.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const TPL = join(HERE, '..', 'templates')
const OUT = join(HERE, 'public')

const PAGES = [
  { name: 'overall', file: 'overall.a3.html', label: '3D on a page', sub: 'Source of truth' },
  { name: 'discover', file: 'discover.a3.html', label: 'Discover', sub: 'CP1 · Gate 1' },
  { name: 'design', file: 'design.a3.html', label: 'Design', sub: 'CP2 · Gate 2' },
  { name: 'deploy', file: 'deploy.a3.html', label: 'Deploy', sub: 'CP3 · Gate 3' },
]

const framework = readFileSync(join(HERE, '..', 'a3-framework.css'), 'utf8')

/** Prefix every top-level selector in a (at-rule-free) CSS block. */
function scopeCss(css, prefix) {
  // Strip :root blocks — tokens are shared and already in the framework.
  css = css.replace(/:root\s*\{[^}]*\}/g, '')
  // Strip comments so they can't confuse the rule split.
  css = css.replace(/\/\*[\s\S]*?\*\//g, '')
  return css
    .split('}')
    .map(rule => {
      const [sel, body] = rule.split('{')
      if (!body || !sel.trim()) return ''
      const scoped = sel
        .split(',')
        .map(s => `${prefix} ${s.trim()}`)
        .join(', ')
      return `${scoped} { ${body.trim()} }`
    })
    .filter(Boolean)
    .join('\n')
}

let logo = ''
const sections = []
const pageCss = []

for (const p of PAGES) {
  const raw = readFileSync(join(TPL, p.file), 'utf8')
  const styles = [...raw.matchAll(/<style>([\s\S]*?)<\/style>/g)].map(m => m[1])
  pageCss.push(`/* ---- ${p.name} ---- */\n${scopeCss(styles[styles.length - 1], `#pg-${p.name}`)}`)
  // The sheet markup: everything inside <div class="stage"> … </div> before <script>.
  const body = raw.replace(/^[\s\S]*?<body>/, '').replace(/<script>[\s\S]*$/, '')
  const stage = body.match(/<div class="stage">([\s\S]*)<\/div>\s*$/)?.[1]
  if (!stage) throw new Error(`no .stage found in ${p.file}`)
  if (!logo) logo = raw.match(/src="(data:image\/[^"]+)"/)?.[1] ?? ''
  sections.push(`<section class="pg" id="pg-${p.name}">\n<div class="stage">${stage}</div>\n</section>`)
}

const nav = PAGES.map(
  p => `<a href="#pg-${p.name}"><span class="nl">${p.label}</span><span class="ns">${p.sub}</span></a>`
).join('\n      ')

const html = `<!doctype html>
<!-- oap-build:v2 -->
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
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Inter+Tight:wght@500;600;700&family=Poppins:wght@500;600&display=swap" rel="stylesheet">
<style>
${framework}
</style>
<style>
/* ---------------------------------------------------------- pack shell */
.pg-nav{position:fixed;inset:0 0 auto 0;z-index:30;display:flex;align-items:center;gap:18px;
  padding:10px 20px;background:var(--ink);box-shadow:0 2px 14px rgba(0,0,0,.35)}
.pg-nav .mark{display:flex;align-items:center;gap:10px}
.pg-nav .mark img{height:22px;filter:brightness(0) invert(1)}
.pg-nav .mark span{font-family:var(--font-head);font-weight:700;font-size:14px;color:#fff;white-space:nowrap}
.pg-nav nav{display:flex;gap:6px;flex:1;justify-content:center;flex-wrap:wrap}
.pg-nav nav a{display:flex;flex-direction:column;align-items:center;gap:1px;text-decoration:none;
  border:1px solid rgba(255,255,255,.22);border-radius:9px;padding:5px 14px}
.pg-nav nav a:hover{border-color:var(--accent)}
.pg-nav .nl{font-family:var(--font-head);font-weight:600;font-size:12.5px;color:#fff}
.pg-nav .ns{font-family:var(--font-label);font-weight:600;font-size:8px;letter-spacing:.12em;
  text-transform:uppercase;color:var(--accent)}
.pg-nav .print button{font-family:var(--font-label);font-weight:600;font-size:12px;cursor:pointer;
  background:var(--accent);color:#fff;border:0;border-radius:8px;padding:9px 16px;white-space:nowrap}
@media screen{
  body{padding:76px 0 40px}
  .pg{margin:0 auto 28px;scroll-margin-top:72px}
}
@media print{
  .pg-nav{display:none}
  body{padding:0}
  .pg{margin:0}
  .pg .sheet{break-after:page}
  .pg:last-of-type .sheet{break-after:auto}
}
</style>
<style>
${pageCss.join('\n')}
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
</body>
</html>
`

mkdirSync(OUT, { recursive: true })
writeFileSync(join(OUT, 'index.html'), html)
console.log('built public/index.html —', PAGES.length, 'sheets,', (html.length / 1024).toFixed(0) + 'KB')
