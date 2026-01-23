import { useState } from 'react'
import type { AccordionItem } from '../components/Accordion'
import { Badge } from '../components/Badge'
import { PricingCard } from '../components/PricingCard'
import { Section } from '../components/Section'
import { Toggle } from '../components/Toggle'
import { Accordion } from '../components/Accordion'
import { pricingTiers } from '../data/pricing'

const faqs: AccordionItem[] = [
  {
    id: 'faq-1',
    question: 'Can we start with a pilot?',
    answer:
      'Yes. Most teams start with a single workflow and expand after validating reliability and security.',
  },
  {
    id: 'faq-2',
    question: 'How does annual billing work?',
    answer:
      'Annual plans lock in pricing for 12 months and include dedicated onboarding sessions.',
  },
  {
    id: 'faq-3',
    question: 'Is Etiva compliant?',
    answer:
      'Etiva provides audit-ready logs, compliance templates, and policy controls aligned to major frameworks.',
  },
  {
    id: 'faq-4',
    question: 'Do you offer custom SLAs?',
    answer:
      'Enterprise plans include tailored SLAs, private networking options, and 24/7 support.',
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)
  const billing = annual ? 'annual' : 'monthly'

  return (
    <div>
      <Section className="container pt-16">
        <Badge>Pricing</Badge>
        <h1 className="mt-5 text-4xl font-semibold text-slate-900 dark:text-white">Predictable pricing as you scale.</h1>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Start fast, then grow with advanced governance, automation, and observability.
        </p>
        <Toggle enabled={annual} onChange={setAnnual} className="mt-8" />
      </Section>

      <Section className="container">
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} billing={billing} />
          ))}
        </div>
      </Section>

      <Section className="container pb-8 lg:pb-12">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Answers before you commit.</h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Everything you need to know about onboarding, security, and billing.
            </p>
          </div>
          <Accordion items={faqs} />
        </div>
      </Section>
    </div>
  )
}
