import clsx from 'clsx'
import type { ReactNode } from 'react'

export interface BadgeProps {
  children: ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:border-white/20 dark:bg-white/5 dark:text-cyan-100/80',
        className
      )}
    >
      {children}
    </span>
  )
}
