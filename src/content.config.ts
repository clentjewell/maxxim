import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Work / showcase collection. The Jewell-grade case-study treatment,
 * adapted for Maxxim. One markdown file per engagement in src/content/work/.
 *
 * SECURITY: liveUrl must be a public production URL only. Never store admin
 * URLs, preview/branch URLs, credentials or passwords here.
 */
const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    client: z.string(),
    category: z.string(),
    audience: z.enum(["B2B", "B2C", "Personal brands"]),
    sectors: z.array(z.string()).default([]),
    services: z.array(z.string()).default([]),
    summary: z.string(),
    claim: z.string().optional(),
    challenge: z.string().optional(),
    solution: z
      .object({
        discover: z.string(),
        design: z.string(),
        deploy: z.string(),
      })
      .optional(),
    results: z
      .array(z.object({ metric: z.string(), label: z.string() }))
      .default([]),
    reflection: z
      .object({ quote: z.string(), name: z.string(), role: z.string() })
      .optional(),
    heroImage: z.string().optional(),
    liveUrl: z.string().url().optional(),
    status: z.enum(["launched", "in-preparation"]).default("in-preparation"),
    marquee: z.boolean().default(false),
    order: z.number().default(50),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };
