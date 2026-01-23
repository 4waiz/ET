import { motion, useReducedMotion } from 'framer-motion'

export function ScrollIndicator() {
  const reduceMotion = useReducedMotion()
  return (
    <div className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
      <span>Scroll</span>
      <div className="flex h-10 w-6 justify-center rounded-full border border-slate-300 dark:border-white/20">
        <motion.span
          animate={reduceMotion ? { opacity: 0.6 } : { y: [4, 16, 4], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="mt-1 h-2 w-2 rounded-full bg-cyan-500 dark:bg-cyan-300"
        />
      </div>
    </div>
  )
}
