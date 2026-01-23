import React from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import clsx from 'clsx'

export interface AccordionItem {
  id: string
  question: string
  answer: string
}

export interface AccordionProps {
  items: AccordionItem[]
}

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = React.useState(items[0]?.id)
  const reduceMotion = useReducedMotion()

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = item.id === openId
        const panelId = `${item.id}-panel`
        return (
          <div
            key={item.id}
            className="rounded-2xl border border-slate-200 bg-white/80 p-5 dark:border-white/10 dark:bg-white/5"
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? '' : item.id)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="text-base font-semibold text-slate-900 dark:text-white">{item.question}</span>
              <span
                className={clsx(
                  'text-sm transition',
                  isOpen ? 'text-cyan-600 dark:text-cyan-300' : 'text-slate-400'
                )}
              >
                {isOpen ? '-' : '+'}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  initial={{ opacity: 0, scaleY: reduceMotion ? 1 : 0.9 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  exit={{ opacity: 0, scaleY: reduceMotion ? 1 : 0.9 }}
                  transition={{ duration: reduceMotion ? 0 : 0.2 }}
                  style={{ transformOrigin: 'top' }}
                  className="overflow-hidden pt-3 text-sm text-slate-600 dark:text-slate-300"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
