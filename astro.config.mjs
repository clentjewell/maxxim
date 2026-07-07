import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

import { SITE } from "./src/lib/site.ts";

// Static output. Near-zero client JS. The legacy 3D Process pack and Brand Book
// are folded into public/ by scripts/fold-legacy.mjs (prebuild) and served as
// static sub-paths. Deployed to Cloudflare (project "maxxim").
export default defineConfig({
  site: SITE.url,
  output: "static",
  trailingSlash: "ignore",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: "auto",
  },
  // Content Security Policy. Astro computes SHA-256 hashes for every inline
  // script and style at build time, so we get a strict, no-'unsafe-inline'
  // policy that still allows our own bundled/inline scripts. The remaining
  // security headers live in public/_headers.
  experimental: {
    csp: {
      algorithm: "SHA-256",
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "base-uri 'self'",
        "form-action 'self'",
        "object-src 'none'",
      ],
    },
  },
});
