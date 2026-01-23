import teamCollab from '../assets/stock/team-collab.jpg'
import serverRack from '../assets/stock/server-rack.jpg'
import codeScreen1 from '../assets/stock/code-screen-1.jpg'
import codeScreen2 from '../assets/stock/code-screen-2.jpg'
import gradientTeal from '../assets/stock/gradient-teal.jpg'

export interface BlogPost {
  id: string
  slug: string
  title: string
  date: string
  summary: string
  tags: string[]
  body: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 'post-01',
    slug: 'signal-driven-architecture',
    title: 'Building signal-driven architecture for autonomous ops',
    date: '2025-11-04',
    summary:
      'How event-first systems help operations teams detect, route, and remediate incidents before customers notice.',
    tags: ['Operations', 'Architecture', 'Automation'],
    image: codeScreen1,
    body: `## Why signals matter\nModern stacks generate thousands of signals per minute. Treating them as first-class data makes every workflow smarter.\n\n## Three layers to map\n- Capture: normalize raw telemetry into a unified stream.\n- Decide: evaluate policy + ML indicators together.\n- Act: trigger runbooks with guardrails.\n\n## Key takeaway\nSignal-driven systems reduce noisy alerts and give every team a shared operational language.`,
  },
  {
    id: 'post-02',
    slug: 'secure-by-default-platforms',
    title: 'Secure-by-default platforms: shifting left without slowing down',
    date: '2025-10-12',
    summary:
      'Security should feel like a product feature, not a blocker. Here is how Etiva teams build guardrails into every deployment.',
    tags: ['Security', 'Compliance'],
    image: serverRack,
    body: `## The mindset shift\nSecurity is most effective when it is invisible and automatic.\n\n## What works\n- Policy-as-code tied to every environment.\n- Continuous posture checks instead of quarterly audits.\n- Context-aware access that adapts to risk.\n\n## Result\nTeams deploy faster because reviews are predictable and automated.`,
  },
  {
    id: 'post-03',
    slug: 'from-dashboards-to-decisions',
    title: 'From dashboards to decisions: analytics that move with you',
    date: '2025-09-20',
    summary:
      'Dashboards are only useful when they trigger action. This guide covers how to tie analytics to automation.',
    tags: ['Analytics', 'Product'],
    image: codeScreen2,
    body: `## Close the loop\nInsights are the midpoint, not the finish line.\n\n## Practices we recommend\n- Align KPIs with automation triggers.\n- Surface the smallest possible insight to act.\n- Make experiments reproducible across teams.\n\n## The impact\nOperators make confident decisions in minutes, not days.`,
  },
  {
    id: 'post-04',
    slug: 'designing-for-multi-cloud',
    title: 'Designing for multi-cloud reliability',
    date: '2025-08-16',
    summary:
      'A practical look at balancing latency, cost, and resiliency across multiple cloud providers.',
    tags: ['Infrastructure', 'Reliability'],
    image: gradientTeal,
    body: `## Multi-cloud without chaos\nThe key is orchestration with strict policies and predictable routing.\n\n## Build for resilience\n- Define failover patterns per service tier.\n- Measure latency budgets continuously.\n- Validate recovery with monthly drills.\n\n## Final word\nReliability is a system, not a feature flag.`,
  },
  {
    id: 'post-05',
    slug: 'api-first-collaboration',
    title: 'API-first collaboration across product and ops teams',
    date: '2025-07-22',
    summary:
      'Why API-first governance unlocks collaboration between platform, security, and analytics teams.',
    tags: ['API', 'Teams'],
    image: teamCollab,
    body: `## APIs as contracts\nShared APIs create a source of truth for everyone building on the platform.\n\n## What to standardize\n- Identity + access policies.\n- Audit events and data lineage.\n- Workflow state changes.\n\n## Teams move faster\nClear contracts reduce rework and simplify compliance.`,
  },
  {
    id: 'post-06',
    slug: 'automation-confidence-score',
    title: 'Introducing the automation confidence score',
    date: '2025-06-10',
    summary:
      'Measure how reliable your automation systems are with a simple, unified score.',
    tags: ['Automation', 'Metrics'],
    image: serverRack,
    body: `## The score explained\nWe combine signal quality, execution success, and response time into one score.\n\n## What changes\n- Teams can benchmark improvements.\n- Leaders see where risk accumulates.\n- Everyone shares a single operational KPI.\n\n## Next steps\nStart tracking confidence in weekly reviews and iterate fast.`,
  },
]
