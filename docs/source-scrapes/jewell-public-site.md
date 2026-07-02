# Jewell Public Site — Full Scrape Archive

- **Crawled:** 2026-07-02
- **Base URL (staging):** https://claude-jewell-reconciliation-phase-0-sv9gcl-jewell-ai.clent.workers.dev/
- **Production domain (per canonical/llms.txt):** jewellai.com (canonicals currently point at `jewellai-com.pages.dev`)
- **Stack:** Astro v5.18.2, fully server-rendered/static HTML (real content in HTML, not a JS shell). Self-hosted Poppins fonts.
- **Indexing posture:** staging is closed — `robots.txt` is `Disallow: /` plus `noindex,nofollow` meta and `X-Robots-Tag`. The robots.txt comment documents the exact go-live change (owner: Clent) including the future Disallow list (`/admin`, `/client-portal`, `/partners/onboarding`, `/for/`, `/team`).
- **AI-readable layer served by the site:** `/llms.txt`, `/llms-full.txt`, `/ai-index.json` (per-page purpose, OKRs, CTAs, retrieval tags), `/okr-index.json` (case-study/OKR retrieval index). `/ai-context.md` is referenced in robots.txt but 404s.
- **Companion structured file:** `jewell-public-site.json` (same directory) — every route with title, meta, H1, sections, CTAs, nav/footer links, key copy, forms, notes.

**Crawl method:** fetched `/`, `/sitemap.xml` (404; real file is `/sitemap-index.xml`), `/robots.txt`, then BFS-followed every same-origin link (nav, footer, body, CTAs) until no new routes. **139 routes returned 200.** Broken internal targets found: `/ai-context`, `/for` (404), `/sitemap.xml` (404 at the conventional path).

---

## 1. Full route list (139 routes, all HTTP 200)

### Core marketing (12)
`/` · `/how-it-works` (alias `/3d-process`) · `/the-work` (alias `/case-studies`) · `/ai-enabled` · `/products` · `/growth-diagnostic` · `/fractional-cmo` · `/partners` · `/about` · `/contact` · `/start-here` · `/proof`

### Tools & resources (8)
`/scorecard` · `/calculator` · `/guides` · `/videos` · `/webinars` · `/blog` · `/academy/3d-process` · `/esg`

### Blog posts (3)
`/blog/understanding-personality-types-the-12-jungian-archetypes` · `/blog/why-every-business-needs-a-crm` · `/blog/seo-vs-ppc-whats-right-for-your-business`

### Case studies (27 summary pages + 27 `/detail` pages = 54)
hidrive · circl-group · jewell-tyres · walter-wealth · thrive-my-life (flagships) · king-country-pet-food · chekku · cynnch · starlink (Circl activation) · value-h2o · beyond-the-clinic · australian-doctors-federation · sapphire-nutrition · aussie-champ · the-wine-oracle · landed · vowel-code · watersports-guru · pottsville-acupuncture-meridiann · greenx7 · shane-irving · mba-lawyers · opteco · skie-group · sdm · petzip · jewell-academy · leadwarmer · 3dprocess-ai · everlife
(each at `/case-studies/[slug]` and `/case-studies/[slug]/detail`)

### Legal (21)
`/legal` · `/privacy` · `/terms` · `/ai-disclosure` · `/legal/business-details` · `/legal/website-terms-of-use` · plus 17 per-service terms pages: brand-and-marketing-strategy, graphic-design, website-design-and-development, digital-marketing-and-seo, email-marketing-and-crm, content-creation-and-copywriting, videography-photography-post-production, online-training-and-knowledge-sharing, ai-integrations, hosting-maintenance-and-sla-support, social-media-strategy-and-management, event-marketing-and-activations, performance-marketing-and-kpi-based-engagements, consulting-and-innovation-projects, printing, media-booking, call-centre

### Team (14)
`/team` + 13 bio pages: clent-jewell, ronnie-ignacio, christy-kilmartin, sam ("Sam, Jewell Intelligence" — an AI agent with a team page), neil-hazelman, alex-frew, kim-ratcliffe, florian-stotz, liz-vertera, rao-waqar, josi-hoffman, dragan-lakic

### Portal / partner / admin scaffolds (16)
`/client-portal` · `/client-portal/onboarding` · `/client-portal/preview` · `/waitlist` · `/task-request` · `/partners/onboarding` · `/admin` + 9 admin sub-pages (source-approval, products, pricing, connectors, ask-logs, qualification, proof, system-health, intelligence)

### Utility (3)
`/404` · `/sitemap-index.xml` (XML, points to `https://jewellai-com.pages.dev/sitemap-0.xml`) · `/robots.txt`

### Broken (404) targets encountered
- `/ai-context` — referenced in robots.txt as "AI context page", not built
- `/for` — `/for/` persona pages referenced in robots.txt go-live plan, nothing exists
- `/sitemap.xml` — conventional path missing; only `/sitemap-index.xml` exists and it points at a different (production) domain

### External links found on-site
maxxim.ai · 3dprocess.ai · meetings.hubspot.com/clent-jewell (the booking CTA everywhere) · jewellprojects.com (agreements) · linkedin.com/company/jewell-ai · oaic.gov.au · client sites (hidrive.com.au, jewelltyres.com.au, walterwealth.com.au, kingcountrypetfood.com, mba-lawyers.com.au, sapphirenutrition.com.au, valueh2o.com.au, aussiechamp.com.au, wineoracle.com, landed.education, greenx7.com, petszip.com, sydneydigitalmarketing.com.au, ausdoctorsfederation.org.au, leadwarmer.fly.dev, plus two *.pages.dev staging links for Jewell Tyres).

