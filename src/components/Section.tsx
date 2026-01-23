import { motion, useReducedMotion } from 'framer-motion'
import clsx from 'clsx'
import type { ReactNode } from 'react'

export interface SectionProps {
  id?: string
  className?: string
  children: ReactNode
  reveal?: boolean
  delay?: number
}

export function Section({ id, className, children, reveal = true, delay = 0 }: SectionProps) {
  const reduceMotion = useReducedMotion()
  const motionProps = reveal
    ? {
        initial: { opacity: 0, y: reduceMotion ? 0 : 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: reduceMotion ? 0 : 0.4, delay },
      }
    : {}

  return (
    <motion.section
      id={id}
      className={clsx('py-12 lg:py-16', className)}
      {...motionProps}
    >
      {children}
    </motion.section>
  )
}

