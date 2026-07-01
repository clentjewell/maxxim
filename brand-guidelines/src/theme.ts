/**
 * Maxxim brand tokens — locked per the Brand Guidelines brief.
 *
 * Signal Blue is the ONLY locked brand colour. Ink, White and Mist are the
 * recommended supporting neutrals. The greys below are document-chrome tones
 * (borders, captions, page numbers) carried over verbatim from the design.
 */
export const colors = {
  signalBlue: '#2D5BFF',
  ink: '#0A0A0A',
  white: '#FFFFFF',
  mist: '#F5F6F8',

  // Supporting document-chrome tones (not brand colours)
  blueTint: '#7D9BFF', // accent-on-dark highlight
  blueSoft: '#C7D2FF', // hairline connector
  bodyGrey: '#3A3D46', // secondary body copy
  captionGrey: '#6A6F7B',
  labelGrey: '#8A8F9C',
  pageNumGrey: '#9A9FAB',
  border: '#E4E6EC',
  borderSoft: '#EEF0F4',
  dontRed: '#E0342B', // the single "don't" cross colour
  dontRedBg: '#FBE7E5',
  dontRedBorder: '#F1C9C5',
} as const

/** A4 landscape page geometry (px), matching the source @page size. */
export const PAGE = {
  width: 1123,
  height: 794,
} as const

export const fonts = {
  family: "'Poppins', system-ui, sans-serif",
} as const