---

## 2. Sitewide chrome (identical on every page)

**Header nav:** How It Works · The Work · Ask Jewell AI · About · (mobile adds Contact, Client Portal) · **Book a Diagnostic** (button) · Client Portal.

**Footer:** headline "Strategy, brand and systems for important work." + boilerplate ("Jewell works with leaders, teams and organisations building something that needs to move: a business, a brand, a market, a platform, a campaign or a cause. We clarify the objective, shape the strategy and story, build the digital assets and systems, then help deploy, measure and improve the work in market.") + strapline **"Discover. Design. Deploy. Deepen. AI enabled. Human led."** + cities (Melbourne · Sydney · Brisbane · Gold Coast · Christchurch · Hong Kong) + hello@jewellai.com.
Footer columns: Start Here / Book a Growth Diagnostic / How It Works / Fractional CMO / Engagements / For Partners / Proof / The Work / About / AI for Business / ESG / Contact — Resources: Blog / Guides & Tools / Video Series / Webinars & Live / Growth Scorecard — Ask + Act: Ask Jewell AI (Beta) / Client Portal / Task Request / Paid Media ROI Calculator / Project Feedback (sign-in) — Legal + Trust: Legal hub / Privacy / Terms / AI Disclosure. Copyright "2010 to 2026. Jewell Group Pty Ltd ABN 56 822 550 848".

**Floating widget:** "Ask Jewell AI" console (beta) on every page — public mode is a guided routing preview ("Public mode can guide, qualify and route. Client, Partner and Team modes require sign-in. It does not act on live systems.").

---

## 3. Per-page capture (key pages)

### `/` — Home
- **Title:** Jewell · **H1:** "Get clarity. Build your brand. Run a system that moves it."
- **Meta description:** "Jewell is a brand and growth firm. We start in discovery, defining a business's audience, category, brand and the objective that must move, then build the strategy, brand, and digital platforms on top of it and run the growth in market. A senior lead connects the right specialists, AI enabled and human led, and success is defined early, for the business and the person. Delivered through the 3D Process (Discover, Design, Deploy) with an ongoing Deepen loop."
- **Structure:** hero (video poster + dual CTA "Ask Jewell AI" / "Book a Growth Diagnostic", tertiary "Not ready yet? See the work →") → embedded Ask Jewell AI console with audience tabs (New Client / Existing Client / Partner / Team) and prompt chips ("Clarify our growth direction", "Turn my goal into key results"…) → logo strip ("Brands we've helped build, grow and work alongside") → numbered narrative: 01 THE PROBLEM ("You're carrying the growth, let's build a support system.") · 02 WHAT WE INSTALL ("We uncover the driver, then install the system around it." — 5 installs: offer, brand+website, automation, team workflow, "the AI layer underneath all of it") · 03 THE METHOD ("Discover, Design, Deploy. Then self-learning that deepens.") · 04 JEWELL AI ("AI gives you options. Jewell gives you judgement.") · 05 WHERE TO START (offer ladder cards: Diagnostic → Fractional CMO → "Scale · Meet Maxxim") · 06 THE WORK (3 flagship cases) · 07 WHAT CLIENTS SAY (3 quotes) · 08 THE ENGINE (Maxxim section) · START HERE (loss-framing close: "Do nothing, and the ceiling stays exactly where it is.").
- **Key copy (verbatim):**
  - "Strategy first. AI enabled. Human led. Built to move what matters."
  - "An agency jumps to tactics. We start in discovery and strategy, the part others skip: who you're for, your category, your brand, and the objective that must move. We define what success looks like, for the business and for you. Then we build it, deploy it, and run it, owned, with a recurring engine behind it. We name the objective, and we stay accountable to it and the work in market. If it does not move, that is on us."
  - **Deepen:** "DEEPEN · THE FEEDBACK LOOP — Once your engine is live, what we learn feeds straight back in. Intelligence and proof shape the next cycle, so the system keeps getting sharper."
  - **Judgement moat:** "AI does not know which of ten plausible answers is right for you. And as AI gets better, it gets more confidently incorrect. Better AI makes judgement worth more, not less."
  - **Maxxim (08 THE ENGINE):** "Maxxim is the AI-enabled, human-led engine underneath the Jewell method: Discover, Design, Deploy. AI accelerates the production, but a named partner owns the judgement, direction and sign-off at every step. That is how we move from strategy to a complete, owned go-to-market system in days, not months. Rigour that scales." Feature bullets: AI-enabled production · Human-led judgement · Strategy and website in days · You own every asset · link to maxxim.ai.
  - **Maxxim (offer ladder card):** "Our platform. AI enabled, human led: AI accelerates the delivery, a named partner owns the judgement. You get all the benefits of AI with a human in the loop, at the beginning, the middle, and on an ongoing basis."
- **CTAs:** Ask Jewell AI · Book a Growth Diagnostic (repeated) · See the work → /the-work · Explore Maxxim → maxxim.ai · See the Fractional CMO · For Partners.

