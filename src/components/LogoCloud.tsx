import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { LogoItem } from '../data/logos'

export function LogoCloud({ logos }: { logos: LogoItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const activeLogo = activeIndex !== null ? logos[activeIndex] : null

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {logos.map((logo, index) => (
          <motion.div
            key={logo.name}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            whileHover={{ scale: 1.05, y: -2 }}
            className={`relative flex h-12 cursor-pointer items-center justify-center rounded-xl border px-4 text-[10px] font-semibold uppercase tracking-[0.1em] transition-all duration-200 ${
              activeIndex === index
                ? 'border-cyan-400 bg-cyan-500/10 text-cyan-600 shadow-lg shadow-cyan-500/20 dark:border-cyan-400/50 dark:bg-cyan-500/20 dark:text-cyan-300'
                : 'border-slate-200 bg-white text-slate-700 hover:border-cyan-300 dark:border-white/10 dark:bg-white/5 dark:text-slate-300'
            }`}
          >
            {logo.name}
          </motion.div>
        ))}
      </div>

      <div className="relative min-h-[72px]">
        <AnimatePresence mode="wait">
          {activeLogo && (
            <motion.div
              key={activeLogo.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="rounded-xl border border-slate-200 bg-gradient-to-r from-cyan-500/5 via-white to-fuchsia-500/5 px-4 py-3 dark:border-white/10 dark:from-cyan-500/10 dark:via-slate-900/50 dark:to-fuchsia-500/10"
            >
              <p className="text-sm italic text-slate-600 dark:text-slate-300">
                "{activeLogo.review}"
              </p>
              <div className="mt-1.5 flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                <span className="text-xs font-semibold text-slate-900 dark:text-white">
                  {activeLogo.author}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {activeLogo.role}, {activeLogo.name}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!activeLogo && (
          <div className="flex min-h-[72px] items-center justify-center">
            <p className="text-xs text-slate-400 dark:text-slate-500">
              Hover over a company to see their review
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
