import { page } from '../lib/html.mjs'
import { cta } from '../data/site.mjs'
import { totalOutputs } from '../data/threeDOutputs.mjs'

const upcoming = [
  {
    t: 'A launched website and strategy',
    d: 'Client context, the challenge, what the 3D Process did, and the outcome. Published when the client has signed off.',
  },
  {
    t: 'A credibility gap, closed',
    d: 'How a good business stopped losing to a worse-looking one. Published when the numbers are real and approved.',
  },
  {
    t: 'Days, not months, proven',
    d: 'The cadence claim measured on a real engagement, checkpoint by checkpoint. Published when it is verifiable.',
  },
]

const body = `
<section class="hero wrap">
  <div class="stack-lg" style="max-width:760px">
    <h1 class="display">The proof is the work.</h1>
    <p class="lede">We won't put a name, a number or a result on this page until it is real and the client has signed off on it.</p>
  </div>
</section>

<section class="section section--mist">
  <div class="wrap">
    <div class="stack">
      <h2 class="h1">Proof you can inspect today.</h2>
    </div>
    <div class="grid-3 mt-lg">
      <div class="card reveal">
        <h3 class="h3">This site</h3>
        <p>The site you are reading was built the 3D way: diagnosed, designed and deployed through the same engine we run for clients.</p>
      </div>
      <div class="card reveal">
        <h3 class="h3">The output library</h3>
        <p>${totalOutputs()} named output types, checkpoint gates and all, published in full on the <a href="/3d-process/">3D Process page</a>. Rigour you can read before you spend.</p>
      </div>
      <div class="card reveal">
        <h3 class="h3">The method's track record</h3>
        <p>Discover, Design, Deploy was built and proven over years of real client work at Jewell Projects, before Maxxim productised it with AI.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap grid-split">
    <img src="/images/launched-site.jpg" alt="A laptop showing a launched Signal Blue branded website beside a printed proposal" loading="lazy" width="880" height="660">
    <div class="stack">
      <h2 class="h1">Structural proof, not testimonial theatre.</h2>
      <p>Some things do not need a case study to verify. The checkpoints are contractual. The ownership terms are in writing before work begins. The human sign-off is the architecture. You can test all three at CP1, on your own business, before committing further.</p>
    </div>
  </div>
</section>

<section class="section section--mist">
  <div class="wrap">
    <div class="stack">
      <h2 class="h1">Case studies, in preparation.</h2>
      <p class="lede">That honesty is part of what you are buying.</p>
    </div>
    <div class="grid-3 mt-lg">
      ${upcoming
        .map(
          (u) => `
      <div class="card reveal" style="border-style:dashed">
        <p class="kicker" style="color:var(--caption-grey)">In preparation</p>
        <h3 class="h3" style="margin-top:8px">${u.t}</h3>
        <p style="margin-top:8px;font-size:.95rem">${u.d}</p>
      </div>`
        )
        .join('')}
    </div>
  </div>
</section>

<section class="section section--ink">
  <div class="wrap center stack-lg">
    <h2 class="h1">Be the case study we publish next.</h2>
    <p class="lede" style="color:rgba(255,255,255,.85)">Start with Discover, review real work at CP1 and decide from evidence.</p>
    <div><a class="btn btn-primary" href="${cta.primary.href}">${cta.primary.label}</a></div>
  </div>
</section>
`

export default {
  path: '/work/',
  priority: 0.5,
  html: page({
    title: 'Our work, proof from the 3D Process | Maxxim',
    description:
      'Proof you can inspect today: this site built the 3D way, the full output library, and the method proven at Jewell Projects. Case studies published only with client sign-off.',
    path: '/work/',
    ogImage: '/images/launched-site.jpg',
    body,
  }),
}