### `/how-it-works` (= `/3d-process`) — The method
- **Title:** How It Works | Jewell · **H1:** "Get the foundation right. The growth follows."
- **Meta:** "What you actually get when you work with Jewell. The 3D Process: Discover, Design, Deploy, with a DEEPEN feedback loop. The Growth Diagnostic is the fixed-scope way in and credits forward."
- **The 3D Process, step by step (verbatim essences):**
  - **01 Discover — "Define the true driver everything builds on."** "We define your audience, your category, your brand and business, and the true driver underneath it, the positioning platform everything else springboards from. We play it back until it's right, and define what success looks like, for the business and for you. Discovery never fully stops; what we learn keeps sharpening it." Outcome: "A clear growth direction you can act on."
  - **02 Design — "Build the system that carries it."** "We build the offer, the brand, and the system that carries them to market. Not a slide deck. A go-to-market you can deploy." Outcome: "A growth system ready to deploy."
  - **03 Deploy — "Ship it, and run it."** "We ship it, run it, and move the number. Measurement is built in from day one. We stay accountable for the outcome, not just the deliverable." Outcome: "A deployed engine, running and moving the number."
  - **∞ Deepen — "It doesn't stop at Deploy."** "Deploy feeds back into Discover. Real results sharpen the engine, so what you buy keeps getting better instead of going stale." Loop inputs listed: **Performance · Client intelligence · Reviews · Proof · Market signals.**
- **Deliverables catalogue ("WHAT YOU ACTUALLY GET — A growth system you can see, approve and use."):** Discover: Audience & Market (5 items: Audience Teardown, Customer Segments, Pain Points, Buying Triggers & Barriers, Jobs To Be Done), Category & Competitors (4), Offer & Commercial Diagnosis (5), Discovery Output (5 incl. Success Definition, OKRs). Design: Business & Growth Strategy (4), Customer & Journey Strategy (4), Brand & Messaging (5), Website & Digital Strategy (5), Sales & Marketing Plan (1 parent + 11 sub-plans), Briefing Documents (9), Design Output (4). Deploy: Production & Delivery (9), In-Market Activation (9), Reporting & Optimisation (8), Deploy Output (5, incl. "Case Study / Evidence Pack").
- **THE MOAT (verbatim):** "AI gives you the average answer. The value is knowing which answer is right for your business, and being accountable when it isn't. … You are not buying the tool. You are buying the judgement on top of it. Thirty-five years inside Australia's biggest brands. Deep brand and APAC strategy on the bench. A named partner accountable for the number on every engagement. Better models make that judgement worth more, not less, because they make it the only scarce thing left."
- **THE DIFFERENCE:** "An agency hands over deliverables. A consultant hands over advice. We hand over growth." (3-column contrast Agency / Consultant / Jewell.)
- **Offer ladder:** Growth Diagnostic (front door, "fixed scope credits forward") → "The full 3D engagement" ("Good, Better, and Best tiers depending on scope and depth") → Fractional CMO ("We don't hand the engine over and walk — we stay and run it.")
- **Working style:** live visibility (PM, live WIPs, sprint cadence), direct access ("No account-manager telephone game"), measurement rhythm (weekly/monthly/QBR), client portal. Gate reviews: "Clear decisions at clear points. No open-ended commitment."
- **Fit section:** "Built for change makers, disruptors and innovators." Segments: Personal Brands / Small Businesses / SMEs / Organisations. "You are probably a fit if… / Probably not a fit if…" — fit list ends "You value AI enabled, human led delivery."
- Ends with a 17-case proof carousel + Diagnostic CTA.

### `/the-work` (= `/case-studies`) — Proof library
- **H1:** "The work, not the pitch." 5 flagship cases (Hidrive, Circl Group, Jewell Tyres, Walter Wealth, Thrive My Life), then client archive filterable by **All / B2B / B2C / Personal Brand / Partner Venture / AI-Automation** and by capability. Disclosure: "Jewell Tyres and Thrive My Life are our own: we run our businesses through the same 3D Process we sell."
- **Case-study template (summary page):** category eyebrow → first-person result headline ("We tripled revenue by rebuilding the brand and the system behind it.") → client + sector → audience → 3D phase table (01 Discover / 02 Design / 03 Deploy / **↺ Deepen** — e.g. Hidrive's Deepen = "Outsourced marketing department under SLA") → before/after rows → client quote → AT A GLANCE (Objective / Key results / Constraint / Jewell's role) → numbered narrative (The brief, Why it matters with stat tiles, The move by phase).
- **Detail-page template (`/detail`):** 01 SITUATION · 02 THE BRIEF · 03 PROCESS · THE 3D MOVE (Discovery & Strategy / Design & Develop / Deploy & Support / **Deepen loop**) · 04 WHAT SHIPPED · 05 THE RESULT (stat tiles) · 06 SO WHAT.
- **Headline metrics (all cleared):** Hidrive +300% revenue, +250% pipeline, <50% CPL, 5× ROAS, <60 days full funnel; Walter Wealth $50M FUM in 90 days; Chekku 12-week launch, 15k+ jobs; Cynnch 90 days to market; Value H₂O +4,000 units, +23% retention, −35% CAC; Starlink activation <4 weeks; King Country 3 export regions; LandED first course sold out in 30 days; etc.

