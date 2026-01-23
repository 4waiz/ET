import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'
import clsx from 'clsx'
import type { ReactNode } from 'react'
import type { LinkProps } from 'react-router-dom'
import { Link } from 'react-router-dom'

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-sm',
  lg: 'px-6 py-3.5 text-base',
}

const variantClasses = {
  primary:
    'bg-gradient-to-r from-cyan-400 via-sky-500 to-fuchsia-500 text-white shadow-lg dark:from-cyan-300 dark:via-sky-400 dark:to-fuchsia-400 dark:text-slate-950 dark:shadow-glow',
  secondary:
    'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/15',
  ghost:
    'border border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 dark:border-white/15 dark:text-white dark:hover:border-white/30 dark:hover:bg-transparent',
}

export type ButtonVariant = keyof typeof variantClasses
export type ButtonSize = keyof typeof sizeClasses

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
}

export function buttonStyles({
  variant = 'primary',
  size = 'md',
  className,
}: {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}) {
  return clsx(
    'group relative inline-flex items-center justify-center rounded-full font-semibold tracking-tight transition focus-visible:outline-none',
    'overflow-hidden',
    'transform-gpu transition-transform duration-200',
    sizeClasses[size],
    variantClasses[variant],
    className
  )
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className={buttonStyles({ variant, size, className })}
      {...props}
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 via-sky-400/30 to-fuchsia-400/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  )
}

export interface ButtonLinkProps extends LinkProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: ReactNode
}

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={clsx(
        buttonStyles({ variant, size, className }),
        'hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]'
      )}
      {...props}
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 via-sky-400/30 to-fuchsia-400/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Link>
  )
}
