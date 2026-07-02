# Maxxim Brand Guidelines — Source-of-Truth Extraction

Extracted 2026-07-02 from `brand-guidelines/src` in this repo (the source behind
https://maxxim.clent.workers.dev/brand-guidelines/, Edition 03 · 2026).

## Locked tokens (`brand-guidelines/src/theme.ts`)

| Token | Value | Status |
|---|---|---|
| Signal Blue | `#2D5BFF` (RGB 45/91/255, Pantone 2727 C) | LOCKED, the only brand colour |
| Ink | `#0A0A0A` | supporting neutral |
| White | `#FFFFFF` | supporting neutral |
| Mist | `#F5F6F8` | supporting neutral |
| Blue Tint | `#7D9BFF` | accent-on-dark highlight |
| Blue Soft | `#C7D2FF` | hairline connector |
| Body Grey | `#3A3D46` | secondary body copy |
| Caption Grey | `#6A6F7B` | captions |
| Label Grey | `#8A8F9C` | labels |
| Border | `#E4E6EC` / soft `#EEF0F4` | hairlines |
| Don't Red | `#E0342B` | "don't" marks only |

Colour rule: "Signal Blue leads. Everything else follows." Blue is the signal, not decoration.

## Typography

- Family: **Poppins** (geometric sans), `'Poppins', system-ui, sans-serif`.
- Principle: "Poppins. Weight does the work." Weight and hierarchy create emphasis, not ornament.
- Scale: Display Bold 64–72, H1 SemiBold 40–48, H2 Medium 28–32, H3 SemiBold 20–22, body Regular 16–18, caption 12–14, fine print Light 10–12.
- Tight letterspacing on display (-0.02em to -0.025em).

## Logo

- "Gated-M" monogram: rounded-square gate (rx 24) enclosing an M stroke, drawn in currentColor (Signal Blue, White or Ink only).
- The Blue Frog is permanently removed and must never appear.

## Brand strategy

- Philosophy: **"The human at the wheel."** "Maxxim is a method, not a magic box."
- Why it exists: the trust gap between AI capability and what clients sign off on will not close until a named human stands behind the outcome at every gate.
- Three values: fast AND accountable AND method-backed. Consultancies are accountable but slow, AI tools are fast but faceless; Maxxim holds all three, with a 35-year live operator running it in market.
- Archetype: **Sage** (primary: wise, evidence-led, never hyperbolic) + **Creator** (supporting: structured, methodical, builder).
- Positioning statement: "For growing businesses and the operators who serve them, Maxxim is the only AI-powered marketing platform that combines a proven method, a named human at every gate, and a partner community, so that outcomes are finished, owned, and delivered at speed."
- Brand idea: **"The proven method, run by a human, at AI speed."**
- Pillars: 1) The engine for your judgement (80/20). 2) The human at every gate (trust gap). 3) The community is the moat.
- Audience segments (partner-side): A1 Capacity-capped operator, A2 Networked referrer, A3 Scoped specialist.

## Voice

- "Plain. Precise. Accountable."
- Dimensions: Confidence (claims sized to the proof), Formality (plain operator-to-operator, short sentences), Accountability (names the human, shows the gate; the human is the hero, never the machine), Honesty (states what is locked, flags what is open).
- Style rules: **Australian English. No em dashes. No exclamation marks.** Short sentences. Name the specialists Max, Sal and Pip to make the engine concrete; they are the method, not the hero.
- Channel tone, website: "Fullest Sage expression. Lead with position then proof."
- End-client tone (via partners): "Done for you, owned by you, live in days."

## The Specialists (sanctioned naming)

- **Max** — Words + Strategy (briefs, copy decks, research synthesis, discovery documents).
- **Sal** — Pixels + Design (brand guidelines, site builds, visual assets).
- **Pip** — Social (platforms, posts, cadences).
- Rule: never presented as separate products. The accountable human is always the partner.
- Note: "Max" the specialist IS in the current guidelines. "Maxwell", "Max OS", "KAOS", "Control Index", "governance engine" are NOT, and stay archived.

## Approved proof language

- "The method has run with real clients for years. Pottsville is launched, and the client owns it. Jewell now runs the whole model in market."

## Actual 3D output library found in repo (`memory/generated/`)

28 real generated documents, checkpoint-gated:

- **discover/** (CP1): Audience Teardown, Competitor Analysis, Offer Worksheet, Discovery Summary (CP1) + deck, Discovery Addendum (Gate 1 Decisions).
- **design/** (CP2): Business Plan, Brand Strategy, Brand Guidelines (+deck), Copy Deck, Customer Profile, Logo Brief, Marketing Plan, Social Strategy, Website Strategy, Strategy Summary (CP2).
- **deploy/** (CP3): Website Brief, Design Brief, Photo and Video Brief, SEO Strategy, Paid Media Plan, EDM Plan, CRM Plan, PR Plan, Events Plan, Traditional Media Plan, IMC Summary (CP3), Case Study Framework (Pottsville Acupuncture).

Gate/checkpoint language used in the documents themselves: Gate 1, Gate 2, CP1, CP2, CP3. This confirms the CP1/CP2/CP3 approval-gate model is current, not legacy.