### `/ai-enabled` — AI page ("AI for Business" in footer)
- **Title:** AI Built Into Your Growth Engine | Jewell · **H1:** "AI built into how your business runs, not taught in a session."
- **Key copy:** "This is not an AI wrapper bolted to your marketing stack. It is a growth operating layer deployed into how your business runs: your documents, your decisions, your team. AI enabled, human led: AI drafts, routes and prepares the work, human judgement owns the direction, the approval and the accountability, and we run the system so the work keeps moving."
- Embedded Ask Jewell AI preview + "What people ask" routing block (incl. partner answer: "Partners run the engine for their own clients under their own brand. Jewell is the method and the judgement, Maxxim is the platform. One partner owns each client relationship.").
- **AI AUTHORITY (AEO/GEO) section — "When buyers ask AI, be the answer."**: "Your buyers now open ChatGPT, Claude, Perplexity and Google AI before they call anyone. Those engines don't read ads. They cite the sources they can verify and trust." Roadmap: NOW Run the prompt test → NOW Make your brand machine-readable (AI crawlers, Organization/Product/FAQ schema, llms.txt) → NEXT Earn the authority AI cites → NEXT Measure citation share. "We have already built this for Jewell. We run the same engine for you."
- Proof reference used twice: "Hidrive: revenue up over 300 per cent, profit up over 350 per cent, pipeline up 15 times."

### `/products` — Growth Engagements
- **H1:** "A clear path from diagnosis to strategy, build and market execution." Tagline: "AI enabled. Human led. Scoped to the work that needs to move."
- **Pricing policy (verbatim):** "Pricing is scoped to your engagement after the Growth Diagnostic. The Diagnostic is the fixed-scope way in, and it credits forward into any engagement."
- **4 tiers, every card = phase tag + "By application" + Objective + Best for + CTA (no prices):**
  1. **Strategic Engagements** — Growth Diagnostic · 3D Discovery Sprint · 3D Growth Plan · 3D Launch Pack · Enterprise & Government 3D Process.
  2. **Jewell AI Harness** — "installs a commercial operating layer directly into your business. We build it, deploy it alongside your team, and run it so the judgement is in the system, not just in a workshop." (Harness Setup · AI Enablement · Team Intelligence · Client Intelligence Profile — the last two tagged **Deepen**.)
  3. **Monthly Intelligence** — recurring layer; Fractional CMO is the engine; Jewell AI Enterprise tier.
  4. **Revenue Systems** — Content Engine · AI Search Authority ("Your brand cited and recommended by the AI engines buyers use… Best for brands whose buyers now ask ChatGPT, Claude, or Perplexity first, and whose name is not in the answer yet.") · CRM Reactivation · LeadWarmer. "Each one is built and run. Not handed over and wished luck on."
- Close: "A scoped path, not a checkout." / "A thirty-five-year founder, deep brand and APAC strategy on the bench, and a named partner for every client relationship. Not one person with a prompt."

### `/growth-diagnostic` — The front door
- **H1:** "Start with the truth others skip." Meta: "A fixed-scope read on where your growth actually is. Credits forward into any engagement. You leave with a specific, true finding about your own business."
- **Two conversion paths:** (a) 3-step qualification wizard — Step 1 "I am" (7 checkboxes: founder/owner, established operator, personal brand, startup, enterprise/gov, existing client, other) + "I need" (10 checkboxes: commercial strategy, digital presence, brand/positioning, "AI installed into my business", CRM/automation, investor/pitch, growth plan, team intelligence, full 3D Process, other); Step 2 timing (5 bands) + budget (Under AUD $5K / $5K–15K / $15K–50K / $50K–150K / $150K+ / unsure); Step 3 optional contact + "Show my path". (b) Direct lead form → POST `/api/lead` (name, business, email, problem; honeypot `_hp`), fallback "Or book a call directly →" HubSpot.
- **De-risk stack:** "Fixed scope. No scope creep." · "Credits forward into the engagement if you continue." · "A specific, true finding about your business." · "You decide to continue at every gate. No open-ended commitment."
- **Next-steps ladder:** 01 founder-to-founder conversation (30 min, "Not a sales call") → 02 fixed-scope diagnostic → 03 gate review → 04 credits forward → 05 "The recurring engine, available behind it" (Fractional CMO).
- **Objection-first FAQ ("The objections we answer before you raise them"):** vs agency; "Is this just AI doing generic work? No. AI gives you the average answer…"; what the Diagnostic involves; what happens after; cost ("scope should follow the truth of the work, not the other way around" — no price given); compliance ("The 3D Process is designed to work inside the compliance constraints, not around them.").
- Proof band: "+300% revenue. +350% profit. 15x pipeline. Sub-50% cost per lead."

### `/fractional-cmo`
- **H1:** "The engine that keeps the number moving." — "An agency hands over deliverables and walks. A consultant hands over advice and leaves. The Fractional CMO is the opposite: we stay, we own the growth, and we move the number — month after month."
- **Deepen tie-in:** "The DEEPEN loop sharpens the system on real results. What you have keeps getting better, instead of going stale the day the build ends."
- Outcome framing: "You scale, or you step back. The business stops depending on your hours. It can grow past them, be sold, or run without you in the room."
- Scoping: recurring monthly, confirmed after the Diagnostic ("what you pay follows the work — not a tier you have to decode"). Bench: Clent Jewell, Christy Kilmartin, Stuart Carlaw. "A senior bench, not one person with AI." Single CTA: Growth Diagnostic.

