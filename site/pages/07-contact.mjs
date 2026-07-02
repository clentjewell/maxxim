import { page, heroFull } from '../lib/html.mjs'
import { site, cta } from '../data/site.mjs'

const body = `
${heroFull({
  media: { img: '/images/partner-table.jpg' },
  title: 'Talk to a real person.',
  lede: 'No portals, no phone trees, no chatbots standing in for people. You will get a person.',
  contentMax: 720,
})}

<section class="section section--mist">
  <div class="wrap">
    <div class="grid-2">
      <div class="card stack reveal">
        <h2 class="h2">Email us</h2>
        <p>The quickest way to reach a founder. We read everything ourselves and reply personally.</p>
        <p><a href="mailto:${site.email}" style="font-weight:600;font-size:1.1rem;text-decoration:none">${site.email}</a></p>
      </div>
      <div class="card stack reveal">
        <h2 class="h2">Ready to see the method work?</h2>
        <p>If you would rather start than talk, tell us about your business. A partner reviews it personally and we open Discover.</p>
        <p><a class="btn btn-primary" href="${cta.primary.href}">${cta.primary.label}</a></p>
      </div>
    </div>
  </div>
</section>
`

export default {
  path: '/contact/',
  priority: 0.6,
  html: page({
    title: 'Contact Maxxim, talk to a real human',
    description:
      'Email a founder directly at hello@maxxim.ai, or tell us about your business and a partner will review it personally. No portals, no phone trees.',
    path: '/contact/',
    body,
  }),
}
