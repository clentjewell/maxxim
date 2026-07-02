# Maxxim public site — scrape archive

- **Crawled:** 2026-07-02
- **Base URL:** https://maxxim.ai (www.maxxim.ai and maxxim.com.au both 301 → apex)
- **Companion file:** `maxxim-public-site.json` (structured version of everything below)

## Tech stack signals

- **Hosting:** Cloudflare — `server: cloudflare`, `cf-ray`, `cf-cache-status: DYNAMIC`, NEL/report-to headers, Cloudflare email obfuscation (`/cdn-cgi/l/email-protection`) injected into every mailto. Consistent with a Cloudflare Workers/Pages static deploy.
- **Framework:** Astro static build — `data-astro-cid-*` scoped-style attributes and hashed `/_astro/*.css` bundles. Fully server-rendered HTML; no client framework. Vanilla JS only (mobile `<details>` menu close handler, IntersectionObserver scroll-reveal with `prefers-reduced-motion` + no-JS fallbacks).
- **Assets:** `assets.maxxim.ai` — responsive webp sets (`-320/-640/-960/-1280`) under `/maxxim/generated/` (AI-generated hero imagery).
- **Forms:** in-house form service at `apps.maxxim.ai` — `embed.js` posts JSON, per-site key `mx_site_1c0e614947f28b300592ad27`, Cloudflare Turnstile challenge + `_gotcha` honeypot, graceful error codes (`failed_challenge`, `rate_limited`, `quota_exceeded`, `empty_submission`).
- **Locale:** en-AU throughout (`lang="en-AU"`, `og:locale en_AU`, AU pricing idiom "five to ten thousand a month").
- **robots.txt:** Cloudflare managed content-signals — `search=yes, ai-train=no, use=reference`.
- **404 behaviour (defect):** there is no 404 page. **Any unknown path serves the homepage with HTTP 200** — `/pricing/`, `/faq/`, `/3d-process/`, `/outputs/`, random slugs all soft-404 to the homepage. This masks broken links and is an SEO liability.

## Route list (all real routes, per sitemap.xml — 9 pages)

| Path | Title | Priority |
|---|---|---|
| `/` | Agency-grade marketing, with a human at the wheel — Maxxim | 1.0 |
| `/how-it-works/` | How the 3D process works — Maxxim | 0.9 |
| `/start/` | Tell us about your business — Maxxim | 0.9 |
| `/for-partners/` | White-label delivery for agencies — Maxxim for Partners | 0.8 |
| `/about/` | About Maxxim — the people and the proven method | 0.7 |
| `/contact/` | Contact Maxxim — talk to a real human | 0.6 |
| `/work/` | Our work — case studies from the 3D process — Maxxim | 0.5 |
| `/privacy/` | Privacy Policy — Maxxim | 0.3 |
| `/terms/` | Terms of Use — Maxxim | 0.3 |

Probed-but-nonexistent (all soft-404 to homepage): `/3d-process/`, `/outputs/`, `/partners/`, `/proof/`, `/legal/`, `/faq/`, `/pricing/`.

## Site structure

- **Header nav (every page):** Home · How it works · For partners · About · header CTA "Tell us about your business" → `/start/`. Mobile menu is a CSS `<details>` disclosure.
- **Footer (every page):** Explore (How it works, For partners, About, Our work, Contact) · Get in touch (hello@maxxim.ai, maxxim.ai, maxxim.com.au) · Legal (Privacy, Terms). Footer strap: *"The trustworthy middle between a slow, expensive agency and a pile of AI tools you have to run yourself — agency-grade work, human-checked, owned by you."* Signature: *"AI-powered marketing, with a human partner."*
- **Conversion model:** one funnel. Every page repeats the single CTA **"Tell us about your business" → `/start/`** (6–8 times per page). Secondary CTAs: "See how it works" → `/how-it-works/`, "For partners" → `/for-partners/`, "See our work" → `/work/`.
- **SEO:** every page has unique title, meta description, canonical (trailing slash), full OG + Twitter card set (shared OG image `e557e33dcdcb-1280.webp`), and identical Organization JSON-LD (name Maxxim, slogan *"A human at the wheel."*, email hello@maxxim.ai, sameAs maxxim.ai + maxxim.com.au, logo `/logo.svg` — resolves 200).

## Per-page capture

