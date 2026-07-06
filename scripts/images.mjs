#!/usr/bin/env node
/**
 * Optimise the site photography for the web.
 *
 * The source photos are print-scale (~3000px, ~700 KB each). The showcase site
 * shows them at most ~1200 CSS px, so we resize to a sane max width and emit a
 * modern-format sibling. Runs in prebuild AFTER fold-legacy has restored the
 * originals into public/images, and BEFORE Astro copies public/ into dist/.
 *
 * For each public/images/<name>.jpg:
 *   - the .jpg is resized (max width) and recompressed in place (fallback);
 *   - a <name>.webp is written alongside (preferred source).
 * The legacy Brand Book/print editions under public/book and
 * public/brand-guidelines keep their full-resolution copies.
 */
import sharp from "sharp";
import { readdirSync } from "node:fs";
import { dirname, join, extname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(fileURLToPath(import.meta.url)).replace(/\/scripts$/, "");
const DIR = join(ROOT, "public", "images");
const MAX_W = 1920; // covers a full-bleed hero at 2× on common breakpoints
const JPG_Q = 78;
const WEBP_Q = 72;

let files;
try {
  files = readdirSync(DIR).filter((f) => /\.jpe?g$/i.test(f));
} catch {
  console.log("[images] no public/images — skipping");
  process.exit(0);
}

let saved = 0;
for (const file of files) {
  const src = join(DIR, file);
  const name = basename(file, extname(file));
  const webp = join(DIR, `${name}.webp`);
  try {
    const img = sharp(src);
    const meta = await img.metadata();
    const resize = meta.width && meta.width > MAX_W ? { width: MAX_W } : {};

    const jpgBuf = await sharp(src)
      .resize({ ...resize, withoutEnlargement: true })
      .jpeg({ quality: JPG_Q, mozjpeg: true })
      .toBuffer();
    const webpBuf = await sharp(src)
      .resize({ ...resize, withoutEnlargement: true })
      .webp({ quality: WEBP_Q })
      .toBuffer();

    const before = (await sharp(src).toBuffer()).length;
    await sharp(jpgBuf).toFile(src);
    await sharp(webpBuf).toFile(webp);
    saved += before - jpgBuf.length;
  } catch (e) {
    console.log(`[images] skip ${file}: ${e.message}`);
  }
}
console.log(`[images] optimised ${files.length} photos, ~${Math.round(saved / 1024)} KiB saved on jpg + webp siblings`);
