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
  essence: "A complete marketing agency in a box, with the human at the wheel.",
  positioning:
    "Maxxim is the complete marketing agency in a box: AI does the work of a full agency, a named human signs off every gate, and clients own the finished outcome.",
  description:
    "Maxxim is a complete marketing agency in a box. Strategy, brand, website, content and campaigns at AI speed, with a named human signing off every gate.",
  linkedin: "https://www.linkedin.com/company/maxxim",
  copyrightYears: "2026",
} as const;

export type Site = typeof SITE;

/** Primary navigation. One accent action lives outside this list. */
export const NAV = [
  { label: "The Method", href: "/method" },
  { label: "Work", href: "/work" },
  { label: "Powered by Maxxim", href: "/powered-by" },
  { label: "Guide", href: "/guide" },
] as const;

/** The one accent action. */
export const CTA = { label: "Start a conversation", href: "/contact" } as const;

/** Footer navigation columns. */
export const FOOTER_NAV = {
  explore: [
    { label: "The Method", href: "/method" },
    { label: "Work", href: "/work" },
    { label: "Powered by Maxxim", href: "/powered-by" },
    { label: "Guide", href: "/guide" },
    { label: "Contact", href: "/contact" },
  ],
  system: [
    { label: "Brand system", href: "/brand" },
    { label: "3D Process pack", href: "/3d-process/" },
    { label: "Brand Guidelines", href: "/brand-guidelines/" },
    { label: "Brand Book (print)", href: "/book/" },
    { label: "For AI agents", href: "/llms.txt" },
  ],
} as const;

/** The named specialists — the method made visible. */
export const SPECIALISTS = [
  { name: "Max", role: "The AI partner", desc: "Runs the 3D process, drafts every deliverable, keeps each client moving." },
  { name: "Sal", role: "Design Studio", desc: "Generates and refines brand visuals, grounded in the client's own brief." },
  { name: "Pip", role: "Social Studio", desc: "Drafts, schedules and publishes social — only after a human approves." },
  { name: "Ari", role: "The Brain", desc: "Answers anything about a client, grounded in every document held." },
] as const;
