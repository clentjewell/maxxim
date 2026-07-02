# Maxxim Website Rebuild — Phase 0 Report

Date: 2026-07-02. Sources scraped and archived under `docs/source-scrapes/`
(Jewell public site: 139 routes; maxxim.ai: 9 routes; Maxxim admin: access
limitation documented; brand guidelines: extracted from this repo's source).

## 1. What the current Maxxim site does well

- The core positioning is already on-direction: "Agency-grade marketing, with a
  human at the wheel", the 80/20 split, Discover/Design/Deploy with CP1/CP2/CP3,
  ownership from day one, "days, not months", proof-over-hype voice.
- Single-CTA discipline: every page funnels to "Tell us about your business"
  at `/start/`, backed by a real self-hosted form service (apps.maxxim.ai,
  Turnstile protected, honeypotted).
- Honest work page (no invented case studies), legal pages with contractual
  backing for the ownership promise (Terms §4), en-AU throughout, clean
  per-page SEO.

## 2. What the latest brand guidelines change

- Locked tokens: Signal Blue #2D5BFF is the only brand colour; Ink/White/Mist
  neutrals; Poppins with "weight does the work"; the Gated-M monogram (the old
  Blue Frog is permanently retired).
- Voice codified: Plain. Precise. Accountable. Australian English, no em
  dashes, no exclamation marks, short sentences. Sage + Creator archetype.
- Brand idea: "The proven method, run by a human, at AI speed." Pillars:
  the engine for your judgement (80/20), the human at every gate (trust gap),
  the community is the moat.
- The specialists Max, Sal and Pip are sanctioned naming ("the method made
  visible, never the hero"). "Maxwell", "Max OS", "KAOS", "Control Index"
  remain archived; none were found on the live site.
- Imagery: real over illustrated, outcome over abstract; no glowing-brain AI
  imagery. The brand-approved photo library in this repo is used throughout.

## 3. What the actual 3D output library changes

- This repo's `memory/generated/` holds 28 real generated documents across
  discover/, design/ and deploy/, with CP1/CP2/CP3 gate naming used inside the
  documents. The 3D Process is demonstrably an operating library, not a
  marketing diagram, and the site now shows it.
- The site gains a dedicated `/3d-process/` page rendering the full output
  architecture (90 output types across three phases) from one structured data
  module, plus previews of it on home, how-it-works and for-partners.

## 4. What the Jewell site teaches Maxxim

- The loop matters: Jewell's canonical line is "Discover. Design. Deploy.
  Deepen." with "Deploy feeds back into Discover... keeps getting better
  instead of going stale". The Maxxim brand guidelines do not name a fourth
  phase, so per the brief the loop is expressed plainly, borrowing Jewell's
  feedback-loop framing without branding "Deepen".
- Jewell already positions Maxxim publicly as "the AI-enabled, human-led
  engine underneath the Jewell method... the engine behind the partner, not
  the name on the door". The partner page aligns with that.
- Proof governance ("Proof before claim. Always."), the self-run-proof move
  ("we ran the method on ourselves; this site is what it produced") and an
  AI-readability layer (llms.txt) are patterns worth carrying; llms.txt is now
  shipped.
- Not copied: Jewell-only products (Growth Diagnostic, Fractional CMO,
  scorecard/calculator tools), Jewell's gate-0 commercial flow, HubSpot CTAs,
  and Jewell's rule that clients enter only through Jewell (the Maxxim brief
  explicitly keeps a direct business-owner pathway).

## 5. What the Maxxim admin contains that must shape the site

- Not scrapeable: admin.maxxim.ai sits behind Cloudflare Access
  (team `maxxim-partners`); every path 302s to the org sign-in. No content,
  taxonomy or outputs were readable, and no bypass was attempted.
- Mitigation: the in-repo generated output library (`memory/generated/`) was
  used as the authoritative evidence of the real output taxonomy, and it
  matches the brief's architecture (including checkpoint naming). The admin
  scrape remains an open item requiring an authorised session or a service
  token from Clent/Ronnie; see `docs/source-scrapes/maxxim-admin.md`.

## 6. Old brief assumptions removed

- "Maxwell", "Max OS", "KAOS vs CONTROL", "Control Index", "governance
  engine": absent from the live site and kept out of the new one.
- "Joule Projects" (typo, 5 occurrences on 4 live pages): corrected to
  "Jewell Projects" everywhere.
- 3D as a thin three-step diagram: replaced by the output library as central
  proof.
- Single fixed bundle framing ("strategy + launched website" only): widened to
  the structured output system while keeping that bundle as the headline
  outcome.

## 7. Pages and routes created, updated, merged or deleted

- Kept (slugs preserved for SEO): `/`, `/how-it-works/`, `/start/`,
  `/for-partners/`, `/about/`, `/contact/`, `/work/`, `/privacy/`, `/terms/`.
- Created: `/3d-process/` (the output library page), `404.html` (fixes the
  live site's soft-404 defect), `sitemap.xml`, `robots.txt`, `llms.txt`.
- The brand guidelines book remains served at `/brand-guidelines/`.
- No routes deleted.

## 8. Risks (authentication, content, proof, legal, technical)

- Admin access: unresolved; content there may extend the Design-output
  taxonomy (flagged inside the data module).
- Proof: no client case studies are published; the work page uses structural
  proof and honest "in preparation" cards. Publishing anything further needs
  Clent/Ronnie sign-off.
- Legal: privacy and terms are preserved from the live site's working drafts
  (including their "to finalise before launch" notes). Two changes made:
  obfuscated email replaced with plain hello@maxxim.ai, and em dashes
  normalised to brand punctuation. Flagged for partner review.
- Technical: production maxxim.ai is deployed from a different repo (Astro).
  This repo deploys the new site to the `maxxim` worker
  (maxxim.clent.workers.dev). Promoting it to maxxim.ai is a routing/DNS
  decision for Clent/Ronnie. The form embed posts to apps.maxxim.ai with the
  live site key; extended fields (website, role, outcome, timing) ride along
  as extra JSON fields, which the partner form's different shape suggests the
  backend accepts. Verify lead delivery to the inbox after deploy.

## 9. Implementation plan (executed)

1. Central data: `site/data/threeDOutputs.mjs` (phases, groups, outputs,
   checkpoints, loop), `site/data/site.mjs` (nav, CTAs, form keys).
2. Zero-dependency static build (`site/build.mjs`) rendering per-route HTML
   with full SEO metadata, JSON-LD, sitemap, robots, llms.txt; brand
   guidelines built with base `/brand-guidelines/`; everything lands in
   `dist/` served by Wrangler assets with 404 handling.
3. Brand tokens as CSS custom properties in `site/styles.css` (Signal Blue,
   Ink, Mist, Poppins self-hosted with font-display swap, one radius system,
   tinted shadows, reduced-motion-gated reveals).
4. Pages per the brief's structure; forms preserved against the live
   apps.maxxim.ai service; WCAG-minded (skip link, focus states, labels above
   inputs, aria-live status, semantic headings, keyboard-operable accordions).
5. Quality gate: build, screenshot review at 1440/390, link and title audit,
   banned-term and em-dash scans.
