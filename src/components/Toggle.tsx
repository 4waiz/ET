import { motion, useReducedMotion } from 'framer-motion'
import clsx from 'clsx'

export interface ToggleProps {
  enabled: boolean
  onChange: (value: boolean) => void
  labels?: [string, string]
  className?: string
}

export function Toggle({ enabled, onChange, labels = ['Monthly', 'Annual'], className }: ToggleProps) {
  const reduceMotion = useReducedMotion()
  return (
    <div className={clsx('flex items-center gap-4', className)}>
      <span className={clsx('text-sm', !enabled ? 'text-slate-900 dark:text-white' : 'text-slate-400')}>
        {labels[0]}
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={() => onChange(!enabled)}
        className="relative h-8 w-16 rounded-full border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-white/5"
      >
        <motion.span
          animate={{ x: enabled ? 32 : 4 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
          className="absolute top-1 h-6 w-6 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400"
        />
      </button>
      <span className={clsx('text-sm', enabled ? 'text-slate-900 dark:text-white' : 'text-slate-400')}>
        {labels[1]}
      </span>
    </div>
  )
}
