# On-a-Page — the 3D Process summary artifact family

**Status:** Recommendation + working templates, for Raef to fold into the Maxxim
templated output structure.
**Prepared:** 9 July 2026, from the Hidrive Sales & Marketing Playbook v2.0, the
BTC 3D Process output pack, and the 9 July Raef/Clent sync decisions.

---

## 1. The problem and the answer

The 3D Process now produces 100+ artifacts per client. That depth is the product,
but it is not what the client reads. What the client reads — and pins to the wall —
is one page per gate.

**The answer is a fourth artifact class**, alongside documents, decks, and briefs:

| # | Artifact | Gate | One-line job |
|---|----------|------|--------------|
| 1 | `discover-on-a-page` | CP1 · Gate 1 | The truth we found and the position we took |
| 2 | `design-on-a-page` | CP2 · Gate 2 | The strategy, brand and plan we designed |
| 3 | `deploy-on-a-page` | CP3 · Gate 3 | The activation: channels, cadence, numbers |
| 4 | `3d-on-a-page` | Overall | The whole business on one wall poster — the source of truth |

Each is **one A3 landscape sheet (420 × 297 mm)**, print-ready, boxed-segment
layout in the Hidrive playbook style, populated only from the client's existing
3D artifacts. Nothing new is authored on these pages; they are *distillations with
a strict word budget*. In reality this is what the client reads — so every box
must survive being the only thing they read.

## 2. Design language

Derived from the Hidrive playbook (the density and boxed-segment grammar) and the
BTC pack (the client-facing HTML delivery), on the Maxxim component system:

- **One sheet, no scroll, no page 2.** Content that doesn't fit gets cut, not shrunk.
- **Boxed segments on a 12-column grid.** Every box = mono/label header + dense content.
  Component vocabulary: statement boxes, KPI tiles, mini-tables, persona cards
  (pain → gain → proof), journey bars, checklists, pills, swatches, gate box, sign-off strip.
- **Client-branded via tokens only.** Six colour tokens + three font tokens in `:root`
  (`--ink`, `--accent`, `--paper`, `--tint`, `--line`, `--muted`). The layout never changes
  per brand; only tokens do. See `a3-framework.css` — every template inlines it verbatim.
- **HTML is the master format** (matches the whole Maxxim pipeline). Print to PDF/A3
  from the browser (`@page: A3 landscape` is set); screen preview auto-scales.
- **Gate iconography:** each page carries its checkpoint chip (CP1/CP2/CP3), version,
  date, and a sign-off strip (Prepared / Approved / Date) — these are gate documents,
  and the wall copy shows who signed.

## 3. The four pages — slot manifests

Every box below is a **slot**: `label → source artifacts → budget`. Generators fill
slots from sources; they never invent. Budgets are hard limits (the sheet clips).

### 3.1 `discover-on-a-page` — CP1 · Gate 1

| Slot | Content | Sources | Budget |
|------|---------|---------|--------|
| The belief | Why the business exists, verbatim from Discovery | discover-summary | 30 words |
| Are you READY? | Qualification: **R**esources · **E**xecutive buy-in · **A**lignment · **D**eadline · **Y**es-criteria, each with status | discovery intake / addendum | 5 × 12 words |
| **THE CORE** (4 boxes) | **C**ustomers — segments + top personas (pain → need) | audience-teardown | 3 personas × 30 words |
| | **O**ffering — what is sold, price posture, proof | offer-worksheet | 60 words |
| | **R**ivals — competitor snapshot (who · claim · weakness · our response) | competitor-analysis | 4 rows × 20 words |
| | **E**xpression — current brand/voice/position observations | discover-summary | 50 words |
| Killer questions | The 5 truths that define the business | discover-summary §1 | 5 × 20 words |
| The position | The defended strategic position taken at Gate 1 | discover-summary | 40 words |
| Evidence | Proof points and validation status | discover-summary, addendum | 5 × 15 words |
| **Gate 1 decision** | Decided / still open / must-be-true-before-Design + verdict | discover-addendum | 80 words |

### 3.2 `design-on-a-page` — CP2 · Gate 2

