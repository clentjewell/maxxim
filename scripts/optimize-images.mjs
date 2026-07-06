#!/usr/bin/env node
/**
 * Compress the folded brand photography in public/images.
 *
 * The legacy pack and brand-book pages reference these JPEGs directly (no
 * build-time image pipeline), so the folded copies are capped at a sane web
 * resolution and recompressed with mozjpeg. The originals in
 * brand-guidelines/public/images are never touched; fold-legacy re-copies
 * them fresh on every build before this runs. The Astro pages use their own
 * processed copies from src/assets via astro:assets.
 *
 * Run automatically at the end of scripts/fold-legacy.mjs.
 */
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = dirname(fileURLToPath(import.meta.url)).replace(/\/scripts$/, "");
const DIR = join(ROOT, "public", "images");

const MAX_WIDTH = 1920;
const QUALITY = 72;

for (const name of readdirSync(DIR)) {
  if (!/\.jpe?g$/i.test(name)) continue;
  const file = join(DIR, name);
  const before = statSync(file).size;
  const buf = await sharp(file)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: QUALITY, progressive: true, mozjpeg: true })
    .toBuffer();
  if (buf.length < before) {
    writeFileSync(file, buf);
    console.log(
      `[optimize-images] ${name}: ${(before / 1024).toFixed(0)}kB → ${(buf.length / 1024).toFixed(0)}kB`,
    );
  }
}
