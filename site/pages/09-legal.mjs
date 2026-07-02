import { page } from '../lib/html.mjs'
import { site } from '../data/site.mjs'

/** Legal copy preserved from the live site (June 2026 working drafts).
 *  Changes made: email de-obfuscated to a plain mailto, and em dashes
 *  normalised to brand punctuation. Flagged for partner review in the
 *  project deliverables; no substantive wording changed. */

const legalShell = (kicker, title, updated, inner) => `
<section class="hero wrap">
  <div class="stack">
    <p class="kicker">${kicker}</p>
    <h1 class="h1" style="font-size:clamp(2rem,4vw,2.6rem)">${title}</h1>
    <p style="color:var(--caption-grey)">Last updated: ${updated}</p>
  </div>
</section>
<section class="section" style="padding-top:0">
  <div class="wrap stack-lg" style="max-width:760px">
    ${inner}
  </div>
</section>
`

const email = `<a href="mailto:${site.email}">${site.email}</a>`

const privacyBody = legalShell(
  'Legal',
  'Privacy Policy',
  'June 2026',
  `
  <div class="card card--mist" role="note">
    <p><strong>A note from Maxxim.</strong> This policy is written to be accurate to how the site works today and to Australian privacy expectations. It is a working draft for the partners (Raef / Paul) to review and finalise with legal advice before launch, particularly the entity details and any obligations under the Privacy Act 1988 (Cth) and the Australian Privacy Principles.</p>
  </div>
  <div class="stack"><h2 class="h2">1. Who we are</h2>
  <p>This website is operated by Maxxim ("Maxxim", "we", "us"). We can be reached at ${email}. We are committed to handling your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.</p></div>
  <div class="stack"><h2 class="h2">2. What we collect</h2>
  <p>When you submit an enquiry through this website, we collect the information you choose to give us:</p>
  <ul><li>Your name;</li><li>Your email address;</li><li>Your business or agency name; and</li><li>The details you include in your message to us.</li></ul>
  <p>We also collect limited technical information automatically (such as anonymised, aggregated analytics about how the site is used) to help us improve it. We do not seek to identify you from this information.</p></div>
  <div class="stack"><h2 class="h2">3. Why we collect it and how we use it</h2>
  <p>We use the information you provide to:</p>
  <ul><li>Respond to your enquiry and have a real person follow up with you;</li><li>Begin the Discover phase of our process where you ask us to;</li><li>Communicate with you about your enquiry or engagement; and</li><li>Improve our website and services.</li></ul>
  <p>We will not use your information for unrelated purposes without your consent.</p></div>
  <div class="stack"><h2 class="h2">4. Where it goes</h2>
  <p>Enquiries submitted through this site are processed by our form provider and routed to a Maxxim inbox and, where applicable, to the customer relationship tool we use to manage enquiries. We do not sell your personal information. We only share it with service providers who help us operate the site and respond to you, and only as needed for that purpose.</p>
  <p>[To finalise before launch: name the specific form provider, hosting provider and CRM destination once nominated by the partners, and confirm whether any data is stored or processed outside Australia.]</p></div>
  <div class="stack"><h2 class="h2">5. How long we keep it</h2>
  <p>We keep enquiry information for as long as we need it to respond to you and manage any resulting engagement, and then for a reasonable period consistent with our legal obligations, after which we delete or de-identify it.</p></div>
  <div class="stack"><h2 class="h2">6. Security</h2>
  <p>We take reasonable steps to protect your information from misuse, interference, loss, and unauthorised access, modification or disclosure, including serving this site over encrypted connections.</p></div>
  <div class="stack"><h2 class="h2">7. Access, correction and complaints</h2>
  <p>You can ask us what personal information we hold about you, ask us to correct it, or ask us to delete it, by emailing ${email}. If you have a concern about how we have handled your information, contact us and we will work to resolve it. You may also contact the Office of the Australian Information Commissioner (OAIC).</p></div>
  <div class="stack"><h2 class="h2">8. Changes to this policy</h2>
  <p>We may update this policy from time to time. The current version is always the one published on this page, with the "last updated" date shown above.</p></div>
`
)

const termsBody = legalShell(
  'Legal',
  'Terms of Use',
  'June 2026',
  `
  <div class="card card--mist" role="note">
    <p><strong>A note from Maxxim.</strong> These terms are a working draft, written to be accurate and appropriate for an Australian business website. They are provided for the partners (Raef / Paul) to review and finalise with legal advice before launch, including the governing-jurisdiction detail and the relationship between these site terms and any separate engagement agreement.</p>
  </div>
  <div class="stack"><h2 class="h2">1. About these terms</h2>
  <p>These terms apply to your use of the Maxxim website at maxxim.ai (and maxxim.com.au). By using the site, you agree to them. If you don't agree, please don't use the site.</p></div>
  <div class="stack"><h2 class="h2">2. Using the site</h2>
  <p>You may use this site to learn about Maxxim and to make an enquiry. You agree not to use it unlawfully, to interfere with its operation, or to attempt to access it in any way other than through the interface we provide.</p></div>
  <div class="stack"><h2 class="h2">3. Enquiries are not a contract</h2>
  <p>Submitting an enquiry through this site starts a conversation. It does not create an engagement or oblige either of us to proceed. Any engagement, including its scope, deliverables, ownership terms and price, is agreed separately and in writing before any work begins.</p></div>
  <div class="stack"><h2 class="h2">4. Ownership of your work</h2>
  <p>Where we do agree to an engagement, our commitment is that you own the deliverables we produce for you, the website source, strategy and assets, as set out in that engagement agreement. Nothing on this site changes or limits that commitment.</p></div>
  <div class="stack"><h2 class="h2">5. Our content</h2>
  <p>The content of this site, text, design, graphics and the 3D methodology as described here, is owned by or licensed to Maxxim and is provided for your information. Please don't reproduce it without our permission.</p></div>
  <div class="stack"><h2 class="h2">6. No warranty on site content</h2>
  <p>We work hard to keep this site accurate and current, but we provide it on an "as is" basis and don't warrant that it will always be available, error-free, or complete. Nothing here is professional advice for your specific situation.</p></div>
  <div class="stack"><h2 class="h2">7. Liability</h2>
  <p>To the extent permitted by law, and subject to any rights you have under the Australian Consumer Law that cannot be excluded, Maxxim is not liable for any loss arising from your use of this site.</p></div>
  <div class="stack"><h2 class="h2">8. Governing law</h2>
  <p>These terms are governed by the laws of Australia. [To finalise before launch: confirm the governing State or Territory and Maxxim's registered legal entity name and ABN.]</p></div>
  <div class="stack"><h2 class="h2">9. Changes</h2>
  <p>We may update these terms from time to time. The current version is always the one published on this page, with the "last updated" date shown above.</p></div>
`
)

export default [
  {
    path: '/privacy/',
    priority: 0.3,
    html: page({
      title: 'Privacy Policy | Maxxim',
      description:
        'How Maxxim collects, uses and protects your personal information, in line with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.',
      path: '/privacy/',
      body: privacyBody,
    }),
  },
  {
    path: '/terms/',
    priority: 0.3,
    html: page({
      title: 'Terms of Use | Maxxim',
      description:
        'The terms that apply to your use of the Maxxim website, including that enquiries are not a contract and that clients own the work we produce for them.',
      path: '/terms/',
      body: termsBody,
    }),
  },
]