| Slot | Content | Sources | Budget |
|------|---------|---------|--------|
| Strategy on a line | The positioning statement, display-size | strategy-summary, brand-strategy | 25 words |
| Brand | Essence, archetype, tagline; swatches + type names | brand-strategy, brand-guidelines | 50 words + tokens |
| Customer | Segments with a UVP line each | customer-profile | 3 × 25 words |
| Business model | Revenue streams, pricing posture, unit economics stance | business-plan | 60 words |
| Messaging | Pillars, tone do/don't, core phrases | copy-deck, brand-strategy | 60 words |
| Platform | Website / social / content direction, one line each | website-strategy, social-strategy | 3 × 18 words |
| Success measures | The targets Design commits to | marketing-plan, business-plan | 4–6 KPI tiles |
| **Gate 2 decision** | What is locked, what Deploy inherits, open risks + verdict | strategy-summary | 80 words |

### 3.3 `deploy-on-a-page` — CP3 · Gate 3

Modelled on the Hidrive IMC summary slide (called out in the 9 Jul sync as the
closest existing example of the right Deploy artifact).

| Slot | Content | Sources | Budget |
|------|---------|---------|--------|
| Activation at a glance | Campaign rationale + objectives | imc-summary | 50 words + 3 objectives |
| Channel plan | Grid: SEO · EDM · PR · Events · CRM · Paid · Social · Traditional — each: the play + its KPI | the 8+ channel plans | 8 × 22 words |
| Journey × touchpoints | Awareness → Consideration → Decision → Retention/Advocacy bar with activities | imc-summary, marketing-plan | 4 stages × 4 items |
| Cadence | Weekly rhythm + quarterly campaign roadmap | social-strategy, imc-summary | 40 words + roadmap row |
| Budget split | Simple allocation bars/percentages | paid-media-plan, imc-summary | 5 lines |
| Measurement | KPI tiles + review rhythm (weekly/monthly/quarterly) | all plans | 4–6 tiles + 20 words |
| Risks | Top risks with mitigation | imc-summary, validation-register | 4 × 15 words |
| Governance | Mini-RACI: who is R/A per stream | validation-register | 4 rows |
| **Gate 3 / next 90 days** | Launch runway: the first 90 days, owner per action + verdict | imc-summary | 6 actions |

### 3.4 `3d-on-a-page` — the overall wall poster

| Slot | Content | Sources | Budget |
|------|---------|---------|--------|
| Why we exist | Belief/purpose | discover-summary | 25 words |
| Where we're going | Vision + 3 goals | business-plan, strategy-summary | 40 words |
| What drives us | Values as pills | brand-strategy | 4–6 pills |
| **THE CORE** strip | Customers · Offering · Rivals · Expression — final (post-Design) versions | all three gates | 4 × 50 words |
| How we go to market | Journey bar with the committed activities | deploy pack | 4 stages × 3 items |
| The numbers | The KPIs the whole plan answers to | all gates | 5–6 tiles |
| Operating rhythm | Weekly/monthly/quarterly cadence | deploy pack | 30 words |
| Next 90 days | Top actions with owners | imc-summary | 5 actions |
| Gate strip | Discover ✓ date · Design ✓ date · Deploy status | gate records | chips |

## 4. CORE and READY (9 Jul terminology decisions)

Two frameworks are now canon and appear on these pages:

- **CORE — Customers · Offering · Rivals · Expression.** *"Answer these questions
  to get to the core of your business."* CORE replaces ABC and is the organizing
  frame of the Discover page (the 2×2 heart of the sheet) and returns as the final
  post-Design strip on the overall poster. It maps 1:1 to the Discover artifacts:
  Customers → audience-teardown, Offering → offer-worksheet, Rivals →
  competitor-analysis, Expression → brand observations in discover-summary.
- **READY — Resources · Executive buy-in · Alignment · Deadline · Yes-criteria.**
  *"Are you READY?"* — qualification asked together with the client (replaces BANT,
  and adds Yes-criteria: what success looks like). It renders as a five-item
  checklist on the Discover page; its Yes-criteria feed the KPI tiles on every
  later page. The onboarding chat and Ask function already use both frameworks,
  so the artifacts and intake now speak the same language.

## 5. Archetype variants — one layout, three lenses

The layout and slot grid **never fork**. What varies by archetype is labels,
emphasis and which facts fill the slots — a content lens applied at generation
time via `maxxim:archetype` metadata:

