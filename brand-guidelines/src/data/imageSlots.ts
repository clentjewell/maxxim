/**
 * Image slots for the brand book.
 *
 * Every slot below corresponds to an image location specified in the original
 * brief. Each carries its verbatim Higgsfield generation prompt so the
 * imagery can be produced to spec, plus the short on-page caption used in the
 * design and the file the app expects under `public/images/`.
 *
 * To fill a slot: generate the image in Higgsfield using `higgsfieldPrompt`,
 * save it to `public/images/<file>`, and it renders automatically. Until then
 * the slot shows an on-brand placeholder with the caption.
 */
export interface ImageSlotSpec {
  /** Persistence key / identity — matches the slot id in the original design. */
  id: string
  /** Expected file under public/images/. */
  file: string
  /** Short caption shown in the empty-state placeholder. */
  caption: string
  /** Verbatim Higgsfield prompt from the brief, for generating the real photo. */
  higgsfieldPrompt: string
}

export const IMAGE_SLOTS = {
  coverCity: {
    id: 'cover-city',
    file: 'cover-city.jpg',
    caption: 'City at dusk · Signal-Blue grade · full bleed',
    higgsfieldPrompt:
      'Wide cinematic aerial photograph of a modern city at dusk, Signal Blue (#2D5BFF) colour grade, urban grid of lights below, clean and minimal, no people visible, premium brand document atmosphere. Photorealistic.',
  },
  s1Desk: {
    id: 's1-desk',
    file: 's1-desk.jpg',
    caption: 'Focused operator at desk · marketing dashboard · Signal-Blue accents · editorial',
    higgsfieldPrompt:
      'Candid photograph of a focused professional at a modern desk, laptop open showing a marketing dashboard, natural window light, Signal Blue accent in the environment (chair, branding on screen), warm and credible, not stock-photo posed. Australian office aesthetic. Photorealistic, editorial style.',
  },
  s4Flatlay: {
    id: 's4-flatlay',
    file: 's4-flatlay.jpg',
    caption: 'Overhead flat lay · blue envelope, white logotype card, Mist proposal cover · studio',
    higgsfieldPrompt:
      'Close-up of premium brand materials laid flat on a white surface — a Signal Blue (#2D5BFF) branded envelope, a white card with Signal Blue logotype, and a Mist-toned proposal cover — clean product photography, overhead flat lay, studio light. Photorealistic.',
  },
  s5Doc: {
    id: 's5-doc',
    file: 's5-doc.jpg',
    caption: 'Overhead of printed brand document · blue Poppins headings · minimal · natural light',
    higgsfieldPrompt:
      'Editorial overhead photograph of a printed brand document — clean white pages with Signal Blue (#2D5BFF) typographic headings in a modern sans-serif font, minimal layout, professional graphic design, natural light, premium texture. Photorealistic.',
  },
  s6Cat1: {
    id: 's6-cat1',
    file: 's6-cat1.jpg',
    caption: 'Woman ~40s reviewing a website on a large monitor · bright office · genuine focus · editorial',
    higgsfieldPrompt:
      'Candid photograph of a professional woman in her early 40s reviewing a website on a large monitor in a bright modern office, Signal Blue brand colours visible on the screen, coffee cup nearby, genuine focus, not posed. Australian aesthetic, editorial style. Photorealistic.',
  },
  s6Cat2: {
    id: 's6-cat2',
    file: 's6-cat2.jpg',
    caption: 'Flat lay · MacBook showing a clean blue-branded website + proposal + phone · studio',
    higgsfieldPrompt:
      'Flat lay of a MacBook displaying a clean, modern business website with Signal Blue (#2D5BFF) branding, alongside a printed proposal document and a smartphone — all on a white desk, professional product photography, studio lighting. Photorealistic.',
  },
  s6Cat3: {
    id: 's6-cat3',
    file: 's6-cat3.jpg',
    caption: 'Wide candid · four professionals at a round table · branded docs · natural light',
    higgsfieldPrompt:
      'Candid wide shot of four professionals at a round meeting table, branded documents visible, warm collaborative atmosphere, mixed demographics including Australian-looking faces, natural window light, not a stock photo. Editorial, photorealistic.',
  },
  s8Monitors: {
    id: 's8-monitors',
    file: 's8-monitors.jpg',
    caption: 'Three monitors on a white desk · copywriting doc, blue design layout, social dashboard · no faces',
    higgsfieldPrompt:
      'Three modern computer monitors side by side on a clean white desk, each showing a different type of professional output — left monitor: a copywriting document; centre monitor: a design layout with Signal Blue branding; right monitor: a social media management dashboard — clean, professional, no faces visible, studio lighting. Photorealistic.',
  },
  s9Proposal: {
    id: 's9-proposal',
    file: 's9-proposal.jpg',
    caption: 'Printed blue proposal cover with white branding · white marble desk · minimal · soft shadow',
    higgsfieldPrompt:
      'Premium printed proposal document cover — solid Signal Blue (#2D5BFF) with white typographic branding, resting on a white marble desk, slight shadow, clean minimal corporate photography. Photorealistic.',
  },
  s9Social: {
    id: 's9-social',
    file: 's9-social.jpg',
    caption: 'Smartphone in hand showing a blue-branded LinkedIn post · clean typography · warm light',
    higgsfieldPrompt:
      'A smartphone held in hand displaying a professional LinkedIn post with Signal Blue (#2D5BFF) branding, clean typography, modern, editorial style, warm natural light. Photorealistic.',
  },
  backHand: {
    id: 'back-hand',
    file: 'back-hand.jpg',
    caption: 'Hand resting on a laptop keyboard · warm side light · Signal-Blue tone · minimal',
    higgsfieldPrompt:
      'Close-up abstract photograph of a human hand resting on a laptop keyboard, warm directional light from the left, Signal Blue (#2D5BFF) colour tone, minimal and modern, symbolic of human-at-the-wheel concept. Photorealistic.',
  },
} satisfies Record<string, ImageSlotSpec>
