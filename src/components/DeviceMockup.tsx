import { motion, MotionValue, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

const codeLines = [
  '> etiva workflow trigger --name incident-routing',
  '✓ Workflow triggered successfully',
  '> Processing 3 policy checkpoints...',
  '✓ Checkpoint 1: Auth verified',
  '✓ Checkpoint 2: Rate limit OK',
  '✓ Checkpoint 3: Compliance passed',
  '> Routing to on-call: @ops-team',
  '✓ Alert dispatched in 42ms',
]

const metrics = [
  { label: 'Uptime', value: '99.98%', color: 'text-emerald-500' },
  { label: 'Latency', value: '42ms', color: 'text-cyan-500' },
  { label: 'Active', value: '847', color: 'text-fuchsia-500' },
]

export function DeviceMockup({
  y,
  className,
}: {
  y?: MotionValue<number> | number
  className?: string
}) {
  const reduceMotion = useReducedMotion()
  const [visibleLines, setVisibleLines] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)

  useEffect(() => {
    if (reduceMotion) {
      setVisibleLines(codeLines.length)
      return
    }

    const lineInterval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= codeLines.length) {
          setTimeout(() => {
            setVisibleLines(0)
            setCurrentChar(0)
          }, 2000)
          return prev
        }
        return prev + 1
      })
    }, 800)

    return () => clearInterval(lineInterval)
  }, [reduceMotion])

  useEffect(() => {
    if (reduceMotion) return
    const charInterval = setInterval(() => {
      setCurrentChar((prev) => prev + 1)
    }, 30)
    return () => clearInterval(charInterval)
  }, [visibleLines, reduceMotion])

  return (
    <motion.div
      style={y ? { y } : undefined}
      className={clsx(
        'relative mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-100 via-white to-slate-50 p-5 shadow-xl dark:border-white/15 dark:from-white/10 dark:via-white/5 dark:to-transparent dark:shadow-glow',
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-200">
          Etiva Console
        </span>
        <div className="flex items-center gap-2">
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-2 w-2 rounded-full bg-emerald-500"
          />
          <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[10px] text-slate-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-300">
            Live
          </span>
        </div>
      </div>

      {/* Terminal */}
      <div className="mt-4 h-28 overflow-hidden rounded-xl bg-slate-900 p-3 font-mono text-[10px] leading-relaxed dark:bg-black/60">
        {codeLines.slice(0, visibleLines).map((line, i) => {
          const isLastLine = i === visibleLines - 1
          const displayText = isLastLine && !reduceMotion
            ? line.slice(0, currentChar)
            : line
          const isSuccess = line.startsWith('✓')
          const isCommand = line.startsWith('>')

          return (
            <div key={i} className="flex">
              <span
                className={clsx(
                  isSuccess && 'text-emerald-400',
                  isCommand && 'text-cyan-400',
                  !isSuccess && !isCommand && 'text-slate-400'
                )}
              >
                {displayText}
              </span>
              {isLastLine && !reduceMotion && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="ml-0.5 inline-block h-3 w-1.5 bg-cyan-400"
                />
              )}
            </div>
          )
        })}
      </div>

      {/* Metrics */}
      <div className="mt-3 grid grid-cols-3 gap-2">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-slate-200 bg-white/80 p-2.5 text-center dark:border-white/10 dark:bg-white/5"
          >
            <div className={clsx('text-sm font-bold', metric.color)}>
              {metric.value}
            </div>
            <div className="text-[9px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {metric.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-3 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
        <motion.div
          className="h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500"
          initial={{ width: '0%' }}
          animate={{ width: ['0%', '100%', '0%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Glow effect */}
      <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-cyan-400/30 blur-2xl dark:bg-cyan-400/20" />
    </motion.div>
  )
}
