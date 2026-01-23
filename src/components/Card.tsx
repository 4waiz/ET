import clsx from 'clsx'
import type { ReactNode } from 'react'

export interface CardProps {
  children: ReactNode
  className?: string
  hoverable?: boolean
}

export function Card({ children, className, hoverable = true }: CardProps) {
  return (
    <div
      className={clsx(
        'group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-6 backdrop-blur transition-colors dark:border-white/10 dark:bg-white/5',
        hoverable && 'transition duration-300 hover:border-slate-300 dark:hover:border-white/20',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-transparent to-fuchsia-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-cyan-500/20 dark:to-fuchsia-500/20" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
