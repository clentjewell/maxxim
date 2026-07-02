import { page, heroFull } from '../lib/html.mjs'
import { site, cta } from '../data/site.mjs'
import { phases, loop, countOutputs, totalOutputs } from '../data/threeDOutputs.mjs'

const faqs = [
  {
    q: 'Is this just AI doing my marketing?',
    a: 'No. AI runs the repeatable 80 percent of the production at speed. A named human partner owns the 20 percent that matters: judgement, quality and sign-off. Nothing ships until a person has put their name on it.',
  },
  {
    q: 'What do I actually receive?',
    a: `Structured outputs with a job to do: a diagnosis of your business, a strategy and messaging set, build-ready briefs, a launched website and the assets around it, then reporting and an optimisation backlog. The full library is ${totalOutputs()} output types across three phases.`,
  },
  {
    q: 'Who owns the work?',
    a: 'You do, from day one. The strategy, the website source and the assets are handed to you as they are approved. No lock-in, no hostage-taking, no ransom for your own work.',
  },
  {
    q: 'How fast is it?',
    a: 'Days, not months. Value lands at every checkpoint, not only at the end. You see real work at CP1 before you commit to anything further.',
  },
  {
    q: 'What does it cost?',
    a: 'Less than an agency retainer, more than a stack of tools. Scope, deliverables and price are agreed in writing before any work begins, so there are no surprises.',
  },
  {
    q: 'What if I already have a marketing person or agency?',
    a: 'Maxxim also runs as the delivery engine behind agencies and consultants. You keep the relationship and the standard, we carry the production. See the partner page for how that works.',
  },
]

