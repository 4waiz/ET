import clsx from 'clsx'
import type { PricingTier } from '../data/pricing'
import { Button } from './Button'

export function PricingCard({
  tier,
  billing,
}: {
  tier: PricingTier
  billing: 'monthly' | 'annual'
}) {
  const price = billing === 'annual' ? tier.annual : tier.monthly

  return (
    <div
      className={clsx(
        'relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-8 dark:border-white/10 dark:bg-white/5',
        tier.popular && 'border-cyan-400/40 bg-gradient-to-b from-cyan-50 to-white dark:from-white/10 dark:to-white/5'
      )}
    >
      {tier.popular && (
        <span className="absolute right-6 top-6 rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:bg-cyan-400/20 dark:text-cyan-100">
          Most popular
        </span>
      )}
      <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{tier.name}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{tier.description}</p>
      <div className="mt-6 flex items-end gap-2">
        <span className="text-4xl font-semibold text-slate-900 dark:text-white">{price}</span>
        <span className="text-sm text-slate-500 dark:text-slate-400">/ {billing}</span>
      </div>
      <ul className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-200">
        {tier.highlights.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
            {item}
          </li>
        ))}
      </ul>
      <Button
        variant={tier.popular ? 'primary' : 'secondary'}
        size="lg"
        className="mt-8 w-full justify-center"
      >
        {tier.cta}
      </Button>
    </div>
  )
}
