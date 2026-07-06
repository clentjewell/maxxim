#!/usr/bin/env node
/**
 * Generate the default Open Graph image → public/og/default.png (1200×630).
 * Rendered with resvg-js from a hand-built SVG, embedding the self-hosted
 * Poppins font so the wordmark and tagline rasterise crisply.
 */
import { Resvg } from "@resvg/resvg-js";
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(fileURLToPath(import.meta.url)).replace(/\/scripts$/, "");
const fontFile = join(ROOT, "scripts", "fonts", "Poppins-SemiBold.ttf");
const bodyFont = join(ROOT, "scripts", "fonts", "Poppins-Regular.ttf");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0a0a0a"/>
  <rect x="0" y="0" width="1200" height="6" fill="#2d5bff"/>
  <g transform="translate(80,80)">
    <defs>
      <mask id="m"><rect x="2" y="2" width="96" height="96" rx="26" fill="#fff"/>
      <path d="M29 69 L29 32 L50 54 L71 32 L71 69" fill="none" stroke="#000" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/></mask>
    </defs>
    <rect x="2" y="2" width="96" height="96" rx="26" fill="#2d5bff" mask="url(#m)"/>
    <text x="120" y="72" font-family="Poppins" font-weight="600" font-size="52" fill="#ffffff">Maxxim</text>
  </g>
  <text x="80" y="360" font-family="Poppins" font-weight="600" font-size="78" fill="#ffffff">A whole agency, in a box.</text>
  <text x="80" y="440" font-family="Poppins" font-weight="400" font-size="34" fill="#7d9bff">AI does the work. A named human signs it off.</text>
  <text x="80" y="560" font-family="Poppins" font-weight="400" font-size="26" fill="#8a8f9c">maxxim.ai</text>
</svg>`;

const resvg = new Resvg(svg, {
  fitTo: { mode: "width", value: 1200 },
  font: {
    fontFiles: [fontFile, bodyFont],
    loadSystemFonts: false,
    defaultFontFamily: "Poppins",
  },
});
const png = resvg.render().asPng();
const out = join(ROOT, "public", "og");
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "default.png"), png);
console.log("[og] wrote public/og/default.png", png.length, "bytes");