const body = `
${heroFull({
  media: { img: '/images/human-at-the-wheel.jpg' },
  eyebrow: 'The agency-in-a-box',
  title: 'Agency-grade marketing, with a human at the wheel.',
  lede: 'AI does the production. A named human partner owns the judgement. You own the work from day one.',
  ctas: `<a class="btn btn-primary" href="${cta.primary.href}">${cta.primary.label}</a>
        <a class="btn btn-secondary hero-full-btn" href="${cta.secondary.href}">${cta.secondary.label}</a>`,
})}

<section class="section section--mist">
  <div class="wrap">
    <div class="stack center">
      <h2 class="h1">The agency is too much. The tool stack is not enough.</h2>
      <p class="lede">Most growing businesses are stuck between two bad options. Maxxim is the third.</p>
    </div>
    <div class="compare mt-lg">
      <div class="card reveal">
        <h3 class="h3">The traditional agency</h3>
        <p>Senior thinking, but slow, expensive and opaque. Months of process before anything ships, and a retainer that never ends.</p>
      </div>
      <div class="card reveal">
        <h3 class="h3">DIY AI tools</h3>
        <p>Fast and cheap, but the work lands back on you. A pile of prompts and drafts becomes a second job, with nobody accountable.</p>
      </div>
      <div class="card card--blue reveal">
        <h3 class="h3">Maxxim, the agency-in-a-box</h3>
        <p>AI production speed with a named human's judgement, quality and sign-off. Finished outcomes you own, delivered in days.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap grid-split">
    <div class="stack">
      <h2 class="h1">Finished outcomes, not a pile of prompts.</h2>
      <p>Maxxim does not hand you suggestions to finish yourself. Every engagement produces working assets with a job to do:</p>
      <ul class="output-list" style="grid-template-columns:1fr">
        <li>A diagnosis of your market, customer and offer</li>
        <li>Strategy, messaging and brand direction you sign off</li>
        <li>Build-ready briefs for every channel that matters</li>
        <li>A launched, professionally designed website</li>
        <li>Reporting, review and an optimisation backlog</li>
      </ul>
      <p>Every output has a job. Every phase has a checkpoint. Everything is yours.</p>
    </div>
    <img src="/images/output-document.jpg" alt="A printed strategy document with Signal Blue headings on a desk" loading="lazy" width="880" height="660">
  </div>
</section>

<section class="section section--ink">
  <div class="wrap">
    <div class="stack">
      <p class="kicker">The 3D Process</p>
      <h2 class="h1">Discover. Design. Deploy. Then it learns.</h2>
      <p class="lede">A structured intelligence process, not a workshop and a wish. Each phase produces real outputs, and each phase ends at a gate you approve.</p>
    </div>
    <div class="grid-3 mt-lg">
      ${phases
        .map(
          (p) => `
      <div class="card card--mist reveal" style="background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.14);color:#fff">
        <p class="kicker" style="color:var(--blue-tint)">${p.lead}</p>
        <h3 class="h2" style="margin-top:6px">${p.name}</h3>
        <p style="margin-top:10px;color:rgba(255,255,255,.82)">${p.summary}</p>
        <p style="margin-top:14px;font-size:.9rem;color:rgba(255,255,255,.6)">${countOutputs(p)} output types &middot; approved at ${p.checkpoint.code}</p>
      </div>`
        )
        .join('')}
    </div>
    <div class="mt-lg" style="display:flex;flex-wrap:wrap;gap:18px;align-items:center;justify-content:space-between">
      <p style="max-width:56ch;color:rgba(255,255,255,.82)">${loop.summary}</p>
      <a class="btn btn-secondary" href="/3d-process/">${cta.secondary.label}</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="stack">
      <h2 class="h1">AI does about 80 percent. A human owns the rest.</h2>
      <p class="lede">The 20 percent a machine cannot own is exactly the part clients pay for.</p>
    </div>
    <div class="split-bar mt-lg" role="img" aria-label="Bar showing the split of work: AI runs about 80 percent, a named human owns about 20 percent">
      <div class="split-ai">AI runs the repeatable production, at speed</div>
      <div class="split-human">A human owns the rest</div>
    </div>
    <div class="grid-2 mt-lg">
      <div class="stack">
        <h3 class="h3">What the engine does</h3>
        <p>Research synthesis, drafting, design production, build work, variants and volume. The repeatable work that used to consume an agency's junior floor, done in hours.</p>
      </div>
      <div class="stack">
        <h3 class="h3">What the human owns</h3>
        <p>Reading your business correctly. Judgement calls. Quality. The decision that something is right, and the name that stands behind it at every gate.</p>
        <div class="gate">
          <span class="gate-code" aria-hidden="true">&#10003;</span>
          <div>
            <strong>&ldquo;I've checked this; it will work.&rdquo;</strong>
            <p>A named partner signs off at every gate.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--blue">
  <div class="wrap center stack">
    <h2 class="h1">Yours from day one.</h2>
    <p class="lede" style="color:rgba(255,255,255,.9)">The strategy, the website source and every asset are handed to you as they are approved. Human checked. Partner approved. Client owned.</p>
  </div>
</section>

<section class="section">
  <div class="wrap grid-split">
    <img src="/images/partner-table.jpg" alt="Four professionals working through branded documents at a round table" loading="lazy" width="880" height="660">
    <div class="stack">
      <p class="kicker">For partners</p>
      <h2 class="h1">Keep the relationship. We carry the production.</h2>
      <p>Agencies and consultants run Maxxim as the delivery engine behind their client relationships: the same 3D outputs, briefs and reporting, delivered under your standard and your sign-off.</p>
      <p><a href="/for-partners/" style="font-weight:600;text-decoration:none">How partnering works &rarr;</a></p>
    </div>
  </div>
</section>

<section class="section section--mist">
  <div class="wrap" style="max-width:820px">
    <h2 class="h1">Fair questions.</h2>
    <div class="faq mt-lg">
      ${faqs
        .map(
          (f) => `
      <details>
        <summary>${f.q}</summary>
        <div class="faq-a"><p>${f.a}</p></div>
      </details>`
        )
        .join('')}
    </div>
  </div>
</section>

<section class="section section--ink">
  <div class="wrap center stack-lg">
    <h2 class="h1">See what the method produces before you commit.</h2>
    <p class="lede" style="color:rgba(255,255,255,.85)">Tell us about your business and we open Discover. You review real work at the first checkpoint, then decide.</p>
    <div><a class="btn btn-primary" href="${cta.primary.href}">${cta.primary.label}</a></div>
  </div>
</section>
`

export default {
  path: '/',
  priority: 1.0,
  html: page({
    title: 'Agency-grade marketing, with a human at the wheel | Maxxim',
    description: site.description,
    path: '/',
    ogImage: '/images/og-default.jpg',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          name: 'Maxxim',
          alternateName: 'Maxxim, the agency-in-a-box',
          url: site.origin,
          email: site.email,
          slogan: 'A human at the wheel',
          description: site.description,
          logo: `${site.origin}/images/logo-ink.png`,
        },
        {
          '@type': 'WebSite',
          name: 'Maxxim',
          url: site.origin,
          inLanguage: 'en-AU',
        },
        {
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        },
      ],
    },
    body,
  }),
}
