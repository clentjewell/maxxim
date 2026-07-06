# Build brief — Rebuild the Maxxim showcase website

> **How to use this file.** Paste everything below the line into a fresh Claude
> Code session opened on the `clentjewell/maxxim` repository, with
> `clentjewell/jewell-ai` added to the session as a read-only reference. It is a
> complete, self-contained build brief. Work the loop at the end until the site
> is delivered to the definition of done with a high degree of confidence.

---

You are **Fable 5**, acting as the lead engineer and brand-systems architect for
**Maxxim**. Your job is to **rebuild the Maxxim website as the flagship showcase
site** — the public shop window for the Maxxim engine and the Jewell × Maxxim
model — and to **optimise it in every way**: performance, accessibility, SEO,
security, conversion, maintainability, and brand fidelity.

This is a rebuild, not a redecoration. The current site is a bespoke Node build
script that emits a 3D Process document pack and a brand book. That work is
valuable and must be preserved, but it is not a showcase website. You are
building the real thing on a proper, optimised foundation, and folding the
existing assets into it.

Work in British English. Be direct. Separate recommendation from action. Show
what needs human sign-off before you touch it.

---

## 1. The two repositories

You have two repos in the session.

**`clentjewell/maxxim` (this repo — you build here).**
- `site/build.mjs` — the current bespoke builder. Emits `site/dist/`.
- `site/templates/` — `brand-book.html` (hand-built single-page web edition) and
  `brand-guidelines.html` (the authored bundled page).
- `brand-guidelines/` — a Vite + React 18 A4-landscape brand book (Edition 03),
  with the locked tokens in `src/theme.ts` and the Higgsfield photography in
  `public/images/`.
- `memory/generated/` — the generated 3D Process documents (Discover, Design,
  Deploy) that the builder wraps.
- `wrangler.jsonc` — Cloudflare project `maxxim`, static assets from `site/dist`.

**`clentjewell/jewell-ai` (reference only — do not modify).**
This is the sister brand's live site and your **reference architecture**. It is
the quality bar. Study it before you write a line:
- Astro 5 + Tailwind v4 + TypeScript strict, `output: "static"`, near-zero client JS.
- All design tokens in one place: `src/styles/global.css` inside the Tailwind
  `@theme` block. No hardcoded colours or off-scale spacing anywhere else.
- Brand config in `src/lib/site.ts`. Content collections for `work/` and
  `insights/`. Structured copy in `src/data/`.
- Self-hosted, subset woff2 fonts, preloaded. `public/_headers` for security and
  cache. OG images generated at build with satori. Sitemap integration.
- Deployed to Cloudflare with Pages Functions in `functions/` for forms and the
  assistant proxy.

Read at least: `jewell-ai/README.md`, `DECISIONS.md`, `astro.config.mjs`,
`src/lib/site.ts`, `src/styles/global.css`, `src/layouts/BaseLayout.astro`,
`src/pages/index.astro`, `src/components/Seo.astro`, `src/components/ui/*`, and
`public/_headers`. Reuse its patterns; do not copy its content or its palette.

---

## 2. The Jewell × Maxxim relationship (the seam)

This is the spine of the whole site. Get it exactly right. It is already encoded
in this repo's brand book (`site/templates/brand-book.html` and
`brand-guidelines/src/pages/`) — treat that as canonical and do not contradict it.

- **Jewell is the name on the door. Maxxim is the engine behind it.** Jewell is
  the human-led commercialisation and client-delivery brand: it enters and owns
  the client relationship, runs the always-human Discover phase, and signs off
  every gate. Maxxim is the intelligence, method and automation layer that lets a
  capacity-capped operator deliver agency-grade growth repeatably.
- **The essence:** *The human at the wheel.* The proven method, run by a human,
  at AI speed. Maxxim is a method, not a magic box.
- **The method:** **3D + Deepen** — Discover, Design, Deploy, then the
  compounding Deepen loop once the engine is live. The gate is the quality bar;
  no phase proceeds until the prior one is signed off.
- **The seam, quantified:** roughly **80 / 20** — AI carries the repeatable 80%;
  the named human owns the 20% clients pay for (trust, taste, judgement),
  human-checked at every gate.
- **Archetype:** Sage (primary) + Creator (supporting). *Trust that moves.*
- **Positioning, one line:** the only AI-powered marketing platform combining a
  proven method, a named human at every gate, and a partner community — so
  outcomes are finished, owned, and delivered at speed.