### `/partners` — "For Partners · Maxxim" (THE Maxxim page)
- **Title:** For Partners · Maxxim | Jewell · **H1:** "A collaboration, run under your own banner."
- **Meta:** "A collaboration you run under your own banner: the discovery-led method, the proof and the platform, delivered for your own clients. The Jewell to Maxxim handoff and partner enquiry."
- **Core positioning (verbatim):** "A collaboration, not a referral. You own the relationship and run it under your own banner; Jewell brings the discovery-led method, the proof, and the platform that delivers it at scale."
- **The two-part commercialisation problem (verbatim):** "The first is judgement: knowing which answer is right for this business, in this market, at this moment — and being accountable when it isn't. The second is volume: executing that answer at machine speed once the judgement work is done. No human team can do both. That's the seam this partnership was built to occupy."
- **Split:** JEWELL — "Human led. Trust. Taste. Judgement." (the method and the proof; Discover is always human; named-partner accountability; the client always enters through Jewell; "the standard the machine has to meet"). MAXXIM — "AI enabled. Volume at machine speed." (the MAX platform; Design and Deploy at scale once judgement is set; AI production, human-checked; "the engine behind the partner, not the name on the door"; "compounding speed as models improve").
- **Handoff flow:** 01 Client enters through Jewell → 02 Discover is human. Always. → 03 Design and Deploy hand off to Maxxim at scale ("Machine speed, with human sign-off at every stage") → 04 One partner owns each client relationship ("The platform is the engine; the partner is the accountable human on top of it.").
- **WHAT YOU GET:** "An operable system. Not a toolset." Four pillars: the method / the proof / the platform (Maxxim + MAX) / the standard ("Influence, not manipulation. A non-generic test on every output."). "The difference between a partner and a reseller is accountability — partners are accountable for the number." Partner requirements: a market or client base; capability to own the relationship and the number; "A principal who can commit at a principal-to-principal level."
- **ONE RULE:** "One partner owns each client relationship. That's the only public line on partner terms. Commercial structure, splits, and partner economics are a confidential track, held principal-to-principal. … The partner opportunity is not self-serve and not first-come-first-served."
- **CTA:** "Enquire about partnering" → meetings.hubspot.com/clent-jewell (no form). Pre-enquiry homework: "See the proof / See how the method works."
- **Defect:** hero kicker reads "Human led, AI enabled. Ai Enabled" (duplicated fragment, wrong casing).

### `/about`
- **H1:** "We start with discovery. Then we deliver." Positioning: "A growth engine and operating layer… A recurring engine that compounds through the DEEPEN feedback loop. A named partner accountable for the number, with skin in the game." Negative definition: "Not an agency. Not a consultancy. Not SaaS. Not a vendor. Not a generalist."
- **People:** Clent Jewell (Founder; Mars · Unilever · GM), Christy Kilmartin (Nike · adidas · Timberland APAC), **Raef Akehurst (Strategic Partner, Maxxim Co-founder — "the architect behind the Maxxim Co-founder platform, a commercial growth system built for scale")**, Stuart Carlaw (Revenue), Alex Frew (Google CEO Advisory Board), Kelv Jewell (Red Bull), Ronnie Ignacio (Ops), Neil Hazelman (ECD), Cameron Watt (video), Florian Stotz (web), Greg Johnson (Chair; ex-Macquarie), Josi Hoffman (SEO), specialists + ops layer.
- **Named AI agents as team members:** "AGENT Sam — Orchestrator Agent: holds context across every engagement and keeps the method consistent at scale." · "AGENT Max — 3D Process Orchestrator Agent: runs the 3D Process end to end through specialist sub-agents, audience, competitor, brand, copy, SEO and activation, each producing a deliverable a human signs off."
- **Beliefs (5):** Belief / Connection / Energy / Trust / **Judgement** ("Human led, AI enabled. AI only grows more confident as it gets things wrong, so the taste, trust and judgement that decide what is right stay human.").
- **THE MODEL:** "It's judgement that makes AI worth using. Better models make the right answer cheaper to produce. They make knowing which answer is right for your business more valuable, not less." Three layers: 01 Strategy (Judgement) / 02 Operations (Delivery) / 03 Intelligence (Scale).
- **Six operating rules:** Clarity before complexity · Strategy before design · Empathy with precision · Minimalist intelligence ("Less, but sharper. Decoration never.") · Outcome over activity · "The feedback loop compounds — Every cycle makes the next one better."
- **Defects:** repeated "It's" typos ("It's engine that builds your go-to-market", "Our guiding principals", "Understand principals. Execute with rigour.", "It's six rules", "It's judgement layer" etc.).

### `/contact`
- **H1:** "One conversation. One clear next step." Two paths: HubSpot booking ("A focused 30-minute call with Clent… No obligation, no pitch.") and a minimal form (name, email, message → POST `/api/contact`, honeypot `company_website`). Microcopy: "We reply to this address. No list, no spam." Next-steps: reply "within one business day".

