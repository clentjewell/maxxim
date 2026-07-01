# Maxxim Brand Guidelines — Edition 03

A React implementation of the Maxxim Brand Guidelines: a 22-page, A4-landscape
brand book (cover → contents → nine sections → back cover), built pixel-for-pixel
from the Claude Design export in `../project/`.

Signal Blue (`#2D5BFF`) leads, Poppins throughout, no gradients/shadows on the
mark — per the locked brand brief.

## Stack

- **Vite + React 18 + TypeScript**
- Poppins via Google Fonts (loaded in `index.html`)
- No runtime dependencies beyond React — every page is a plain component with
  inline styles ported from the design

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build
```

## Structure

```
src/
  App.tsx                 # assembles all 22 pages in order
  theme.ts                # locked brand tokens + A4 page geometry
  styles/global.css       # desk mount, .page frame, @page / print rules
  components/
    Page.tsx              # A4-landscape sheet wrapper
    Monogram.tsx          # gated-M mark (currentColor)
    ImageSlot.tsx         # fillable image location + placeholder fallback
    PageNumber.tsx        # bottom-centre folio
  data/imageSlots.ts      # every slot + its verbatim Higgsfield prompt
  pages/                  # one component per spread (Cover … BackCover)
public/images/            # drop generated photos here (see its README)
```

## Imagery

The book has 10 photographic slots. They render an on-brand placeholder until
you supply the real photos. Generate each in Higgsfield using the prompt stored
in `src/data/imageSlots.ts`, save it to `public/images/` under the expected
filename, and it appears automatically. See `public/images/README.md`.

## PDF export

The document is print-ready. Print from the browser (Cmd/Ctrl-P) with:

- **Paper size:** A4
- **Orientation:** Landscape
- **Margins:** None
- **Background graphics:** On

`@page` and `@media print` rules (in `styles/global.css`) drop the grey desk and
emit one page per sheet.