- **Live proof:** Jewell, a 35-year operator, now runs the whole model in
  market. That is the proof the model works — but see the clearance rules below.

### Whose site is this, and how the seam is told

This is the **Maxxim** site. Its primary audience is **partners and operators**
(the people who license the method, refer clients in, or plug in as specialists),
with the growing business / end client as the secondary reader. So **this site
is where the seam is told openly** — Maxxim as the engine, Jewell as the live
proof of the model.

Note the deliberate asymmetry, and preserve it: **the live Jewell site never
mentions Maxxim.** On the client-facing brand, the engine stays behind the door.
Do not import that reticence here — but do honour its mirror image: never make
Maxxim look like it replaces or overshadows the human-led Jewell service. Maxxim
enables; Jewell delivers. Keep the human the hero.

### Relationship rules — non-negotiable

- Do not blur Jewell and Maxxim into one vague AI brand. They are a family with a
  shared spine and distinct identities.
- Do not position Maxxim as a competing front door to Jewell's clients.
- Do not make Maxxim bigger than Jewell in any depiction of the client experience.
- Never sell spectacle. No "revolutionary AI platform transforming marketing
  forever." The voice is calm, credible, evidence-led, never hyperbolic.

---

## 3. Proof and clearance rules — non-negotiable

- **Pottsville Acupuncture is the only cleared public Maxxim case study.** It is
  the only named client result this site may present as Maxxim's own proof.
- Jewell's named client results (e.g. Hidrive) stay under Jewell's banner and are
  **never** re-used as Maxxim's public proof. You may reference Jewell as the live
  operator of the model; you may not lift Jewell's client outcomes as Maxxim's.
- Do not invent case studies, metrics, logos, testimonials, guarantees, pricing,
  timelines or client names. If a proof point is not cleared and in-repo, it does
  not go on the page. When in doubt, leave it out and flag it for human sign-off.

---

## 4. Brand system

Signal Blue is the shared spine between the two brands. Everything else keeps
Maxxim distinct from Jewell.

- **Colour.** Signal Blue `#2D5BFF` is the only locked brand colour. Maxxim's base
  is **Ink `#0A0A0A` on White**, with **Mist `#F5F6F8`** as the calm neutral —
  cooler and more "engine" than Jewell's warm cream. Supporting chrome tones are
  in `brand-guidelines/src/theme.ts`; port them as tokens, do not re-pick them.
  Blue tint `#7D9BFF` and blue soft `#C7D2FF` for accents-on-dark and hairlines.
  A single "don't" red `#E0342B` exists for misuse examples only.
- **Type.** **Poppins** (300/400/500/600/700) for everything; **IBM Plex Mono**
  for eyebrows, codes, labels and step markers. Poppins is the shared family
  spine with Jewell; the mono is Maxxim's own (Jewell uses JetBrains Mono — keep
  them distinct). **Self-host both as subset woff2 and preload them.** Do not ship
  the current Google Fonts CDN link — remove that dependency.
- **The mark.** The gated-M monogram / pixel-X mnemonic. Reuse the exact SVG from
  `site/build.mjs` (`MONOGRAM`) and `site/templates/brand-book.html`. No
  gradients or shadows on the mark. Signal Blue or currentColor only.
- **Imagery.** The Edition 03 Higgsfield photography in
  `brand-guidelines/public/images/`. Signal Blue grade, premium, calm, capable.
  Reuse it; do not restyle it. Every image needs meaningful `alt` text.
- **Voice.** Sage + Creator. Legibility and restraint over decoration. Short,
  confident, method-backed sentences. Never hyperbolic.

Put every one of these into the Tailwind `@theme` block as the single source of
truth, mirroring how `jewell-ai` does it. No hardcoded colours or off-scale
spacing anywhere else in the build.

---

## 5. Architecture — the recommended rebuild

**Re-platform Maxxim onto the Jewell stack.** This is the primary path, and it is
what "optimise in every way" means here: it gives Maxxim the same optimised,
maintainable foundation as its sister brand, and makes the two a coherent family.

- **Astro 5, `output: "static"`, TypeScript strict, Tailwind v4** via
  `@tailwindcss/vite`, mirroring `jewell-ai/astro.config.mjs` (prefetch on,
  `inlineStylesheets: "auto"`, sitemap integration).
- **Tokens** in `src/styles/global.css` `@theme` — the single source of truth,
  ported from `brand-guidelines/src/theme.ts` and `site/build.mjs`.
- **Brand config** in `src/lib/site.ts` (name, domain, contact, booking URL,
  legal entity, positioning, description). Do not hardcode these in templates.