### `/start-here`
- **H1:** "Tell us where the business is. We will show you the path to growth." — "A guided diagnostic, not a form or a cart. Three steps, then we point you to the right engagement. No price until we understand the problem." Same wizard as /growth-diagnostic.
- **GATE 0 · BEFORE THE 3D PROCESS:** "Before any delivery, Gate 0 confirms the work, the scope, and the commercial terms. Discovery is paid work, so we get it clear first. 01 Qualify · 02 Scope · 03 Quote · 04 Approve · 05 Invoice · 06 Kickoff → Enter the 3D Process."
- Fit/not-fit lists (not-fit: "Expecting AI alone to move the number. AI gives the average answer. Jewell provides the judgement on top of it."). Partner cross-sell: "Are you a partner or advisor? See the engine you could run."

### `/proof`
- **H1:** "The work, not the pitch." — "Every claim on this page is real and cleared. No fabricated results, no inflated numbers, no borrowed credibility. Proof before claim. Always."
- Proof classes: **Lead proof** (Hidrive: +300% revenue, +350% profit, 15x pipeline, <1/2 CPL — "These are percentages only. The dollar absolutes are confidential."), **Cleared proof** (Jewell Tyres capital-event story), **Self-run proof** ("We ran the 3D Process on ourselves. This site is what it produced… The site you are reading is the engine, pointed at Jewell's own business."), **Operating pedigree** (SPC Ardmona, Mars $250m+ portfolio, Clorox $80m+, King Country $100m+), **Regulated-practice proof** (Pottsville Acupuncture / Meridiann — "Growth that a compliance adviser can read without a problem.").

### Tools: `/scorecard`, `/calculator`
- **Scorecard:** 5 free-text questions scored 0–100 across clarity/brand/audience/systems/momentum → strengths, gaps, next step → Diagnostic CTA. Staging fallback: "Live scoring isn't switched on in this environment yet."
- **Calculator:** Paid Media ROI — inputs (monthly budget, CPC, site conversion %, lead-to-sale %, client value, LTV multiple, agency fee) → clicks/leads/clients, CPL, cost-per-client, revenue, ROAS, lifetime ROI. "This is the exact model we build into every client media plan." CTA "Build my real media plan" → Diagnostic.

### Resources: `/guides`, `/videos`, `/webinars`, `/blog`, `/academy/3d-process`, `/esg`
- **Guides:** 11 named frameworks (Clarity Starter Guide, Brand Clarity Brief, Website Purpose Clarity Brief, Messaging Made Simple, Simple Marketing Plan, Content With Purpose Planner, Campaign Readiness Checklist, Brand Experience Checklist, 3D Process Planning Guide, Human and AI Confidence Guide, "How Do I Know This Is Working?") + THE STACK (Google Workspace, Asana, HubSpot, Zoom, Teams, WordPress, themes, Kajabi). No downloads wired; CTA is "bring them to a Growth Diagnostic".
- **Videos:** 5 embedded strategy-framework videos. **Webinars:** interest-register (HubSpot link), no scheduled events. **Blog:** 3 posts (Jungian archetypes, CRM, SEO vs PPC) with category/date/read-time.
- **Academy /academy/3d-process:** 6 chapters (01 Why structure beats effort · 02 Discover · 03 Design · 04 Deploy · **05 Deepen — "The ongoing layer that compounds."** · 06 What to expect). IP boundary stated: "This training explains the model. It does not share the delivery playbook, templates, or internal method."
- **ESG:** Environmental / Social / Governance; governance bullet: "AI used openly, with human judgement on top"; "An annual giving budget, allocated and always overspent."

### Portal & ops scaffolds
- **/client-portal:** "Portal launching late 2026 · sign-in required. One trusted place for clients, partners, and the Jewell team to move work through Discovery, Design, Deploy, and the Deepen loop." Honest: "The portal isn't live yet, and nothing here is a working dashboard." → waitlist.
- **/client-portal/preview:** sample-data portal design — 3D phase tracker (Discover Complete / Design In progress / Deploy Upcoming / Deepen Upcoming), "Awaiting your approval" queue, stage-gate approvals, stage handoffs feed, **"Client Intelligence Brief — Version 2. Read-only. Maintained by your Jewell team and updated as the engagement evolves."**
- **/task-request:** existing-client intake with a real creative-brief skeleton (objective, audience, tone, think/feel/do, mandatories, references) + 12 task-type checkboxes.
- **/waitlist:** POST `/api/waitlist` (name, email). Mentions "Building the methodology product. Read more at 3DProcess.ai when it is live."
- **/partners/onboarding & /client-portal/onboarding:** Phase-2 sign-in stubs ("Connects later"), route to contact/call.
- **/admin (+9 sub-pages):** publicly reachable Phase-2 scaffolds ("Scaffolded shells only. No live data, no live controls.") — source approval queue, product catalogue, **pricing update queue ("Clent approves")**, connector dashboard, Ask logs, BANT review, proof claim status, system health, intelligence review (AI Blueprint / Working Intelligence, locked vs working). Shows feature flags (publicAskEnabled, leadCaptureEnabled, publicProofEnabled, pricingDisplayEnabled, forceLeadsToManualReview) and kill switches.

### Legal
- **/legal:** hub with the "marketing hub" model disclaimer ("responsibility for service delivery… lies solely with the contracted third party"), links to business details, website terms of use, Privacy, Terms, AI Disclosure, 17 per-service terms pages, and two agreements hosted at jewellprojects.com (Exclusive Supply & Confidentiality, Contractor Agreement).
- **/privacy:** 8 sections (AU-style, references OAIC). **/terms:** Use of this site / Engagements / IP / Liability / Contact.
- **/ai-disclosure (notable):** "Jewell is human-centred and AI-enabled. People hold the judgement. AI does the work that AI does well, under human review." What AI does (drafts, routes, prepares, structures, holds context) vs what a person always does (approves anything client/public-facing; owns growth, legal, pricing decisions; signs off scope and delivery). Data: "We do not feed your private information into public models without consent. Connector states are clearly labelled across the site."

