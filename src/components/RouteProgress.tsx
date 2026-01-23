import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

export function RouteProgress({ routeKey }: { routeKey: string }) {
  const reduceMotion = useReducedMotion()

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-50 h-1 w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={routeKey}
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1, opacity: 0 }}
          transition={{
            scaleX: { duration: reduceMotion ? 0 : 0.6, ease: 'easeOut' },
            opacity: { delay: reduceMotion ? 0 : 0.6, duration: reduceMotion ? 0 : 0.3 },
          }}
          className="h-full origin-left bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-500"
        />
      </AnimatePresence>
    </div>
  )
}

