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
    heroClaim: z.string().optional(),
    whatWeSaw: z.string().optional(),
    needs: z.array(z.string()).optional(),
    callouts: z
      .array(z.object({ value: z.string(), title: z.string(), line: z.string() }))
      .optional(),
    move: z
      .object({
        discover: z.string(),
        design: z.string(),
        deploy: z.string(),
        deepen: z.string(),
      })
      .optional(),
    whatShipped: z.array(z.string()).optional(),
    takeout: z.string().optional(),
    atGlance: z
      .object({ audience: z.string().optional(), scope: z.string().optional() })
      .optional(),
    gallery: z
      .array(z.object({ label: z.string(), note: z.string().optional(), image: z.string() }))
      .optional(),
    evidence: z
      .array(
        z.object({
          discipline: z.string(),
          label: z.string(),
          note: z.string(),
          url: z.string().url().optional(),
          buttonLabel: z.string().optional(),
          image: z.string().optional(),
        }),
      )
      .optional(),
    deepenClaim: z.string().optional(),
  }),
});

export const collections = { work };