---

## 4. The special language, gathered in one place

**"Discover, Design, Deploy" (3D Process):**
- Canonical strapline (footer, meta, JSON-LD, llms.txt): **"Discover. Design. Deploy. Deepen. AI enabled. Human led."**
- Homepage method header: "Discover, Design, Deploy. Then self-learning that deepens."
- llms.txt: "Discover: define the audience, category, brand and the objective that must move. Design: build the strategy, brand and the system that carries them to market. Deploy: ship it live, run it, measure it, and improve it in market. Deepen: the ongoing loop that compounds results over time. Delivery mechanics, templates and internal method detail are not public."

**"Deepen" / self-learning / feedback loop:**
- "DEEPEN · THE FEEDBACK LOOP — Once your engine is live, what we learn feeds straight back in. Intelligence and proof shape the next cycle, so the system keeps getting sharper." (home)
- "It doesn't stop at Deploy. Deploy feeds back into Discover. Real results sharpen the engine, so what you buy keeps getting better instead of going stale." Inputs: Performance, Client intelligence, Reviews, Proof, Market signals. (how-it-works)
- "The DEEPEN loop sharpens the system on real results. What you have keeps getting better, instead of going stale the day the build ends." (fractional-cmo)
- "A recurring engine that compounds through the DEEPEN feedback loop." (about) · Operating rule 06: "The feedback loop compounds — every cycle makes the next one better."
- "Discovery never fully stops; what we learn keeps sharpening it." (Discover phase) · Academy chapter 05: "Deepen — the ongoing layer that compounds."
- Case studies each carry a Deepen row (e.g. Hidrive: "Jewell runs Hidrive's outsourced marketing department under an SLA… evolving the system against results.").

**AI/human split (note: no literal "80/20" or percentage-split phrase exists anywhere on the site — the split is expressed qualitatively):**
- "AI enabled, human led: AI drafts, routes and prepares the work, human judgement owns the direction, the approval and the accountability."
- "AI accelerates the production, but a named partner owns the judgement, direction and sign-off at every step."
- "AI gives you the average answer. The value is knowing which answer is right for your business, and being accountable when it isn't."
- "Better models make that judgement worth more, not less, because they make it the only scarce thing left."
- "AI only grows more confident as it gets things wrong, so the taste, trust and judgement that decide what is right stay human."
- ai-disclosure: "People hold the judgement; AI does the work that AI does well, under human review."

**Partner model (Jewell ↔ Maxxim):**
- "Jewell is the method and the judgement, Maxxim is the platform."
- Judgement vs volume: "No human team can do both. That's the seam this partnership was built to occupy."
- "Clients enter through Jewell. Scale happens through Maxxim." / "Discover is human. Always." / "Design and Deploy hand off to Maxxim at scale."
- "One partner owns each client relationship" — the only public partner term; economics are "a confidential track, held principal-to-principal".
- Maxxim descriptors: "the AI-enabled, human-led engine underneath the Jewell method"; "the MAX platform"; "the engine behind the partner, not the name on the door"; "compounding speed as models improve"; "Rigour that scales."; "the method productised, for partners who run it under their own brand" (llms.txt).

**CTA / form system:**
- One primary CTA everywhere: **Book a Growth Diagnostic** (header button + repeated section CTAs). Secondary: Ask Jewell AI, See the work / See the proof. Partner CTA and all "book a call" CTAs → meetings.hubspot.com/clent-jewell.
- Forms are minimal + honeypot-protected: `/api/contact` (name, email, message), `/api/lead` (name, business, email, problem), `/api/waitlist` (name, email). Qualification is client-side wizard checkboxes (I am / I need / timing / budget), details optional. Every form has a "what happens next" block promising a reply "within one business day". No pricing anywhere; "By application" product cards.

---

## 5. Lessons for Maxxim (patterns to reuse)

