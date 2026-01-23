import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

export function BackgroundGrid() {
  const { scrollYProgress } = useScroll()
  const reduceMotion = useReducedMotion()
  const y = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 160])

  return (
    <motion.div
      style={{ y }}
      className="pointer-events-none absolute inset-0 opacity-20 dark:opacity-40"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-grid-lines [background-size:80px_80px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/20 via-slate-50/80 to-slate-50 dark:from-slate-950/20 dark:via-slate-950/80 dark:to-slate-950" />
    </motion.div>
  )
}
