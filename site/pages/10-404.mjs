import { page } from '../lib/html.mjs'
import { cta } from '../data/site.mjs'

const body = `
<section class="hero wrap">
  <div class="stack-lg" style="max-width:640px">
    <p class="kicker">404</p>
    <h1 class="display">That page isn't here.</h1>
    <p class="lede">The link may be old, or the page may have moved. Everything current is one click away.</p>
    <div class="hero-ctas">
      <a class="btn btn-primary" href="/">Back to the homepage</a>
      <a class="btn btn-secondary" href="${cta.secondary.href}">${cta.secondary.label}</a>
    </div>
  </div>
</section>
`

export default {
  path: '/404',
  html: page({
    title: 'Page not found | Maxxim',
    description: 'The page you were looking for is not here.',
    path: '/404',
    body,
  }),
}
