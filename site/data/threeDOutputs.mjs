/**
 * The 3D Process output library. Single source of truth for every page that
 * renders the library (home preview, /3d-process, /how-it-works, /for-partners).
 *
 * Architecture per the 2026 site brief, confirmed and expanded against the
 * actual generated outputs in memory/generated/ (CP1 / CP2 / CP3 gate naming
 * comes from those documents). Admin scrape was not possible (Cloudflare
 * Access); see docs/source-scrapes/maxxim-admin.md.
 */

export const phases = [
  {
    key: 'discover',
    name: 'Discover',
    lead: 'Diagnosis',
    summary:
      'We diagnose the market, customer, offer and current constraints so the strategy is grounded in evidence.',
    checkpoint: {
      code: 'CP1',
      name: 'Discovery Summary',
      description:
        'You review the diagnosis, the priority problems and the recommended moves. Nothing proceeds until you approve it.',
    },
    groups: [
      {
        name: 'Audience and market',
        outputs: [
          'Audience Teardown',
          'Customer Segments',
          'Customer Pain Points',
          'Buying Triggers and Barriers',
          'Jobs To Be Done',
        ],
      },
      {
        name: 'Category and competitors',
        outputs: [
          'Competitor Analysis',
          'Category Positioning',
          'Market Gaps',
          'Differentiation Opportunities',
        ],
      },
      {
        name: 'Offer and commercial diagnosis',
        outputs: [
          'Offer Worksheet',
          'Product and Service Review',
          'Pricing and Packaging Notes',
          'Sales Process Review',
          'Funnel Review',
        ],
      },
      {
        name: 'Discovery output',
        outputs: [
          'Success Definition',
          'Objectives and Key Results',
          'Discovery Summary',
          'Priority Problems To Solve',
          'Recommended Next Moves',
        ],
      },
    ],
  },
  {
    key: 'design',
    name: 'Design',
    lead: 'Strategy',
    summary:
      'We turn the discovery into strategy, messaging, brand direction, plans and briefs that can be built from.',
    checkpoint: {
      code: 'CP2',
      name: 'Strategy Summary',
      description:
        'You review the strategy, the messaging and every brief before anything is produced. Approved direction becomes the build spec.',
    },
    groups: [
      {
        name: 'Business and growth strategy',
        outputs: [
          'Business Plan',
          'Strategic Priorities',
          'Growth Roadmap',
          'Measurement Plan',
        ],
      },
      {
        name: 'Customer and journey strategy',
        outputs: [
          'Customer Profile',
          'Customer Journey',
          'Messaging by Stage',
          'Conversion Pathway',
        ],
      },
      {
        name: 'Brand and messaging',
        outputs: [
          'Brand Strategy',
          'Positioning',
          'Messaging and Offer Architecture',
          'Brand Guidelines',
          'Copy Deck',
          'Logo Brief',
        ],
      },
      {
        name: 'Website and digital strategy',
        outputs: [
          'Website Strategy',
          'Website Brief',
          'Sitemap',
          'Page Strategy',
          'SEO Strategy',
        ],
      },
      {
        name: 'Sales and marketing plan',
        note: 'One parent plan, with sub-plans below.',
        outputs: [
          'Marketing Plan',
          'Social Strategy',
          'Content Strategy',
          'In-Market Activation Plan',
          'Paid Media Plan',
          'EDM Plan',
          'CRM Plan',
          'PR Plan',
          'Events Plan',
          'Partnership and Referral Plan',
          'Traditional Media Plan',
          'Campaign Calendar',
        ],
      },
      {
        name: 'Briefing documents',
        outputs: [
          'Design Brief',
          'Website Brief',
          'Photo and Video Brief',
          'SEO Brief',
          'Paid Media Brief',
          'EDM Brief',
          'CRM Brief',
          'PR Brief',
          'Events Brief',
        ],
      },
    ],
  },
  {
    key: 'deploy',
    name: 'Deploy',
    lead: 'Delivery',
    summary:
      'We launch the approved work, manage the activity, report on performance and improve what is working.',
    checkpoint: {
      code: 'CP3',
      name: 'IMC Summary',
      description:
        'You approve the integrated launch plan. From here the work goes live, gets measured and gets better.',
    },
    groups: [
      {
        name: 'Production and delivery',
        outputs: [
          'Website Build and Updates',
          'Landing Pages',
          'Creative Assets',
          'Social Assets',
          'Video Assets',
          'Email Templates',
          'Sales Collateral',
          'Forms and Automations',
          'Tracking Setup',
        ],
      },
      {
        name: 'In-market activation',
        outputs: [
          'Campaign Launch',
          'Social Content Rollout',
          'Paid Media Launch',
          'EDM Deployment',
          'CRM Workflow Deployment',
          'PR Outreach',
          'Events Activation',
          'Partnership Outreach',
          'Traditional Media Rollout',
        ],
      },
      {
        name: 'Reporting and optimisation',
        outputs: [
          'Reporting Dashboard',
          'Monthly Report',
          'Campaign Performance Review',
          'Lead Quality Review',
          'SEO Performance Review',
          'Paid Media Performance Review',
          'CRM and EDM Performance Review',
          'Recommendations and Next Actions',
        ],
      },
      {
        name: 'Deploy output',
        outputs: [
          'Live Asset Links',
          'Reporting Pack',
          'Optimisation Backlog',
          'Next Sprint Priorities',
          'Case Study and Evidence Pack',
        ],
      },
    ],
  },
]

/** The optimisation loop after Deploy. Expressed plainly per brand guidelines
 *  (the guidelines do not name a fourth "Deepen" phase, so we describe the
 *  loop rather than brand it). */
export const loop = {
  name: 'The loop',
  summary:
    'Once the system is live, Deploy feeds back into Discover. Performance, client intelligence and proof sharpen the next cycle, so the strategy, website, content, campaigns and CRM keep getting better instead of going stale.',
}

export function countOutputs(phase) {
  return phase.groups.reduce((n, g) => n + g.outputs.length, 0)
}

export function totalOutputs() {
  return phases.reduce((n, p) => n + countOutputs(p), 0)
}