- **Content collections** for case studies (`work/`, seeded with Pottsville only)
  and insights, schema-validated, exactly as Jewell does it.
- **Self-hosted subset fonts**, preloaded; SEO + generated OG images; `_headers`
  security and cache baseline copied from Jewell and adapted.
- **Deploy target:** keep the existing Cloudflare project `maxxim`. Astro static
  output publishes cleanly to the current Workers static-assets setup
  (`wrangler.jsonc`) or to Cloudflare Pages — keep whichever is already wired,
  update the config to point at the Astro `dist/`, and **do not change the
  project name, domain, DNS or deploy credentials without human sign-off.**

**Preserve and fold in the existing assets — do not delete them:**
- The **3D Process pack** (`memory/generated/` → the Discover/Design/Deploy
  document set) must survive as a browsable section of the new site. Port
  `site/build.mjs`'s wrapping logic into an Astro route (e.g. `/3d-process/…`)
  or keep the generated pack as a pre-built sub-app served under that path.
- The **flagship Brand Book** (React app in `brand-guidelines/` and the
  hand-built `site/templates/brand-book.html`, plus the A4 print edition under
  `/book/`) must remain reachable and pixel-intact. Mount them as sub-sections;
  do not re-implement them from scratch.
- All **Edition 03 imagery** carries over.

If, after reading `jewell-ai`, you judge a lighter path is genuinely better for
this scope, say so with reasons and a trade-off table **before** you commit to
it — but the default is: match the sister-brand architecture.

---

## 6. Information architecture — the showcase site

Design a focused, high-conversion showcase site. Recommended routes (adapt names
to what reads best, keep the set tight — every page must earn its place):

1. **Home (`/`).** The whole story at a glance: essence (*The human at the
   wheel*), the trust-gap "why", the 80/20 seam, 3D + Deepen, the Jewell × Maxxim
   model, one cleared proof point (Pottsville), and one primary call to action
   for partners/operators. Hero uses the Signal Blue grade key visual.
2. **The method — 3D + Deepen (`/method` or `/3d-process`).** The delivery spine,
   gate by gate, with the existing pack browsable beneath it.
3. **The model — Jewell × Maxxim (`/model`).** The seam told in full: name on the
   door vs engine behind it, what belongs to each, what the human owns, the live
   proof. This is the page that makes the relationship legible.
4. **Proof / Work (`/work`).** Pottsville only, from a content collection, with
   room to add cleared studies later.
5. **Brand (`/brand`).** Entry point to the Brand Book (web edition, A4 print
   edition) and the guidelines — fold in what exists.
6. **For partners / operators (`/partners`).** The primary audience: what
   licensing the method gives them, how the community works, how to enquire.
7. **Contact / Start (`/contact`).** One clear next step. A Pages Function form
   like Jewell's, or the booking link from `site.ts` — no new backend without
   sign-off.
8. **Legal + Terms**, **404**, **sitemap**, **robots**.

Global chrome: a Jewell-grade `Header` (with the mark and one accent action),
`Footer`, `Seo`, and `Analytics` component. Keep navigation to the essential set.

---

## 7. Optimise in every way — the checklist

Treat these as acceptance criteria, not aspirations.

**Performance / Core Web Vitals**
- Static HTML, near-zero client JS. No framework runtime shipped for content
  pages. Islands only where genuinely interactive.
- Self-hosted subset woff2, `font-display: swap`, preload the two above-the-fold
  weights. No render-blocking third-party requests. No CDN font link.
- Responsive images with explicit `width`/`height`, `loading="lazy"` below the
  fold, modern formats where the source allows; never lay out-shift (CLS ≈ 0).
- Inline critical CSS (`inlineStylesheets: "auto"`), hashed immutable assets with
  long cache headers. Target Lighthouse ≥ 95 on Performance, Best Practices, SEO,
  and 100 on Accessibility, on mobile.

**Accessibility (WCAG 2.2 AA)**
- Semantic landmarks, one `h1` per page, logical heading order, visible focus
  states, skip-to-content link. All interactive elements keyboard-operable.
- Colour contrast ≥ 4.5:1 for body text (Ink on White is fine; check Blue-on-Ink
  and any tint usage). Meaningful `alt` on every image; decorative images empty
  `alt`. Respect `prefers-reduced-motion` for every animation.

**SEO**
- Per-page title/description/canonical via an `Seo` component; Open Graph and
  Twitter cards with build-generated OG images (satori, as Jewell does); JSON-LD
  `Organization` and `WebSite`; sitemap and robots; clean, stable URLs.

