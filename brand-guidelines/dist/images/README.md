# Brand book imagery

Each image slot in the book maps to one file in **this folder**. Until a file
exists, its slot renders an on-brand placeholder captioned with the shot's
intent.

## How to fill a slot

1. Generate the photo in **Higgsfield** using the slot's prompt (see
   `src/data/imageSlots.ts` — each entry has a verbatim `higgsfieldPrompt`).
2. Save it here under the exact filename listed below.
3. Reload — the slot fills automatically. No code changes needed.

Photorealistic, editorial, Signal Blue (#2D5BFF) led. No glowing brains,
robots, posed stock, cartoons, or purple/teal/neon washes (see Section 6.3).

## Expected files

| File | Slot | Shot |
|---|---|---|
| `cover-city.jpg` | Cover | City at dusk, Signal-Blue grade, full bleed |
| `s1-desk.jpg` | §1 Philosophy | Focused operator at desk, marketing dashboard |
| `s4-flatlay.jpg` | §4 Colour in Use | Overhead flat lay of brand materials |
| `s5-doc.jpg` | §5 Typography | Overhead of a printed brand document |
| `s6-cat1.jpg` | §6 Category 1 | Woman ~40s reviewing a website on a monitor |
| `s6-cat2.jpg` | §6 Category 2 | Flat lay: MacBook + proposal + phone |
| `s6-cat3.jpg` | §6 Category 3 | Four professionals at a round table |
| `s8-monitors.jpg` | §8 Specialists | Three monitors: copy, design, social |
| `s9-proposal.jpg` | §9 Applications | Blue proposal cover on a marble desk |
| `s9-social.jpg` | §9 Applications | Smartphone showing a branded LinkedIn post |
| `back-hand.jpg` | Back cover | Hand on a laptop keyboard, warm side light |

Filenames are the source of truth. To change one, edit the matching `file`
field in `src/data/imageSlots.ts`.
