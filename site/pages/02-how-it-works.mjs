import { page } from '../lib/html.mjs'
import { cta } from '../data/site.mjs'
import { phases, loop, countOutputs } from '../data/threeDOutputs.mjs'

const phaseDetail = {
  discover: {
    img: '/images/operator-desk.jpg',
    alt: 'A focused operator at a desk reviewing a marketing dashboard',
    youProvide:
      'Your story, your numbers and honest answers. A kick-off conversation and access to what already exists.',
    youReview:
      'The Discovery Summary at CP1: the diagnosis, the priority problems and the recommended moves.',
  },
  design: {
    img: '/images/proposal-cover.jpg',
    alt: 'A printed Signal Blue proposal cover on a white desk',
    youProvide:
      'Reactions and decisions. You tell us what is right, what is off and what matters most.',
    youReview:
      'The Strategy Summary at CP2: strategy, messaging, brand direction and every brief, before anything is produced.',
  },
  deploy: {
    img: '/images/launched-site.jpg',
    alt: 'A laptop showing a launched Signal Blue branded website beside a printed proposal',
    youProvide:
      'Final approvals and the go decision. After launch, the conversation continues through reporting.',
    youReview:
      'The integrated launch plan at CP3, then live assets, monthly reporting and the optimisation backlog.',
  },
}

const body = `
<section class="hero wrap">
  <div class="stack-lg" style="max-width:760px">
    <h1 class="display">Most marketing dies between the strategy and the build. Ours cannot.</h1>
    <p class="lede">The 3D Process connects diagnosis to strategy to launched work in one engine, with a human gate between every phase.</p>
    <div class="hero-ctas">
      <a class="btn btn-primary" href="${cta.primary.href}">${cta.primary.label}</a>
    </div>
  </div>
</section>

<section class="section section--mist">
  <div class="wrap grid-split">
    <div class="stack">
      <h2 class="h1">Why work gets stuck.</h2>
      <p>Agencies produce strategy decks that never become assets. Tools produce assets that never had a strategy. The gap between thinking and shipping is where budgets die.</p>
      <p>Maxxim closes that gap structurally. It is the agency-in-a-box: the same engine that writes the strategy writes the briefs, and the same engine that writes the briefs builds the work. Nothing is lost in translation because nothing is handed between vendors.</p>
    </div>
    <div class="stack">
      <h2 class="h1">Speed and judgement, together.</h2>
      <p>AI runs the repeatable 80 percent: research synthesis, drafting, production, variants. That is how strategy and a launched website arrive in days, not months.</p>
      <p>A named human partner owns the 20 percent that matters. Inside the engine, the specialists make the method concrete: Max on words and strategy, Sal on design, Pip on social. They are the method, not the hero. The accountable human is always your partner.</p>
    </div>
  </div>
</section>

${phases
  .map((p, i) => {
    const d = phaseDetail[p.key]
    const groups = p.groups
      .map((g) => `<li><strong>${g.name}</strong>: ${g.outputs.slice(0, 3).join(', ')}${g.outputs.length > 3 ? ` and ${g.outputs.length - 3} more` : ''}</li>`)
      .join('')
    return `
<section class="section">
  <div class="wrap">
    <div class="grid-split" style="align-items:start">
      ${i % 2 === 1 ? `<img src="${d.img}" alt="${d.alt}" loading="lazy" width="880" height="660">` : ''}
      <div class="stack">
        <p class="kicker">${p.name}</p>
        <h2 class="h1">${p.summary}</h2>
        <ul class="output-list" style="grid-template-columns:1fr">${groups}</ul>
        <div class="gate">
          <span class="gate-code">${p.checkpoint.code}</span>
          <div>
            <strong>${p.checkpoint.name}.</strong>
            <p>${p.checkpoint.description}</p>
          </div>
        </div>
        <div class="grid-2" style="gap:16px">
          <div class="card card--mist" style="padding:18px 20px">
            <h3 class="h3" style="font-size:1rem">You provide</h3>
            <p style="font-size:.93rem;margin-top:6px">${d.youProvide}</p>
          </div>
          <div class="card card--mist" style="padding:18px 20px">
            <h3 class="h3" style="font-size:1rem">You review and own</h3>
            <p style="font-size:.93rem;margin-top:6px">${d.youReview}</p>
          </div>
        </div>
      </div>
      ${i % 2 === 0 ? `<img src="${d.img}" alt="${d.alt}" loading="lazy" width="880" height="660">` : ''}
    </div>
  </div>
</section>`
  })
  .join('')}

<section class="section section--ink">
  <div class="wrap" style="max-width:820px">
    <div class="stack">
      <h2 class="h1">After launch, the system learns.</h2>
      <p class="lede" style="color:rgba(255,255,255,.85)">${loop.summary}</p>
      <p style="color:rgba(255,255,255,.8)">Reporting is not a PDF that arrives and dies. Every review produces recommendations and next actions, and the approved ones go back through the engine. That is the difference between a project and an operating system.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="stack center">
      <h2 class="h1">The checkpoint guarantee.</h2>
      <p class="lede">You do not move on until you have approved the phase. It is the opposite of the agency black box.</p>
    </div>
    <div class="grid-3 mt-lg">
      ${phases
        .map(
          (p) => `
      <div class="card reveal">
        <p class="kicker">${p.checkpoint.code}</p>
        <h3 class="h3" style="margin-top:6px">${p.checkpoint.name}</h3>
        <p style="margin-top:8px;font-size:.95rem">${p.checkpoint.description}</p>
        <p style="margin-top:10px;font-size:.85rem;color:var(--caption-grey)">Closes ${p.name} (${countOutputs(p)} output types)</p>
      </div>`
        )
        .join('')}
    </div>
  </div>
</section>

<section class="section section--mist">
  <div class="wrap center stack-lg">
    <h2 class="h1">Start with Discover. Decide at CP1.</h2>
    <p class="lede">No retainer to sign and no tools to learn. You see finished work before you commit to anything further.</p>
    <div><a class="btn btn-primary" href="${cta.primary.href}">${cta.primary.label}</a></div>
  </div>
</section>
`

export default {
  path: '/how-it-works/',
  priority: 0.9,
  html: page({
    title: 'How the 3D Process works | Maxxim',
    description:
      'Discover, Design, Deploy. How Maxxim turns your business into strategy, a launched website and working assets, with a human approval gate at every phase.',
    path: '/how-it-works/',
    ogImage: '/images/operator-desk.jpg',
    body,
  }),
}
