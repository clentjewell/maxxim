import { page, heroFull } from '../lib/html.mjs'
import { forms } from '../data/site.mjs'
import { phases } from '../data/threeDOutputs.mjs'

const handoffs = [
  { name: 'Discovery outputs', desc: 'Audience teardowns, competitor analysis, offer diagnosis, the CP1 summary.' },
  { name: 'Strategy and messaging', desc: 'Business plans, brand strategy, positioning, copy decks, customer journeys.' },
  { name: 'Website outputs', desc: 'Website strategy, briefs, sitemaps, SEO strategy, the launched build.' },
  { name: 'Briefing documents', desc: 'Design, photo and video, paid media, EDM, CRM, PR and events briefs.' },
  { name: 'Production assets', desc: 'Creative, social, video, email templates, sales collateral, landing pages.' },
  { name: 'Reporting and evidence', desc: 'Reporting packs, performance reviews, optimisation backlog, case study pack.' },
]

const body = `
${heroFull({
  media: { img: '/images/partner-table.jpg' },
  title: 'Run more clients without drowning in production.',
  lede: 'You keep the relationship and the standard. Maxxim is the agency-in-a-box behind it.',
  ctas: `<a class="btn btn-primary" href="#partner-enquiry">Talk about partnering</a>`,
})}

<section class="section section--mist">
  <div class="wrap grid-split">
    <div class="stack">
      <h2 class="h1">The capacity wall is real.</h2>
      <p>You have the relationships and the judgement. What you do not have is a production floor. So mornings go to strategy and afternoons disappear into the grind, and you turn away work you could be winning.</p>
      <p>Hiring is slow and risky. Outsourcing to freelancers makes you a production manager. And handing clients a stack of AI tools hands them your standard to maintain alone.</p>
    </div>
    <div class="stack">
      <h2 class="h1">AI alone does not solve quality.</h2>
      <p>Raw AI output is fast, and fast is worthless if you cannot put your name on it. The gap between generated and finished is judgement, and judgement does not scale through prompts.</p>
      <p>Maxxim structures that judgement into the method: the 3D Process, the checkpoints and a named human gate on everything that ships. The engine gives you speed. The gates protect your standard.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="stack">
      <p class="kicker">How partnering works</p>
      <h2 class="h1">The engine room, not the front of house.</h2>
    </div>
    <div class="grid-3 mt-lg">
      <div class="card reveal">
        <h3 class="h3">Your standard, held</h3>
        <p>Every output moves through the 3D checkpoints. You review and sign off before your client ever sees it. Nothing ships under your name that you have not approved.</p>
      </div>
      <div class="card reveal">
        <h3 class="h3">Your time, back</h3>
        <p>The engine carries research, drafting, design production and build work. Your hours go where they earn: the client, the strategy and the judgement calls.</p>
      </div>
      <div class="card card--blue reveal">
        <h3 class="h3">Your client, yours</h3>
        <p>Maxxim never disintermediates you. It is &ldquo;Powered by Maxxim&rdquo;, not &ldquo;replaced by Maxxim&rdquo;. The relationship, the invoice and the credit stay with you.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--ink">
  <div class="wrap">
    <div class="stack">
      <h2 class="h1">You are not buying production hours. You are getting the output system.</h2>
      <p class="lede" style="color:rgba(255,255,255,.85)">Partners run the same 3D library clients see on the <a href="/3d-process/" style="color:var(--blue-tint)">3D Process page</a>, delivered under your brand and your sign-off.</p>
    </div>
    <div class="grid-3 mt-lg">
      ${handoffs
        .map(
          (h) => `
      <div class="reveal" style="border-top:2px solid rgba(255,255,255,.18);padding-top:16px">
        <h3 class="h3">${h.name}</h3>
        <p style="font-size:.95rem;margin-top:8px;color:rgba(255,255,255,.78)">${h.desc}</p>
      </div>`
        )
        .join('')}
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap grid-split">
    <div class="stack">
      <h2 class="h1">Where sign-off sits.</h2>
      <p>The gates are yours. ${phases.map((p) => p.checkpoint.code).join(', ')} all pass through you before your client sees the work, and the specialists inside the engine (Max on words, Sal on design, Pip on social) are the method made visible, never a substitute for your judgement.</p>
      <p>The accountable human is always the partner. That is the architecture, not a promise.</p>
    </div>
    <div class="stack">
      <h2 class="h1">How the relationship is protected.</h2>
      <ul class="output-list" style="grid-template-columns:1fr">
        <li>Your brand stays front of house on every deliverable</li>
        <li>Your client relationship is never contacted around you</li>
        <li>Your reputation is protected by the checkpoint gates</li>
        <li>Your economics improve, because the engine carries the cost of production</li>
      </ul>
      <p>This is not a franchise, a reseller scheme or a marketplace. It is a delivery engine behind a small number of partners we know by name, founder to founder.</p>
    </div>
  </div>
</section>

<section class="section section--mist" id="partner-enquiry">
  <div class="wrap" style="max-width:720px">
    <div class="stack">
      <h2 class="h1">Talk about partnering.</h2>
      <p class="lede">Not a self-serve sign-up. Tell us about your agency or consultancy and a founder will come back to you personally.</p>
    </div>
    <form data-maxxim-form data-site="${forms.siteKey}" data-success="${forms.partnerSuccess}" class="maxxim-form mt-lg" novalidate>
      <div class="form-grid">
        <p class="field">
          <label for="p-name">Name <span aria-hidden="true">*</span></label>
          <input id="p-name" name="name" type="text" autocomplete="name" required>
        </p>
        <p class="field">
          <label for="p-email">Email <span aria-hidden="true">*</span></label>
          <input id="p-email" name="email" type="email" autocomplete="email" required>
        </p>
        <p class="field full">
          <label for="p-agency">Agency or consultancy <span aria-hidden="true">*</span></label>
          <input id="p-agency" name="agency" type="text" autocomplete="organization" required>
        </p>
        <p class="field full">
          <label for="p-message">Tell us about your agency <span aria-hidden="true">*</span></label>
          <textarea id="p-message" name="message" rows="5" required></textarea>
        </p>
      </div>
      <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden">
      <div class="cf-turnstile" data-sitekey="${forms.turnstileSiteKey}" style="margin-top:18px"></div>
      <p style="margin-top:18px"><button type="submit" class="btn btn-primary">Send the enquiry</button></p>
      <p data-maxxim-status role="status" aria-live="polite" class="maxxim-status form-status"></p>
    </form>
  </div>
</section>
`

export default {
  path: '/for-partners/',
  priority: 0.8,
  html: page({
    title: 'The delivery engine behind your agency | Maxxim for Partners',
    description:
      'Agencies and consultants keep the client relationship while Maxxim carries production: the full 3D output system, delivered under your standard and your sign-off.',
    path: '/for-partners/',
    ogImage: '/images/partner-table.jpg',
    body,
    extraScripts: `<script src="${forms.turnstileSrc}" async defer></script>\n<script src="${forms.embedSrc}" defer></script>`,
  }),
}
