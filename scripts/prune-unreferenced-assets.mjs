#!/usr/bin/env node
/**
 * Drop unreferenced images from dist/_astro.
 *
 * astro:assets copies each source image into _astro verbatim alongside the
 * processed variants, even when only the variants are referenced. Those
 * originals are multi-hundred-kB dead weight in the deploy. Sweep every text
 * asset in dist for each _astro image's basename and delete the ones nothing
 * points to.
 *
 * Run automatically via the "postbuild" npm script.
 */
import { readdirSync, readFileSync, statSync, unlinkSync } from "node:fs";
import { dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(fileURLToPath(import.meta.url)).replace(/\/scripts$/, "");
const DIST = join(ROOT, "dist");
const ASTRO = join(DIST, "_astro");

const TEXT_EXT = new Set([".html", ".css", ".js", ".mjs", ".txt", ".xml", ".json", ".svg", ".webmanifest"]);
const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"]);

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const file = join(dir, name);
    if (statSync(file).isDirectory()) yield* walk(file);
    else yield file;
  }
}

let corpus = "";
for (const file of walk(DIST)) {
  if (TEXT_EXT.has(extname(file))) corpus += readFileSync(file, "utf8");
}

let freed = 0;
for (const name of readdirSync(ASTRO)) {
  if (!IMAGE_EXT.has(extname(name))) continue;
  if (corpus.includes(name)) continue;
  const size = statSync(join(ASTRO, name)).size;
  unlinkSync(join(ASTRO, name));
  freed += size;
  console.log(`[prune-assets] removed unreferenced _astro/${name} (${(size / 1024).toFixed(0)}kB)`);
}
console.log(`[prune-assets] freed ${(freed / 1024).toFixed(0)}kB`);
