/** Static site builder. Renders every page module in site/pages to dist/,
 *  copies static assets, and emits sitemap.xml + robots.txt + llms.txt.
 *  No dependencies; run with `node site/build.mjs`. */

import { mkdir, writeFile, cp, readdir, rm } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { site } from './data/site.mjs'

const root = path.dirname(fileURLToPath(import.meta.url))
const repo = path.resolve(root, '..')
const dist = path.join(repo, 'dist')

async function main() {
  await rm(dist, { recursive: true, force: true })
  await mkdir(dist, { recursive: true })

  // 1. Render pages
  const pagesDir = path.join(root, 'pages')
  const files = (await readdir(pagesDir)).filter((f) => f.endsWith('.mjs')).sort()
  const routes = []
  for (const f of files) {
    const mod = await import(path.join(pagesDir, f))
    for (const p of [].concat(mod.default)) {
      const outPath = p.path === '/404' ? '/404.html' : p.path + 'index.html'
      const target = path.join(dist, outPath)
      await mkdir(path.dirname(target), { recursive: true })
      await writeFile(target, p.html)
      if (p.path !== '/404') routes.push({ path: p.path, priority: p.priority ?? 0.5 })
      console.log('  built', outPath)
    }
  }

  // 2. Static assets
  await cp(path.join(root, 'styles.css'), path.join(dist, 'styles.css'))
  await cp(path.join(root, 'public'), dist, { recursive: true })

  // 3. Brand guidelines app (built separately with base /brand-guidelines/)
  const bg = path.join(repo, 'brand-guidelines', 'dist-site')
  if (existsSync(bg)) {
    await cp(bg, path.join(dist, 'brand-guidelines'), { recursive: true })
    console.log('  copied brand-guidelines/')
  } else {
    console.warn('  WARNING: brand-guidelines/dist-site missing; run its build first')
  }

  // 4. sitemap.xml
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .sort((a, b) => b.priority - a.priority)
  .map(
    (r) => `  <url><loc>${site.origin}${r.path}</loc><priority>${r.priority.toFixed(1)}</priority></url>`
  )
  .join('\n')}
</urlset>
`
  await writeFile(path.join(dist, 'sitemap.xml'), sitemap)

  // 5. robots.txt
  await writeFile(
    path.join(dist, 'robots.txt'),
    `User-agent: *\nAllow: /\n\nSitemap: ${site.origin}/sitemap.xml\n`
  )

  // 6. llms.txt
  await writeFile(
    path.join(dist, 'llms.txt'),
    `# Maxxim

Maxxim is a human-led, AI-enabled marketing delivery engine for growing
businesses and the partners who serve them. AI does about 80 percent of the
production. A named human partner owns the 20 percent that matters: judgement,
quality and sign-off. Clients own the strategy, source and assets from day one.

The 3D Process runs Discover (diagnosis), Design (strategy, messaging, brand,
plans and briefs) and Deploy (production, launch, reporting and optimisation),
with client approval checkpoints CP1, CP2 and CP3 between phases. What is
learned in market feeds the next cycle.

## Pages

- ${site.origin}/ : What Maxxim is and how the model works
- ${site.origin}/how-it-works/ : The operating model and checkpoints in depth
- ${site.origin}/3d-process/ : The full 3D Process output library
- ${site.origin}/for-partners/ : The delivery engine behind agencies and consultants
- ${site.origin}/work/ : Proof and case studies
- ${site.origin}/about/ : Why Maxxim exists and the people behind it
- ${site.origin}/contact/ : Talk to a real person
- ${site.origin}/start/ : Tell us about your business (start Discover)
`
  )

  console.log(`\nDone. ${routes.length} routes -> dist/`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