**Security**
- `public/_headers` with `X-Content-Type-Options`, `X-Frame-Options: DENY`,
  `Referrer-Policy`, `Permissions-Policy`, and HSTS, adapted from Jewell. A
  Content-Security-Policy that permits only what the site actually loads
  (self + the booking/analytics origins you keep). No secrets in the repo, in
  client code, or in this file. No inline event handlers that would force
  `unsafe-inline`.

**Responsive & cross-device**
- Fluid clamp type scale and the fixed spacing scale (as Jewell). Verify at
  360 / 768 / 1024 / 1440. No horizontal scroll. Tap targets ≥ 44px.

**Motion**
- Quiet, purposeful motion only (the `--ease-out-quiet` curve). Everything gated
  behind `prefers-reduced-motion`.

**Analytics & conversion**
- A single privacy-respecting analytics hook (match whatever Jewell uses; do not
  add a heavy third-party tag). One primary CTA per page, measurable. Forms
  accessible, validated, and spam-resistant.

**Maintainability**
- `astro check` clean, TypeScript strict, no `any`. Tokens single-sourced.
  Structured copy in `src/data/`, not scattered through templates. A README that
  explains the build, the token system, how to add a case study, and how the 3D
  pack and Brand Book are folded in.

---

## 8. Constraints — do not

- Do not delete the brand book, the 3D Process pack, the imagery, or the memory
  documents. Preserve and fold them in.
- Do not change the Cloudflare project name, domain, DNS, or any deploy
  credentials without explicit human sign-off.
- Do not deploy to production yourself. Build, verify locally, open the PR, and
  hand the deploy decision to a human.
- Do not invent proof, metrics, pricing, testimonials or client names.
- Do not blur the two brands, and do not let Maxxim overshadow the human-led
  Jewell service.
- Do not introduce heavy dependencies, trackers, or client JS that the checklist
  above would fail.
- Do not commit secrets. Do not expose credential values anywhere.

---

## 9. Build process and the delivery loop

Work on the branch you have been assigned. Commit in small, described steps.

1. **Study.** Read the reference files in `jewell-ai` and the canonical brand
   material in this repo. Write a short plan and a trade-off note if you deviate
   from the recommended architecture.
2. **Scaffold.** Stand up the Astro + Tailwind v4 project with tokens, fonts,
   `site.ts`, `BaseLayout`, `Seo`, `_headers`, sitemap and OG generation. Get one
   page rendering with the real tokens before building breadth.
3. **Build the IA** page by page, structured copy first, then layout, then
   polish. Fold in the 3D pack and Brand Book as sub-sections.
4. **Optimise** against the Section 7 checklist explicitly, item by item.
5. **Verify — loop until confident.** After each meaningful change:
   - `npm run build` and `astro check` are clean.
   - Preview the build and click every route; no broken links, no console errors,
     no layout shift, no horizontal scroll at the four breakpoints.
   - Run an accessibility and performance pass (Lighthouse or equivalent) and
     record the scores. Fix anything below target and re-run.
   - Confirm the seam reads correctly and the clearance rules hold on every page.
   Repeat until the definition of done is met with a high degree of confidence.
   Do not declare done on a single pass.
6. **Report honestly.** If a target cannot be hit, say so with the numbers and
   the reason. If a step was skipped, say that. Do not claim green on red.

## 10. Definition of done

- The Maxxim showcase site builds statically, `astro check` passes, and every
  route renders with no broken links or console errors.
- Tokens are single-sourced in `@theme`; fonts are self-hosted and preloaded; the
  Google Fonts CDN dependency is gone.
- The 3D Process pack and the Brand Book (web + A4) are preserved and reachable.
- The seam is told correctly; Pottsville is the only public proof; no invented
  facts; Jewell is never overshadowed.
- Lighthouse: Performance / Best Practices / SEO ≥ 95, Accessibility 100 on
  mobile; CLS ≈ 0. Security headers and CSP in place.
- A clear README, a described commit history, and a draft PR opened for the
  branch. The production deploy decision is left to a human.

## 11. For human sign-off (do not proceed without it)

- Any change to the Cloudflare project, domain, DNS, or deploy credentials.
- The production deploy itself.
- Any new backend, connector, third-party script, or data collection.
- Any proof point, metric, price or client name not already cleared in-repo.
- Any deviation from the recommended sister-brand architecture.

Begin by reading the reference material and writing your plan.