| Slot | Personal brand | SME | Organisation (corporate / NFP / government) |
|------|----------------|-----|---------------------------------------------|
| Why we exist | Personal mission / story | Founder's promise | Mandate / mission (NFP: cause; Gov: service obligation) |
| Customers | Audience & community | Customer segments + personas | Stakeholder map: customers, board, funders/donors, citizens |
| Offering | Products, services, content, speaking | Product/service ladder + pricing | Portfolio / programs / services (Gov: service catalogue) |
| Rivals | Competing voices, differentiation | Direct competitor battlecard | Category forces + benchmark orgs (NFP: share of giving) |
| Expression | Personal identity: photography, voice, platforms | Brand system | Brand + sub-brand architecture, compliance rules |
| Go to market | Platform-first: content engine, newsletter, speaking, network | Integrated sales + marketing funnel | Multi-audience comms: external, internal, stakeholder/ministerial |
| The numbers | Audience growth, inbound, pipeline | Revenue, pipeline, CAC/cost-per-deal | Corporate: revenue/EBITDA · NFP: impact + funds raised · Gov: service outcomes + reach |
| Governance | Self + support crew (light) | Owner per function | Full mini-RACI, approval workflow, brand compliance measures |
| Sign-off | The person | Founder/GM | Accountable executive + endorsing body (ELT/Board/Minister) |

Recommendation: model archetype as **one enum with five values** —
`personal`, `sme`, `org-corporate`, `org-nfp`, `org-gov` — where the three `org-*`
values share a lens and differ only in the "numbers" and "why we exist" vocabulary.

## 6. Integration into the Maxxim pipeline (for Raef)

1. **File convention.** On-a-Page artifacts are self-contained HTML, named
   `{gate-doc}.a3.html`, generated into `memory/generated/`:
   `discover/discover-summary.a3.html`, `design/strategy-summary.a3.html`,
   `deploy/imc-summary.a3.html`, and `3d-summary.a3.html` at the pack root.
   This mirrors the existing `.deck.html` convention (Gate 1 deck).
2. **Metadata.** Same `maxxim:*` head block as every artifact, plus
   `maxxim:skill = on-a-page`, `maxxim:archetype = personal|sme|org-*`, and
   `maxxim:sources` listing the artifacts distilled.
3. **Serving.** `site/build.mjs` copies `.a3.html` files raw (like the deck) to
   `/3d-process/{phase}/{slug}-on-a-page/` and features them as the first card of
   each phase; `3d-on-a-page` becomes the pack's top card. In client packs
   (the BTC-style Workers delivery), the four pages ARE the landing content —
   deep artifacts hang off them as links.
4. **Generation order.** Each on-a-page is generated *after* its gate summary is
   approved, by an `on-a-page` summariser skill whose inputs are: the slot manifest
   (§3), the archetype lens (§5), the client brand tokens, and the gate's artifacts.
   The overall poster regenerates whenever any gate page changes.
5. **Hard rules for the generator.**
   - Only facts present in source artifacts. No new claims, no invented numbers.
   - Respect clearance flags (named clients, pricing) exactly as the source does.
   - Budgets are hard limits; the sheet clips overflow rather than reflowing —
     verify by rendering at 1587×1123 px and checking for clipped text.
   - Numbers on the poster must match the source artifact at generation date;
     each page footer carries `Distilled from:` + generation date for audit.
6. **QA loop (the "ultracode" ask from the sync).** After generation, an
   adversarial pass checks: every number traceable to a source; every box within
   budget; token contrast (ink on paper ≥ WCAG AA at print size); no orphan slot
   left as placeholder. Only then does the page go to the human gate owner.

## 7. The worked example

`templates/` holds the four pages **populated with Beyond the Clinic content**
(from the BTC 3D pack) in BTC brand tokens — the concrete example of exactly what
to produce, per the 9 Jul sync. Every box carries an HTML comment naming its slot,
sources and budget, so the example doubles as the template:

- `templates/discover.a3.html` — CP1, BTC
- `templates/design.a3.html` — CP2, BTC
- `templates/deploy.a3.html` — CP3, BTC
- `templates/overall.a3.html` — the BTC wall poster
- `screenshots/` — each sheet rendered at print resolution

These files are deliberately **not** wired into the public Maxxim site build
(client content stays out of the showcase); they live here as the handoff spec.

## 8. Acceptance criteria

A generated On-a-Page passes when:

1. It prints on one A3 landscape sheet with nothing clipped or overflowing.
2. Every box is filled from named sources; footer lists them.
3. It reads standalone — a person who reads nothing else understands the business,
   the position, and what happens next.
4. CORE and READY appear with the canonical expansions (§4).
5. Brand comes only from tokens; swapping the `:root` block fully rebrands the sheet.
6. The gate chip, version, date and sign-off strip are present and correct.
