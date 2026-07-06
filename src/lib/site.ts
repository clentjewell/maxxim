/**
 * Single source of truth for brand and site configuration.
 * Edit these values to retarget the build.
 */
export const SITE = {
  brandName: "Maxxim",
  url: "https://maxxim.ai",
  domain: "maxxim.ai",
  contactEmail: "hello@maxxim.ai",
  legalEntity: "Maxxim",
  tagline: "The human at the wheel.",
  essence: "The proven method, run by a human, at AI speed.",
  positioning:
    "The only AI-powered marketing platform combining a proven method, a named human at every gate, and a partner community — so outcomes are finished, owned, and delivered at speed.",
  description:
    "Maxxim is the commercialisation engine that runs a proven, gated method at AI speed, with an accountable human at every gate. Finished, owned outcomes — never spectacle.",
  linkedin: "https://www.linkedin.com/company/maxxim",
  copyrightYears: "2026",
} as const;

export type Site = typeof SITE;

/** Primary navigation. One accent action lives outside this list. */
export const NAV = [
  { label: "The Method", href: "/method" },
  { label: "Work", href: "/work" },
  { label: "Powered by Maxxim", href: "/powered-by" },
  { label: "Brand", href: "/brand" },
] as const;

/** The one accent action. */
export const CTA = { label: "Start a conversation", href: "/contact" } as const;

/** Footer navigation columns. */
export const FOOTER_NAV = {
  explore: [
    { label: "The Method", href: "/method" },
    { label: "Work", href: "/work" },
    { label: "Powered by Maxxim", href: "/powered-by" },
    { label: "Brand", href: "/brand" },
    { label: "Contact", href: "/contact" },
  ],
  system: [
    { label: "3D Process pack", href: "/3d-process/" },
    { label: "Brand Guidelines", href: "/brand-guidelines/" },
    { label: "Brand Book (print)", href: "/book/" },
    { label: "For AI agents", href: "/llms.txt" },
  ],
} as const;

/** The named specialists — the method made visible. */
export const SPECIALISTS = [
  { name: "Max", role: "Strategy & Discover" },
  { name: "Sal", role: "Design & brand" },
  { name: "Pip", role: "Deploy & growth" },
] as const;