### `/` — Home
- **H1:** Agency-grade marketing. Without the agency.
- **Meta description:** "AI does 80% of the work and an expert partner owns the 20% that matters. A complete strategy and a launched website you own — in days, not months."
- **Sections (eyebrow — H2):**
  1. *A human at the wheel* — hero. Sub: "AI does about 80% of the work. A named human partner owns the 20% that matters — and signs off at every step. You walk away with a complete strategy and a launched website you own outright, in days, not months." Hero note: "You're not signing anything… we'll show you what the 3D process produces."
  2. *Sound familiar?* — "You've already tried both ways. Both let you down." Two failure cards: "You got the agency quote and walked away" (5–10k/month) and "You tried the AI tools and got a second job" (blank box, pile of subscriptions, homepage 70% done).
  3. *The third option* — "The trustworthy middle." Proof list: **80/20 stated plainly** ("AI executes; the human judges"); **a partner signs off three checkpoints** (CP1 Discover, CP2 Design, CP3 Deploy); **you own it from day one** ("no ransom for your own work"); **finished, not busy**. Key line: *"Nothing ships until a partner has looked at it and can say: I've checked this; it will work."*
  4. *One process, end to end* — "The 3D methodology." Accessible SVG isometric diagram: Discover 01/CP1 → Design 02/CP2 → Deploy 03/CP3 with captions (Discover: "We learn your business inside out, then return it as sharp strategy." / Design: "Brand, message and plan, built as one connected set of decisions." / Deploy: "The plan becomes a launched website and assets you own outright.").
  5. *What you walk away with* — "Finished outcomes. Owned outright." Check-list: launched website, complete strategy, source + assets with version history, no lock-in + accountable person.
  6. *Proven, not theoretical* — "A methodology run with real clients for years." Cards: Authored / Verifiable / Demonstrated ("The site you're reading is the proof — Maxxim runs its own methodology on itself"). **Joule Projects heritage line here.** Note: "Client case studies are on the way. We won't publish a result… until it's real and the client has approved it."
  7. *Why Maxxim* — comparison table: Marketing agency vs DIY builder + AI vs Maxxim across accountability / speed ("Days, not months") / cost ("Well below the agency band") / outcome ("A launched site you own") / ownership ("You, from day one").
  8. *The honest answers* — 4 objection Q&As ("Can AI really do this well…", "If it's cheaper… is it agency quality?" — "Look at the site you're standing on — it's the answer", "Will I end up doing the work myself again?", "Who do I call when something's wrong?").
  9. *Run an agency?* — partner signpost: "Maxxim is the **delivery engine** that holds your standard while you keep the client relationship."
  10. *Ready when you are* — CTA band: "Show us your business. We'll show you the work."
- **Forms:** none. **Notes:** no pricing anywhere on the site.

### `/how-it-works/`
- **H1:** One process, end to end. You approve every step.
- **Sections:** *The 80/20 model* ("AI does the work. A human decides if it's any good." — 80%/20% stat panel; "the heavy lifting an agency would bill you for by the hour"; "judgement, taste, and the call on whether it's right for *your* business"); *Discover · Design · Deploy* summary cards; full phase details:
  - **Discover:** story captured "by chat, a recorded call, or documents you already have"; AI produces "an audience teardown, a competitor read, and a sharpened offer"; "the partner directs it; you barely lift a finger." **CP1 — you approve the direction before a single thing is designed.**
  - **Design:** "brand, message and plan built as one connected set of decisions… reads like the work of a senior strategist — because it is held to that bar." Output: brand platform + messaging framework + marketing plan. **CP2 — you sign off the strategy before anything is built or launched.**
  - **Deploy:** "a launched, professionally designed website and the assets around it. Version history is kept, and the source is handed to you on day one." **CP3 — you approve the build before it ships.**
  - *The checkpoint guarantee* — "You don't move on until you've approved this phase… never an opaque monthly report… the opposite of the agency black box."
  - *The cadence* — "Days, not months. Value lands at every checkpoint, not only at the end."
  - *Yours from day one* — the launched website / the strategy & assets / a partner who stands behind it ("no lock-in, no hostage-taking").
- **CTAs:** Tell us about your business; See our work. **Forms:** none. **No Joule Projects mention on this page.**

### `/for-partners/`
- **H1:** Run more clients without drowning in production.
- **Sections:** *The capacity wall* ("You're turning away work you could be winning"; mornings = strategy, afternoons = production grind); *How partnering works* — "The platform handles the rails. You keep the relationship." (01 Your standard, held · 02 Your time, back · 03 Your client, yours — "Maxxim never disintermediates you… the platform is the **engine room**, not the front of house"); *Control, not compromise* — **"'Powered by Maxxim,' not 'replaced by Maxxim.'"**; four assurances (brand front of house / relationship untouched / reputation protected / economics improve); "human-accountable AI story your clients can actually trust"; "not a self-serve sign-up — founder to founder"; *Evidence of the standard* — "look at the site you're reading… **Joule Projects** — proven, then scaled with AI"; *Let's talk* — partner enquiry form.
- **Form (`#partner-enquiry`, apps.maxxim.ai):** name*, email*, agency*, message* ("Tell us about your agency"), `_gotcha` honeypot; success: "Thanks — a founder will be in touch to talk partnering."

