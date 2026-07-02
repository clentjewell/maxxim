import { page } from '../lib/html.mjs'
import { cta } from '../data/site.mjs'
import { phases, loop, countOutputs, totalOutputs } from '../data/threeDOutputs.mjs'

const chevron = `<svg class="acc-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>`

function phaseColumn(p) {
  return `
  <div class="phase-col reveal">
    <div class="phase-col-head">
      <p class="kicker">${p.lead}</p>
      <div class="phase-name">${p.name}</div>
      <div class="phase-count">${countOutputs(p)} output types &middot; closes at ${p.checkpoint.code}</div>
    </div>
    <div class="phase-col-body">
      <p style="font-size:.95rem">${p.summary}</p>
      <div>
        ${p.groups
          .map(
            (g) => `
        <details class="acc">
          <summary>
            <span>${g.name}</span>
            <span style="display:inline-flex;align-items:center;gap:10px"><span class="acc-count">${g.outputs.length}</span>${chevron}</span>
          </summary>
          <div class="acc-body">
            ${g.note ? `<p class="acc-note">${g.note}</p>` : ''}
            <ul class="output-list" style="grid-template-columns:1fr">
              ${g.outputs.map((o) => `<li>${o}</li>`).join('')}
            </ul>
          </div>
        </details>`
          )
          .join('')}
      </div>
      <div class="gate" style="margin-top:auto">
        <span class="gate-code">${p.checkpoint.code}</span>
        <div>
          <strong>${p.checkpoint.name}.</strong>
          <p>${p.checkpoint.description}</p>
        </div>
      </div>
    </div>
  </div>`
}

const body = `
<section class="hero wrap">
  <div class="hero-grid">
    <div class="stack-lg">
      <h1 class="display">See what the 3D Process actually produces.</h1>
      <p class="lede">${totalOutputs()} structured output types across Discover, Design and Deploy. Every output has a job. Every phase has a checkpoint.</p>
      <div class="hero-ctas">
        <a class="btn btn-primary" href="${cta.primary.href}">${cta.primary.label}</a>
      </div>
    </div>
    <div class="hero-media">
      <img src="/images/three-specialists.jpg" alt="Three monitors showing a copy document, a Signal Blue design layout and a social dashboard" width="880" height="748" fetchpriority="high">
    </div>
  </div>
</section>

<section class="section section--mist">
  <div class="wrap" style="max-width:820px">
    <div class="stack">
      <h2 class="h1">Not a workshop. Not a prompt stack. An operating library.</h2>
      <p class="lede">Most marketing engagements produce a deck and a promise. The 3D Process produces a structured library of working documents, plans, briefs and assets, built in a fixed order so each output feeds the next.</p>
      <p>The diagnosis in Discover becomes the strategy in Design. The strategy becomes briefs. The briefs become launched work in Deploy. And what the launched work teaches us becomes the sharper next cycle. Nothing is vague because everything has a name, a place and a review gate.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="grid-3" style="align-items:stretch">
      ${phases.map(phaseColumn).join('')}
    </div>
  </div>
</section>

<section class="section section--ink">
  <div class="wrap grid-split" style="align-items:start">
    <div class="stack">
      <h2 class="h1">Checkpoints are where you stay in control.</h2>
      <p style="color:rgba(255,255,255,.85)">CP1 closes Discover: you approve the diagnosis. CP2 closes Design: you approve the strategy and every brief before production. CP3 closes the launch plan: you approve what goes live.</p>
      <p style="color:rgba(255,255,255,.85)">At each gate a named partner reviews the work and puts their name on it before you ever see it. You review finished work, not fragments, and nothing proceeds without your approval.</p>
    </div>
    <div class="stack">
      <h2 class="h1">Outputs become intelligence.</h2>
      <p style="color:rgba(255,255,255,.85)">The library is not paperwork. It is the system's memory. Your audience teardown informs your copy deck. Your copy deck informs your website. Your reporting informs all three, next cycle.</p>
      <p style="color:rgba(255,255,255,.85)">${loop.summary}</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap grid-split">
    <img src="/images/checkpoint-review.jpg" alt="A business owner reviewing a launched website on a large monitor" loading="lazy" width="880" height="660">
    <div class="stack">
      <h2 class="h1">Deploy is where proof gets made.</h2>
      <p>The Deploy phase does not end at launch. It manages the activity, reports on performance and produces the evidence pack: live asset links, the reporting pack, the optimisation backlog and the next sprint's priorities.</p>
      <p>That evidence is what makes the next cycle better, and it is what makes the results yours to keep. If we ever part ways, you walk away with the entire library.</p>
    </div>
  </div>
</section>

<section class="section section--mist">
  <div class="wrap center stack-lg">
    <h2 class="h1">Your business, through the same engine.</h2>
    <p class="lede">Tell us about your business and the first outputs you will see are your own: a real diagnosis, at CP1, before you commit further.</p>
    <div><a class="btn btn-primary" href="${cta.primary.href}">${cta.primary.label}</a></div>
  </div>
</section>
`

export default {
  path: '/3d-process/',
  priority: 0.9,
  html: page({
    title: `The 3D Process output library, ${totalOutputs()} structured outputs | Maxxim`,
    description:
      'The full Maxxim 3D Process output library: every Discover, Design and Deploy output type, the CP1, CP2 and CP3 checkpoints, and how outputs become reusable intelligence.',
    path: '/3d-process/',
    ogImage: '/images/three-specialists.jpg',
    body,
  }),
}
