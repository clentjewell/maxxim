/** Site-wide config: origin, nav, footer, brand constants. */

export const site = {
  name: 'Maxxim',
  origin: 'https://maxxim.ai',
  email: 'hello@maxxim.ai',
  locale: 'en-AU',
  ogLocale: 'en_AU',
  description:
    'Agency-grade marketing, with a human at the wheel. AI does the production, a named human partner owns the judgement, and you own the work from day one.',
}

export const nav = [
  { href: '/how-it-works/', label: 'How it works' },
  { href: '/3d-process/', label: 'The 3D process' },
  { href: '/for-partners/', label: 'For partners' },
  { href: '/work/', label: 'Our work' },
  { href: '/about/', label: 'About' },
]

export const cta = {
  primary: { href: '/start/', label: 'Tell us about your business' },
  secondary: { href: '/3d-process/', label: 'See the 3D outputs' },
}

export const footerNav = {
  explore: [
    { href: '/how-it-works/', label: 'How it works' },
    { href: '/3d-process/', label: 'The 3D process' },
    { href: '/for-partners/', label: 'For partners' },
    { href: '/work/', label: 'Our work' },
    { href: '/about/', label: 'About' },
    { href: '/contact/', label: 'Contact' },
  ],
  legal: [
    { href: '/privacy/', label: 'Privacy' },
    { href: '/terms/', label: 'Terms' },
  ],
}

/** apps.maxxim.ai form service, preserved from the live site. */
export const forms = {
  siteKey: 'mx_site_1c0e614947f28b300592ad27',
  turnstileSiteKey: '0x4AAAAAADg_u6KyVO9NTmya',
  embedSrc: 'https://apps.maxxim.ai/embed.js',
  turnstileSrc: 'https://challenges.cloudflare.com/turnstile/v0/api.js',
  startSuccess:
    "Thanks, a partner will review this personally and come back to you. Here's what happens next: we open Discover, then return real work for you to approve.",
  partnerSuccess: 'Thanks, a founder will be in touch to talk partnering.',
}
