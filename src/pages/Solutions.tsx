import { FiZap, FiShield, FiCode, FiCpu, FiBarChart2 } from 'react-icons/fi'
import { Badge } from '../components/Badge'
import { ButtonLink } from '../components/Button'
import { Card } from '../components/Card'
import { Section } from '../components/Section'

// Stock images from Unsplash
const stockImages = {
  teamCollab: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
  startup: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80',
  enterprise: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80',
  developer: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80',
  operations: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80',
  analytics: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
}

const solutions = [
  {
    title: 'Startups',
    description: 'Launch automation fast with prebuilt playbooks and simple governance.',
    icon: FiZap,
    image: stockImages.startup,
  },
  {
    title: 'Enterprise',
    description: 'Scale across departments with advanced policy controls and audit trails.',
    icon: FiShield,
    image: stockImages.enterprise,
  },
  {
    title: 'Developers',
    description: 'API-first workflows, webhooks, and SDKs that keep engineering moving.',
    icon: FiCode,
    image: stockImages.developer,
  },
  {
    title: 'Operations',
    description: 'Reduce incident impact with realtime routing and automated runbooks.',
    icon: FiCpu,
    image: stockImages.operations,
  },
  {
    title: 'Analytics',
    description: 'Connect dashboards to action and improve KPI outcomes faster.',
    icon: FiBarChart2,
    image: stockImages.analytics,
  },
]

export default function Solutions() {
  return (
    <div>
      <Section className="container pt-16">
        <Badge>Solutions</Badge>
        <h1 className="mt-5 text-4xl font-semibold text-slate-900 dark:text-white">Built for every scale and team.</h1>
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
          Etiva adapts to how teams operate today while giving you the framework to scale tomorrow.
        </p>
      </Section>

      <Section className="container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => {
            const Icon = solution.icon
            return (
              <Card key={solution.title}>
                <div className="mb-4 h-32 overflow-hidden rounded-xl">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <Icon className="text-2xl text-cyan-600 dark:text-cyan-300" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{solution.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{solution.description}</p>
              </Card>
            )
          })}
        </div>
      </Section>

      <Section className="container pb-8 lg:pb-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Outcomes</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Results teams can measure.</h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Customers see faster incident recovery, higher automation coverage, and clearer executive
              reporting.
            </p>
            <div className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-200">
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                Reduce alert noise by up to 60 percent with signal scoring.
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                Improve MTTR by 3x using automated runbooks.
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                Gain full compliance evidence in days, not weeks.
              </div>
            </div>
            <ButtonLink to="/pricing" size="sm" className="mt-6">
              See pricing
            </ButtonLink>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10">
            <img
              src={stockImages.teamCollab}
              alt="Cross-functional team collaborating"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>
    </div>
  )
}