### `/about/`
- **H1:** Agency-grade marketing, within reach of every owner who was told it wasn't for them.
- **Purpose line:** "a market where no good business loses to a worse one simply because it couldn't afford to look the part."
- **Sections:** *Where the method comes from* — "Proven, not invented for a pitch." **"The 3D methodology — Discover, Design, Deploy — is Clent Jewell's. He built it and sharpened it over years of real client work at Joule Projects, with documented successes long before AI entered the picture."** "What Maxxim does is productise that method and scale it with AI." "We run this method on ourselves — the site you're reading was built the 3D way."
- *The people behind it:* **Raef Akehurst** (Co-founder · Platform & engineering — "builds the platform that lets AI do the 80%"), **Paul Clancy** (Co-founder · Strategy & operations), **Clent Jewell** (Founding partner · Creator of the 3D methodology — "refined it over years of real client work at **Joule Projects**").
- *What we stand for — five commitments:* 01 A human stands behind it · 02 Finished beats busy · 03 You own it from day one · 04 Show the work, not the smoke · 05 Earn the trust, then keep it ("We'd rather under-claim and over-deliver… Proof, not adjectives, does the persuading.").
- **Forms:** none.

### `/start/`
- **H1:** We'll show you what the 3D process produces.
- **Sections:** What happens next; Start here (form).
- **Form (apps.maxxim.ai):** name*, email*, business*, message* ("How can we help?"), honeypot; success: "Thanks — a partner will review this personally and come back to you. Here's what happens next: we open Discover, then return real work for you to approve."
- Meta: "No retainer to sign, no tools to learn — a human partner reviews it personally." This is the single conversion target for the whole site.

### `/work/`
- **H1:** The proof is the work.
- Hero: "The strongest case study we have right now is the site you're reading — built the 3D way. The methodology behind it has been run with real clients for years through **Joule Projects**."
- *Case studies coming* — "We won't put a name, a number or a result on this page until it's real and the client has signed off on it. That honesty is part of what you're buying." Three placeholder cards, all "In preparation": 01 A launched website and strategy · 02 A credibility-gap closed · 03 Days, not months — proven. Shape: "Client context → the challenge → what the 3D process did → the outcome."
- **Forms:** none.

### `/contact/`
- **H1:** Talk to a real person. — "you'll get a person, not a portal." Meta: "No portals, no phone trees."
- Email us ("the quickest way to reach a founder" — hello@maxxim.ai) and Book a quick intro ("Email us and we'll find a time" — **mailto only, no scheduler, no form**).

### `/privacy/` and `/terms/`
- Privacy: 8 numbered sections (who we are / what we collect / why / where it goes / retention / security / access & complaints / changes). AU-flavoured.
- Terms: 9 numbered sections; notably **§3 "Enquiries are not a contract"** and **§4 "Ownership of your work"** (contractual backing for the day-one-ownership promise). Meta: "Engagement terms are agreed separately, in writing, before any work begins."

## Current copy themes

1. **80/20** — "AI does about 80% of the work; a named human partner owns the 20% that matters" (hero, how-it-works, about; stat panel on how-it-works).
2. **A human at the wheel / named human partner** — slogan (also in JSON-LD), sign-off line "I've checked this; it will work," accountability-is-a-person.
3. **3D methodology** — Discover / Design / Deploy with CP1/CP2/CP3 client-approval checkpoints; "checkpoint guarantee"; "opposite of the agency black box."
4. **The trustworthy middle** — positioned between the unaffordable agency and DIY-AI-tools-as-second-job; three-way comparison table.
5. **Ownership** — "yours from day one," source + version history handed over, "no lock-in, no hostage-taking, no ransom for your own work" (backed by Terms §4).
6. **Speed** — "Days, not months," value at every checkpoint.
7. **Finished, not busy** — outcomes vs "process exhaust"; "a plan and a launched site you can point at."
8. **Proof over hype** — "the site you're reading is the proof," honest empty case-study page, "proof, not adjectives," "under-claim and over-deliver."
9. **Heritage** — the 3D method is Clent Jewell's, proven "over years of real client work at Joule Projects," now "productised and scaled with AI."
10. **Partner track** — "delivery engine," "engine room, not front of house," "Powered by Maxxim, not replaced by Maxxim," no disintermediation, founder-to-founder.

## Deprecated language scan

Searched every page for: **Maxwell, Max OS, KAOS, Control Index, governance engine, Joule Projects.**

