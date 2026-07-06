# Maxxim — showcase site

The public showcase site for Maxxim: the commercialisation engine that runs a
proven, gated method at AI speed, with an accountable human at every gate.

Built with **Astro 5**, **Tailwind v4**, and **TypeScript (strict)**. Static
output, near-zero client JavaScript, deployed to Cloudflare (project `maxxim`).
Self-hosted subset fonts, a strict per-page Content-Security-Policy, generated
Open Graph image, and a machine-readable `llms.txt` for AI agents.

## Quick start

```bash
npm install
npm run dev        # local dev server
npm run build      # fold legacy assets + generate OG + static build to dist/
npm run preview    # preview the production build
npm run check      # astro check (types + templates)
```

Node 20+ recommended.

## Structure

```
src/
  components/
    ui/              tokens-driven primitives (Button, Section, CaseCard, PageHero, Monogram)
    Header / Footer / Seo / Assistant
  content/work/      case studies (markdown content collection)
  content.config.ts  collection schema
  layouts/           BaseLayout (head, CSP, fonts, reveal)
  lib/site.ts        single source of truth for brand + nav config
  pages/             routes (home, method, work, powered-by, brand, contact, 404, robots, llms)
  styles/global.css  design tokens (@theme) + base styles
public/
  fonts/             self-hosted subset Poppins + IBM Plex Mono (woff2)
  images/            brand photography
  _headers           security + cache headers
scripts/
  fold-legacy.mjs    folds the 3D Process pack + Brand Book into public/ at build
  og.mjs             generates public/og/default.png
```

## Design tokens

Every colour, type, spacing, and layout token lives in one place —
`src/styles/global.css`, inside the Tailwind `@theme` block. There are no
hardcoded colours or off-scale spacing anywhere else in the build.

- **Colour:** white base, Ink `#0A0A0A` type, Mist `#F5F6F8` neutral, and the
  one locked brand colour — Signal Blue `#2D5BFF`.
- **Type:** Poppins (300–600) and IBM Plex Mono (400/500), self-hosted.
- **Spacing:** 4, 8, 16, 24, 32, 48, 64, 96, 128.

Brand configuration (name, domain, contact, positioning) lives in
`src/lib/site.ts`.

## The relationship

Maxxim is presented as the engine — a **powered-by-Maxxim** play for partners and
operators. The work on the site is shown by client/product name; the site does
not narrate any parent brand.

## Adding a case study

Create a markdown file in `src/content/work/your-slug.md`:

```yaml
---
client: "Client Name"
category: "Industry"
audience: "B2B"            # B2B | B2C | Personal brands
summary: "One line, in voice."
results:
  - metric: "Launched"
    label: "and owned by the client"
liveUrl: "https://example.com"   # public production URL only — never admin/preview URLs
status: "launched"               # launched | in-preparation
marquee: true
order: 10
---
```

> **Security:** `liveUrl` must be a public production URL only. Never store admin
> URLs, preview/branch URLs, credentials, or passwords in this repo.

## Legacy assets

The flagship **Brand Book** (React A4 + web editions) and the **3D Process pack**
are preserved and folded into the build by `scripts/fold-legacy.mjs`, served at
`/brand-guidelines/`, `/book/`, and `/3d-process/`. Their source lives in
`brand-guidelines/`, `site/`, and `memory/generated/`.

## Deploy

Static output to `dist/`, published to the Cloudflare project `maxxim`
(`wrangler.jsonc`). The production deploy is a human decision.