1. **One repeated positioning sentence.** Jewell repeats "Discover. Design. Deploy. Deepen. AI enabled. Human led." verbatim in footer, meta description, OG tags, JSON-LD and llms.txt. Maxxim needs its own single-sentence equivalent and the same discipline about repeating it everywhere unchanged.
2. **Method skeleton is shareable; playbook is not.** The 3D phases + Deepen loop are public and Jewell publicly names Maxxim as "the engine underneath the method", so Maxxim can (and should) speak the same 3D/Deepen vocabulary — while keeping the boundary line Jewell uses: "Delivery mechanics, templates and internal method detail are not public."
3. **The Deepen/feedback-loop framing is the compounding story.** "Deploy feeds back into Discover… so what you buy keeps getting better instead of going stale", with named loop inputs (Performance, Client intelligence, Reviews, Proof, Market signals). For Maxxim this maps naturally to the platform: every engagement makes the engine sharper. "Compounding speed as models improve" is already Maxxim-side language on /partners.
4. **The judgement/volume seam is Maxxim's half of a two-sided pitch.** The cleanest articulation on the site (on /partners) splits commercialisation into judgement (human, Jewell) and volume ("executing that answer at machine speed once the judgement work is done" — Maxxim). Maxxim's site should occupy the volume/engine side without re-claiming the judgement side: "AI production, human-checked", "machine speed, with human sign-off at every stage", "the engine behind the partner, not the name on the door".
5. **Single front door + gate mechanics.** One CTA (Diagnostic), "fixed scope, credits forward", "you decide at every gate", Gate 0 (Qualify→Scope→Quote→Approve→Invoice→Kickoff), gate reviews, "no open-ended retainer". Maxxim should pick its own single front door (partner enquiry or equivalent) and reuse the gate vocabulary.
6. **No public pricing, routed instead.** "By application" cards with Objective + Best for; "scope should follow the truth of the work"; llms.txt even instructs AI assistants never to state or estimate prices. Same policy fits Maxxim's principal-to-principal model.
7. **Proof governance as a feature.** A /proof page with proof classes, "Proof before claim. Always.", percentages-only policy, and the self-run proof move ("We ran the 3D Process on ourselves. This site is what it produced.") — Maxxim's strongest available launch proof is exactly this: "Maxxim was built by Maxxim."
8. **Systematic case-study template.** Summary page (result-first headline, 3D phase table incl. Deepen row, before/after, At-a-Glance Objective/Key results/Constraint/Role) + /detail page (Situation → Brief → 3D Move → What Shipped → Result → So What). Clone the structure, not the content.
9. **AI-readability layer from day one.** llms.txt, llms-full.txt, ai-index.json (per-page purpose, OKRs, CTAs, retrieval tags), okr-index.json, JSON-LD, plus a public AEO roadmap (prompt test → machine-readable → earned authority → citation share). For an AI-native brand like Maxxim this is table stakes — Jewell even sells it ("AI Search Authority").
10. **Staging discipline.** robots.txt Disallow-all + noindex header with the go-live diff documented in the file itself, single gated owner. Reuse for the Maxxim build.
11. **Form hygiene + honesty microcopy.** Honeypots, minimal required fields, "We reply to this address. No list, no spam.", "within one business day" next-steps blocks, wizard-based qualification before contact details, and graceful staging fallbacks ("Live scoring isn't switched on in this environment yet.").
12. **Rhetorical structures worth adapting:** the Agency/Consultant/Jewell contrast table ("We hand over growth."); fit/not-fit honesty lists; objection-first FAQ ("The objections we answer before you raise them"); loss-framed closing section ("Do nothing, and the ceiling stays exactly where it is."); named AI agents as team members with human sign-off (Sam, Max) — a natural Maxxim platform story.
13. **Trust surface:** plain-English AI disclosure (what AI does vs what a person always does; "we do not feed your private information into public models without consent"), legal hub, ABN in footer. Cheap, high-credibility, directly reusable as a pattern.

---

## 6. Do not copy (Jewell-only)

1. **Jewell identity and founder framing:** Clent Jewell's name and bio, "founder-to-founder conversation", 35-year/founded-2010 pedigree, meetings.hubspot.com/clent-jewell, hello@jewellai.com, Jewell Group Pty Ltd ABN 56 822 550 848, the Melbourne–Hong Kong locations line.
2. **All client proof, metrics, quotes and logos:** Hidrive (+300%/+350%/15x/<50% CPL), Walter Wealth $50M FUM, Circl/Chekku/Cynnch/Starlink, Value H₂O, King Country, and every other case study and testimonial. Site policy itself says claims are published only where the client approved the specific claim — none of these clearances extend to Maxxim.
3. **Team bios and pedigree claims** (Mars, Unilever, GM, Nike, adidas, Timberland, Red Bull, Google CEO Advisory Board, Macquarie), including Raef Akehurst's Jewell-side description.
4. **The client-side offer ladder as a Maxxim funnel.** Growth Diagnostic → 3D engagement → Fractional CMO is Jewell's client journey, and the public record states "the client always enters through Jewell". A Maxxim site that opens its own direct client front door would contradict the published handoff model; Maxxim's audience is partners ("scoped directly").
5. **Partner terms and economics framing.** "One partner owns each client relationship" is Jewell's stated governance line, and the economics are deliberately confidential/principal-to-principal — do not restate, invent, or elaborate on splits.
6. **Legal stack verbatim:** the third-party "marketing hub" liability disclaimer, the 17 per-service terms pages, privacy/terms text and the jewellprojects.com agreements are entity-specific and must be re-authored for the Maxxim entity.
7. **Jewell-named products and artefacts:** "Ask Jewell AI", "Jewell AI Harness", "Jewell Intelligence", "Jewell Academy", "Client Intelligence Brief" (portal artefact), internal phase labels ("privatePhase2", "Clent approves", feature flags/kill switches).
8. **Method ownership voice.** Jewell owns the 3D Process narrative and positions Maxxim as the productised engine. Maxxim should not present itself as the author of the method or of the Jewell proof; it is "the engine behind the partner, not the name on the door".
9. **Known defects — don't replicate:** "Human led, AI enabled. Ai Enabled" duplication in the /partners hero; multiple "It's"/"principals" typos on /about; /ai-context and /for 404s referenced from robots.txt; missing /sitemap.xml (only /sitemap-index.xml, pointing at another domain); publicly reachable /admin and /team routes that are intended to be gated at go-live.
