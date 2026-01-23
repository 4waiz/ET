import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

export function ParallaxBlobs() {
  const { scrollYProgress } = useScroll()
  const reduceMotion = useReducedMotion()
  const slow = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -120])
  const fast = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 180])

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 h-[80vh] overflow-hidden" aria-hidden="true">
      <motion.div
        style={{ y: slow }}
        className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-[80px]"
      />
      <motion.div
        style={{ y: fast }}
        className="absolute right-0 top-10 h-96 w-96 translate-x-1/3 rounded-full bg-fuchsia-500/20 blur-[110px]"
      />
    </div>
  )
}

