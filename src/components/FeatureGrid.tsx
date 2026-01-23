import { motion } from 'framer-motion'
import type { Feature } from '../data/features'

const cardVariants = {
  initial: { y: 12, opacity: 0 },
  reveal: { y: 0, opacity: 1 },
  hover: { y: -4 },
}

const iconVariants = {
  initial: { rotate: 0, scale: 1 },
  hover: { rotate: 6, scale: 1.08 },
}

export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => {
        const Icon = feature.icon
        return (
          <motion.div
            key={feature.title}
            variants={cardVariants}
            initial="initial"
            whileInView="reveal"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-6 dark:border-white/10 dark:bg-white/5"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-transparent to-fuchsia-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-cyan-500/20 dark:to-fuchsia-500/20" />
            <motion.div
              variants={iconVariants}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 dark:bg-white/10 dark:text-cyan-200"
            >
              <Icon className="text-xl" aria-hidden="true" />
            </motion.div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{feature.description}</p>
          </motion.div>
        )
      })}
    </div>
  )
}