- **Joule Projects — FOUND, 5 mentions across 4 pages** (the only deprecated term present):
  - `/` — "refined over years of real client work at Joule Projects — now productised and scaled with AI" (Proven-not-theoretical section)
  - `/about/` — twice: method-origin paragraph + Clent Jewell bio ("the proof beneath everything Maxxim delivers")
  - `/for-partners/` — "run with real clients for years through Joule Projects — proven, then scaled with AI" (Evidence of the standard)
  - `/work/` — "run with real clients for years through Joule Projects" (hero)
- **Maxwell / Max OS / KAOS / Control Index / governance engine — NOT FOUND anywhere.** ("Delivery engine" / "engine room" do appear — different, on-direction language.)

## Broken links

- **None found.** All 9 routes 200; `/logo.svg`, `/favicon.svg`, `assets.maxxim.ai` images, `apps.maxxim.ai/embed.js` all 200; `maxxim.com.au` and `www.maxxim.ai` 301 to the apex.
- **Caveat:** the soft-404 catch-all (unknown paths return the homepage with HTTP 200) would mask any genuinely broken internal link, and is itself a defect to fix.

## Preserve

- **Discover / Design / Deploy + CP1/CP2/CP3** — already exactly the 3D structure the new direction wants; keep the names, the checkpoint mechanic, and the accessible SVG isometric process diagram.
- **The 80/20 ratio stated plainly** and the 80%/20% stat panel pattern.
- **The sign-off line:** "Nothing ships until a partner can say: *I've checked this; it will work.*"
- **"A human at the wheel"** slogan + named-human accountability voice (also encoded in the Organization schema).
- **Ownership language:** "yours from day one," source + version history, "no ransom for your own work" — with its contractual echo in Terms §4.
- **"Days, not months"** and **"Finished, not busy" / "process exhaust"** contrasts.
- **The trustworthy-middle narrative** and the three-way comparison table (agency vs DIY-AI vs Maxxim).
- **Self-referential proof move** ("the site you're reading is the proof") and the honest, no-fabrication /work/ page stance.
- **Five commitments** block on /about/.
- **Partner language:** "delivery engine," "engine room, not front of house," "Powered by Maxxim, not replaced by Maxxim," no-disintermediation promises — closest existing copy to "human-led AI delivery engine."
- **Single-CTA funnel discipline:** one label ("Tell us about your business"), one destination (/start/), everywhere; low-pressure reassurance copy ("You're not signing anything").
- **Technical patterns:** self-hosted form service (Turnstile + honeypot, human-voiced success messages), responsive webp pipeline on assets.maxxim.ai, no-JS-safe menu and reveal animations, en-AU consistency, clean per-page SEO + Organization JSON-LD.
- **Voice:** plain, honest, anti-hype ("under-claim and over-deliver," "proof, not adjectives").

## Conflicts with new direction

(New direction: human-led AI delivery engine · 3D output library · Discover/Design/Deploy.)

1. **Joule Projects is load-bearing.** It is the *entire* credibility story on 4 pages (/, /about/, /for-partners/, /work/). Retiring the name removes every "proven for years" proof point — each needs a replacement, not just a deletion.
2. **AI-led vs human-led framing.** Current copy is "AI does 80% of the work; the human judges/signs off" — AI drives production, human is QA. A *human-led* AI delivery engine inverts the emphasis; the hero, the 80/20 panel, and "AI executes; the human judges" would need re-weighting, not just synonym swaps.
3. **One fixed bundle vs a 3D output library.** The whole site promises exactly one deliverable: "a complete marketing strategy and a launched website you own." Deploy is hard-coded to "a launched website." There is no library/catalogue/menu-of-outputs concept anywhere; an output-library model contradicts the "one process, one finished bundle" copy on every page (and there are no /outputs/ or /pricing/ routes to hang it on).
4. **Personal vs institutional methodology.** 3D is credited personally ("the 3D methodology is Clent Jewell's," "a recognised methodology creator"). If 3D becomes Maxxim's institutional engine/IP, this authorship framing conflicts.
5. **"Delivery engine" is partner-only today.** Engine language lives solely on /for-partners/ (white-label story); client-facing pages never use it. Making "delivery engine" the core brand collapses the client/partner IA split the site is built around.
6. **No pricing / no self-serve** ("This isn't a self-serve sign-up," founder-to-founder) — conflicts with any productised library where buyers browse or pick outputs.
7. **Soft-404 catch-all** will silently swallow new/renamed routes and old inbound links during a re-architecture — fix before restructuring.
8. **/work/ placeholders pre-commit case-study shapes** ("Days, not months — proven") that constrain what the first real case studies must demonstrate.
