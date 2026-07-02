import { page } from '../lib/html.mjs'
import { forms } from '../data/site.mjs'

const outcomes = [
  'Website',
  'Strategy',
  'Brand messaging',
  'Lead generation',
  'Content system',
  'CRM and automation',
  'Partner delivery support',
  'Not sure yet',
]

const body = `
<section class="hero-full" style="align-items:start">
  <img class="hero-full-bg" src="/images/operator-desk.jpg" alt="" width="2528" height="1696" fetchpriority="high">
  <div class="hero-full-scrim" aria-hidden="true"></div>
  <div class="wrap hero-full-content grid-split" style="align-items:start;position:relative">
    <div class="stack-lg">
      <h1 class="display" style="color:var(--white)">We'll show you what the 3D Process produces.</h1>
      <p class="lede" style="color:rgba(255,255,255,.88)">This is the start of Discover, not a contact form. The more you share, the sharper our first look will be.</p>
      <div class="stack" style="margin-top:34px">
        <h2 class="h3" style="color:var(--white)">What happens next</h2>
        <ol style="list-style:none;margin:0;padding:0;display:grid;gap:16px;max-width:56ch">
          <li style="display:flex;gap:14px">
            <span aria-hidden="true" style="flex:none;width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,.14);color:var(--blue-tint);font-weight:700;display:grid;place-items:center">1</span>
            <p style="color:rgba(255,255,255,.82)"><strong style="color:var(--white)">A human reviews it.</strong> A real partner reads what you have sent. Not a bot, not an auto-reply.</p>
          </li>
          <li style="display:flex;gap:14px">
            <span aria-hidden="true" style="flex:none;width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,.14);color:var(--blue-tint);font-weight:700;display:grid;place-items:center">2</span>
            <p style="color:rgba(255,255,255,.82)"><strong style="color:var(--white)">We open Discover.</strong> Your answers become the first inputs to the diagnosis, the first phase of the 3D Process.</p>
          </li>
          <li style="display:flex;gap:14px">
            <span aria-hidden="true" style="flex:none;width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,.14);color:var(--blue-tint);font-weight:700;display:grid;place-items:center">3</span>
            <p style="color:rgba(255,255,255,.82)"><strong style="color:var(--white)">You see real work.</strong> We return CP1 as finished work for you to approve, before you commit to anything.</p>
          </li>
        </ol>
      </div>
      <div class="gate" style="margin-top:30px;background:rgba(255,255,255,.09);border-left-color:var(--blue-tint)">
        <span class="gate-code" aria-hidden="true" style="color:var(--blue-tint)">&#10003;</span>
        <div>
          <strong style="color:var(--white)">&ldquo;I've checked this; it will work.&rdquo;</strong>
          <p style="color:rgba(255,255,255,.82)">You see real work before you commit. You own everything we produce, from day one. No lock-in, no hard sell, no jargon.</p>
        </div>
      </div>
    </div>

    <div class="card" style="padding:clamp(24px,3vw,40px);box-shadow:var(--shadow-card)">
      <h2 class="h2">Start here</h2>
      <p style="margin-top:6px;color:var(--caption-grey)">A few minutes now saves a discovery meeting later.</p>
      <form data-maxxim-form data-site="${forms.siteKey}" data-success="${forms.startSuccess}" class="maxxim-form mt-md" novalidate>
        <div class="form-grid">
          <p class="field">
            <label for="mx-name">Name <span aria-hidden="true">*</span></label>
            <input id="mx-name" name="name" type="text" autocomplete="name" required>
          </p>
          <p class="field">
            <label for="mx-email">Email <span aria-hidden="true">*</span></label>
            <input id="mx-email" name="email" type="email" autocomplete="email" required>
          </p>
          <p class="field">
            <label for="mx-business">Business name <span aria-hidden="true">*</span></label>
            <input id="mx-business" name="business" type="text" autocomplete="organization" required>
          </p>
          <p class="field">
            <label for="mx-website">Website</label>
            <input id="mx-website" name="website" type="url" autocomplete="url" placeholder="https://">
          </p>
          <p class="field full">
            <label for="mx-role">You are enquiring as</label>
            <select id="mx-role" name="role">
              <option>Business owner or founder</option>
              <option>Operator or manager</option>
              <option>Partner, agency or consultant</option>
              <option>Other</option>
            </select>
          </p>
          <p class="field full">
            <label for="mx-message">What are you trying to improve? <span aria-hidden="true">*</span></label>
            <textarea id="mx-message" name="message" rows="4" required placeholder="Tell us a little about your business and what you're trying to fix."></textarea>
          </p>
          <p class="field full">
            <label for="mx-tried">What have you already tried?</label>
            <textarea id="mx-tried" name="already_tried" rows="2"></textarea>
          </p>
          <fieldset class="field full">
            <legend style="font-weight:600;font-size:.94rem;padding:0;margin-bottom:8px">Which outcome do you need first?</legend>
            <div class="radio-row">
              ${outcomes
                .map(
                  (o, i) =>
                    `<label><input type="radio" name="outcome_first" value="${o}"${i === outcomes.length - 1 ? ' checked' : ''}>${o}</label>`
                )
                .join('')}
            </div>
          </fieldset>
          <fieldset class="field full">
            <legend style="font-weight:600;font-size:.94rem;padding:0;margin-bottom:8px">Timing</legend>
            <div class="radio-row">
              <label><input type="radio" name="readiness" value="Ready now">Ready to move now</label>
              <label><input type="radio" name="readiness" value="Soon">Soon</label>
              <label><input type="radio" name="readiness" value="Exploring" checked>Just exploring</label>
            </div>
          </fieldset>
        </div>
        <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden">
        <div class="cf-turnstile" data-sitekey="${forms.turnstileSiteKey}" style="margin-top:18px"></div>
        <p style="margin-top:18px"><button type="submit" class="btn btn-primary" style="width:100%">Show me what you'd produce</button></p>
        <p data-maxxim-status role="status" aria-live="polite" class="maxxim-status form-status"></p>
      </form>
      <p style="margin-top:16px;padding-top:16px;border-top:1px solid var(--border-soft);font-size:.92rem;color:var(--caption-grey)">Prefer to talk first? <a href="/contact/" style="font-weight:600">Contact a founder</a></p>
    </div>
  </div>
</section>
`

export default {
  path: '/start/',
  priority: 0.9,
  html: page({
    title: 'Tell us about your business | Maxxim',
    description:
      'Start the Discover phase. A human partner reviews your enquiry personally and returns real work at CP1 for you to approve. No retainer to sign, no tools to learn.',
    path: '/start/',
    body,
    extraScripts: `<script src="${forms.turnstileSrc}" async defer></script>\n<script src="${forms.embedSrc}" defer></script>`,
  }),
}
