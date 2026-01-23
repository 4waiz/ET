import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { FiCopy, FiCheck } from 'react-icons/fi'
import { useCopy } from '../hooks/useCopy'

const apiKey = 'etv_live_8b2c9f07b1a3d2e9f1b0'

export function ApiSnippet() {
  const { copied, copy } = useCopy()
  const reduceMotion = useReducedMotion()

  return (
    <div className="relative rounded-2xl border border-slate-200 bg-slate-100 p-4 dark:border-white/10 dark:bg-slate-950/60">
      <div className="flex items-center justify-between gap-4">
        <code className="min-w-0 truncate font-mono text-xs text-slate-700 dark:text-slate-200">{apiKey}</code>
        <button
          type="button"
          onClick={() => copy(apiKey)}
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-cyan-400 hover:text-cyan-600 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-cyan-400/50"
        >
          {copied ? <FiCheck className="h-3.5 w-3.5" /> : <FiCopy className="h-3.5 w-3.5" />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
      <AnimatePresence>
        {copied && (
          <motion.span
            initial={{ opacity: 0, y: reduceMotion ? 0 : 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -6 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            className="pointer-events-none absolute right-4 top-2 rounded-full bg-cyan-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:bg-cyan-400/20 dark:text-cyan-100"
          >
            Copied!
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  )
}
