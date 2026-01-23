import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import clsx from 'clsx'
import type { ReactNode } from 'react'

export interface TabItem {
  id: string
  label: string
  content: ReactNode
}

export interface TabsProps {
  items: TabItem[]
  activeId: string
  onChange: (id: string) => void
}

export function Tabs({ items, activeId, onChange }: TabsProps) {
  const reduceMotion = useReducedMotion()
  const active = items.find((item) => item.id === activeId) ?? items[0]

  return (
    <div>
      <div
        role="tablist"
        className="flex flex-wrap items-center gap-3 rounded-full border border-slate-200 bg-slate-100 p-2 dark:border-white/10 dark:bg-white/5"
      >
        {items.map((item) => {
          const isActive = item.id === activeId
          return (
            <button
              key={item.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(item.id)}
              className={clsx(
                'rounded-full px-4 py-2 text-sm font-semibold transition',
                isActive
                  ? 'bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-slate-950'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              )}
            >
              {item.label}
            </button>
          )
        })}
      </div>
      <div className="mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -12 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
          >
            {active.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
