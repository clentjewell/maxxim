import { page } from '../lib/html.mjs'
import { cta } from '../data/site.mjs'

const people = [
  {
    name: 'Raef Akehurst',
    role: 'Co-founder · Platform and engineering',
    bio: 'Builds the platform that lets AI carry the 80 percent, and keeps the engine honest, fast and secure.',
  },
  {
    name: 'Clent Jewell',
    role: 'Founding partner · Creator of the 3D methodology',
    bio: 'Built and sharpened Discover, Design, Deploy over years of real client work at Jewell Projects, long before AI entered the picture.',
  },
]

const commitments = [
  { n: '01', t: 'A human stands behind it', d: 'Every output that ships carries a named partner’s sign-off. Accountability is a person, not a policy.' },
  { n: '02', t: 'Finished beats busy', d: 'We are judged on outcomes you can point at, not process exhaust. A plan and a launched site, not a pile of activity.' },
  { n: '03', t: 'You own it from day one', d: 'Strategy, source and assets are handed over as they are approved. No lock-in, no hostage-taking.' },
  { n: '04', t: 'Show the work, not the smoke', d: 'The 3D library makes the work visible. You can see every output type before you spend a dollar.' },
  { n: '05', t: 'Earn the trust, then keep it', d: 'We would rather under-claim and over-deliver. Proof, not adjectives, does the persuading.' },
]

const body = `
<section class="hero wrap">
  <div class="stack-lg" style="max-width:780px">
    <h1 class="display">Within reach of every owner who was told it wasn't for them.</h1>
    <p class="lede">Maxxim exists for a market where no good business loses to a worse one simply because it couldn't afford to look the part.</p>
  </div>
</section>

<section class="section section--mist">
  <div class="wrap grid-split">
    <div class="stack">
      <h2 class="h1">AI made production cheap. It made judgement precious.</h2>
      <p>Anyone can generate marketing now. Almost nobody will stand behind it. The trust gap between what AI can produce and what a client will sign off on has not closed, and it will not close until a named human stands behind the outcome at every gate.</p>
      <p>That is the architecture of Maxxim, not a feature of it. The engine runs at AI speed. The human stays at the wheel. The client owns what gets built.</p>
    </div>
    <img src="/images/human-at-the-wheel.jpg" alt="A hand resting on a laptop keyboard, the human at the wheel" loading="lazy" width="880" height="660">
  </div>
</section>

<section class="section">
  <div class="wrap" style="max-width:820px">
    <div class="stack">
      <p class="kicker">Where the method comes from</p>
      <h2 class="h1">Proven, not invented for a pitch.</h2>
      <p class="lede">The 3D methodology, Discover, Design, Deploy, is Clent Jewell's. He built it over years of real client work at Jewell Projects, with documented successes long before AI entered the picture.</p>
      <p>What Maxxim does is productise that method into the agency-in-a-box and scale it with AI: the same structured intelligence process, the same human judgement at the gates, now delivered in days instead of months. We run the method on ourselves. The site you are reading, and the brand guidelines behind it, came through the same engine.</p>
    </div>
  </div>
</section>

<section class="section section--ink">
  <div class="wrap">
    <h2 class="h1">The people behind it.</h2>
    <div class="grid-2 mt-lg" style="max-width:900px">
      ${people
        .map(
          (p) => `
      <div class="reveal" style="border-top:2px solid rgba(255,255,255,.18);padding-top:18px">
        <h3 class="h3">${p.name}</h3>
        <p style="font-size:.88rem;color:var(--blue-tint);margin-top:4px">${p.role}</p>
        <p style="font-size:.95rem;margin-top:10px;color:rgba(255,255,255,.8)">${p.bio}</p>
      </div>`
        )
        .join('')}
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap" style="max-width:820px">
    <h2 class="h1">What we stand for.</h2>
    <div class="mt-lg">
      ${commitments
        .map(
          (c) => `
      <div class="reveal" style="display:grid;grid-template-columns:56px 1fr;gap:18px;padding:22px 0;border-top:1px solid var(--border-soft)">
        <span style="font-weight:700;color:var(--blue)">${c.n}</span>
        <div>
          <h3 class="h3">${c.t}</h3>
          <p style="margin-top:6px">${c.d}</p>
        </div>
      </div>`
        )
        .join('')}
    </div>
  </div>
</section>

<section class="section section--mist">
  <div class="wrap center stack-lg">
    <h2 class="h1">Judge us by the work.</h2>
    <p class="lede">The method is visible, the outputs are named and the first checkpoint is yours to approve before you commit.</p>
    <div><a class="btn btn-primary" href="${cta.primary.href}">${cta.primary.label}</a></div>
  </div>
</section>
`

export default {
  path: '/about/',
  priority: 0.7,
  html: page({
    title: 'About Maxxim, the people and the proven method',
    description:
      'Why Maxxim exists: AI made production cheap and judgement precious. The 3D methodology, the people behind it, and the five commitments the work is held to.',
    path: '/about/',
    ogImage: '/images/human-at-the-wheel.jpg',
    body,
  }),
}
