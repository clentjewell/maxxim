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
  <g transform="translate(80,80) scale(1.6) translate(-73,0)">
    <rect fill-opacity="0.9" fill="#ffffff" transform="translate(81.0711, 22.0711) rotate(45) translate(-81.0711, -22.0711)" x="76.0710678" y="17.0710678" width="10" height="10"/>
    <rect fill="#ffffff" transform="translate(88.0711, 29.0711) rotate(45) translate(-88.0711, -29.0711)" x="83.0710678" y="24.0710678" width="10" height="10"/>
    <rect fill-opacity="0.85" fill="#ffffff" transform="translate(95.0711, 36.0711) rotate(45) translate(-95.0711, -36.0711)" x="90.0710678" y="31.0710678" width="10" height="10"/>
    <rect fill-opacity="0.95" fill="#ffffff" transform="translate(81.0711, 36.0711) rotate(45) translate(-81.0711, -36.0711)" x="76.0710678" y="31.0710678" width="10" height="10"/>
    <rect fill-opacity="0.95" fill="#ffffff" transform="translate(109.0711, 36.0711) rotate(45) translate(-109.0711, -36.0711)" x="104.071068" y="31.0710678" width="10" height="10"/>
    <rect fill-opacity="0.95" fill="#ffffff" transform="translate(123.0711, 36.0711) rotate(45) translate(-123.0711, -36.0711)" x="118.071068" y="31.0710678" width="10" height="10"/>
    <rect fill-opacity="0.95" fill="#ffffff" transform="translate(95.0711, 22.0711) rotate(45) translate(-95.0711, -22.0711)" x="90.0710678" y="17.0710678" width="10" height="10"/>
    <rect fill-opacity="0.9" fill="#ffffff" transform="translate(116.0711, 29.0711) rotate(45) translate(-116.0711, -29.0711)" x="111.071068" y="24.0710678" width="10" height="10"/>
    <rect fill-opacity="0.85" fill="#ffffff" transform="translate(123.0711, 22.0711) rotate(45) translate(-123.0711, -22.0711)" x="118.071068" y="17.0710678" width="10" height="10"/>
    <rect fill-opacity="0.95" fill="#7d9bff" transform="translate(102.0711, 15.0711) rotate(45) translate(-102.0711, -15.0711)" x="97.0710678" y="10.0710678" width="10" height="10"/>
    <rect fill="#ffffff" transform="translate(109.0711, 22.0711) rotate(45) translate(-109.0711, -22.0711)" x="104.071068" y="17.0710678" width="10" height="10"/>
    <rect fill-opacity="0.85" fill="#7d9bff" transform="translate(95.0711, 50.0711) rotate(45) translate(-95.0711, -50.0711)" x="90.0710678" y="45.0710678" width="10" height="10"/>
    <rect fill="#7d9bff" transform="translate(102.0711, 43.0711) rotate(45) translate(-102.0711, -43.0711)" x="97.0710678" y="38.0710678" width="10" height="10"/>
    <rect fill-opacity="0.9" fill="#7d9bff" transform="translate(109.0711, 50.0711) rotate(45) translate(-109.0711, -50.0711)" x="104.071068" y="45.0710678" width="10" height="10"/>
    <rect fill="#7d9bff" transform="translate(109.0711, 8.0711) rotate(45) translate(-109.0711, -8.0711)" x="104.071068" y="3.07106781" width="10" height="10"/>
    <rect fill-opacity="0.85" fill="#7d9bff" transform="translate(95.0711, 8.0711) rotate(45) translate(-95.0711, -8.0711)" x="90.0710678" y="3.07106781" width="10" height="10"/>
  </g>
  <text x="270" y="152" font-family="Poppins" font-weight="600" font-size="52" fill="#ffffff">maxxim</text>
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
