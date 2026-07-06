#!/usr/bin/env node
/**
 * Fold the legacy assets into the Astro build.
 *
 * The bespoke 3D Process pack builder (site/build.mjs) and the flagship Brand
 * Book are preserved, not replaced. This prebuild step runs that builder and
 * copies its output — the pack, the Brand Guidelines, the A4 print edition and
 * the brand photography — into public/, so Astro emits them as static
 * sub-paths (/3d-process/…, /brand-guidelines/, /book/, /images/…).
 *
 * Run automatically via the "prebuild" npm script.
 */
import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const ROOT = dirname(fileURLToPath(import.meta.url)).replace(/\/scripts$/, "");
const PUBLIC = join(ROOT, "public");
const LEGACY = join(ROOT, "site", "dist");

function run(cmd, cwd) {
  execSync(cmd, { cwd, stdio: "inherit" });
}

// 1. Build the A4 print edition of the Brand Book (React/Vite), if buildable.
const BOOK_SRC = join(ROOT, "brand-guidelines");
try {
  if (existsSync(join(BOOK_SRC, "node_modules"))) {
    run("npm run build -- --base=/book/", BOOK_SRC);
  } else {
    console.log("[fold-legacy] brand-guidelines deps absent — skipping A4 build");
  }
} catch (e) {
  console.log("[fold-legacy] A4 build skipped:", e.message);
}

// 2. Run the bespoke pack builder → site/dist.
try {
  run("node site/build.mjs", ROOT);
} catch (e) {
  console.log("[fold-legacy] pack build skipped:", e.message);
}

// 3. Copy the legacy artifacts into public/ (Astro serves them verbatim).
const COPY = ["3d-process", "brand-guidelines", "book", "images"];
for (const name of COPY) {
  const from = join(LEGACY, name);
  if (!existsSync(from)) continue;
  const to = join(PUBLIC, name);
  rmSync(to, { recursive: true, force: true });
  mkdirSync(dirname(to), { recursive: true });
  cpSync(from, to, { recursive: true });
  console.log(`[fold-legacy] public/${name}`);
}

// The pack's own landing page (the bespoke builder emits it at the root of
// site/dist). Mount it at /3d-process/ so the pack has a home of its own,
// separate from the Astro marketing home.
const packHome = join(LEGACY, "index.html");
if (existsSync(packHome)) {
  cpSync(packHome, join(PUBLIC, "3d-process", "index.html"));
  console.log("[fold-legacy] public/3d-process/index.html");
}

console.log("[fold-legacy] done");
