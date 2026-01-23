export interface PricingTier {
  name: string
  description: string
  monthly: string
  annual: string
  highlights: string[]
  cta: string
  popular?: boolean
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    description: 'For teams validating modern data automation.',
    monthly: '$39',
    annual: '$29',
    highlights: [
      'Up to 5 workflows',
      'Realtime dashboards',
      'Community integrations',
      'Email support',
    ],
    cta: 'Start free',
  },
  {
    name: 'Pro',
    description: 'Scale mission-critical automation with confidence.',
    monthly: '$99',
    annual: '$79',
    highlights: [
      'Unlimited workflows',
      'Advanced policy engine',
      'Custom roles',
      'Priority support',
    ],
    cta: 'Upgrade to Pro',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'Enterprise-grade security and governance.',
    monthly: "Let's talk",
    annual: "Let's talk",
    highlights: [
      'Dedicated environment',
      'SLA + 24/7 support',
      'Private networking',
      'Compliance advisory',
    ],
    cta: 'Contact sales',
  },
]

