/** Shared layout: head, header, footer, page shell. Plain template strings,
 *  rendered at build time so every page ships as static HTML. */

import { site, nav, cta, footerNav } from '../data/site.mjs'

export const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export const logo = (variant, height) =>
  `<img src="/images/logo-${variant}.png" alt="Maxxim" width="560" height="166" style="height:${height}px;width:auto" decoding="async">`

/** Full-viewport hero shared by every page. media is {img} or
 *  {video: {src, poster}}; video backgrounds pause under reduced motion. */
export function heroFull({ media, eyebrow, title, lede, ctas, contentMax = 680 }) {
  const bg = media.video
    ? `<video class="hero-full-bg" data-bg autoplay muted loop playsinline preload="auto" poster="${media.video.poster}" aria-hidden="true" tabindex="-1"><source src="${media.video.src}" type="video/mp4"></video>`
    : `<img class="hero-full-bg" src="${media.img}" alt="" width="2528" height="1696" fetchpriority="high">`
  return `
<section class="hero-full">
  ${bg}
  <div class="hero-full-scrim" aria-hidden="true"></div>
  <div class="wrap hero-full-content">
    <div class="stack-lg" style="max-width:${contentMax}px">
      ${eyebrow ? `<p class="kicker" style="color:var(--blue-tint)">${eyebrow}</p>` : ''}
      <h1 class="display" style="color:var(--white)">${title}</h1>
      <p class="lede" style="color:rgba(255,255,255,.88)">${lede}</p>
      ${ctas ? `<div class="hero-ctas">${ctas}</div>` : ''}
    </div>
  </div>
</section>`
}

function head({ title, description, path, ogImage, jsonLd }) {
  const canonical = site.origin + path
  return `<!doctype html>
<html lang="${site.locale}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${site.name}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${site.origin}${ogImage || '/images/og-default.jpg'}">
<meta property="og:locale" content="${site.ogLocale}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/fonts/poppins-400.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/poppins-700.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/styles.css">
<script>document.documentElement.classList.add('js')</script>
${jsonLd ? `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` : ''}
</head>`
}

function header(path) {
  const links = nav
    .map(
      (l) =>
        `<a href="${l.href}"${path === l.href ? ' aria-current="page"' : ''}>${l.label}</a>`
    )
    .join('\n      ')
  return `
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap nav">
    <a class="nav-brand" href="/" aria-label="Maxxim, home">${logo('ink', 26)}</a>
    <button class="nav-toggle" aria-expanded="false" aria-controls="nav-links" aria-label="Menu">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
    </button>
    <nav id="nav-links" class="nav-links" aria-label="Primary">
      ${links}
      <a class="btn btn-primary" href="${cta.primary.href}">${cta.primary.label}</a>
    </nav>
  </div>
</header>`
}

function footer() {
  const list = (items) =>
    items.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join('')
  return `
<footer class="site-footer">
  <div class="wrap">
    <div class="footer-grid">
      <div class="stack">
        <div class="footer-brand">${logo('white', 24)}</div>
        <p>The agency-in-a-box. The proven method, run by a human, at AI speed. Discover, Design, Deploy, then the system learns and the next cycle gets sharper.</p>
        <p><a href="mailto:${site.email}" style="color:rgba(255,255,255,.85);text-decoration:none">${site.email}</a></p>
      </div>
      <nav aria-label="Footer"><h2>Explore</h2><ul>${list(footerNav.explore)}</ul></nav>
      <nav aria-label="Legal"><h2>Legal</h2><ul>${list(footerNav.legal)}</ul></nav>
    </div>
    <div class="footer-legal">
      <span>&copy; 2026 Maxxim. All rights reserved.</span>
      <a href="/brand-guidelines/">Brand guidelines</a>
      <span>Human checked. Partner approved. Client owned.</span>
    </div>
  </div>
</footer>`
}

/** Small enhancement script: mobile nav toggle + scroll reveal. No frameworks,
 *  every page works with JS disabled. */
const script = `
<script>
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('video[data-bg]').forEach(function (v) {
      v.removeAttribute('autoplay');
      v.pause();
    });
  }
  var t = document.querySelector('.nav-toggle');
  var n = document.getElementById('nav-links');
  if (t && n) t.addEventListener('click', function () {
    var open = n.classList.toggle('open');
    t.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }
})();
</script>`

export function page({ title, description, path, ogImage, jsonLd, body, extraScripts = '' }) {
  return `${head({ title, description, path, ogImage, jsonLd })}
<body>${header(path)}
<main id="main">
${body}
</main>
${footer()}
${script}
${extraScripts}
</body>
</html>`
}
