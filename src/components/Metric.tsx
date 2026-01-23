import { animate, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export function Metric({
  label,
  value,
  suffix = '',
}: {
  label: string
  value: number
  suffix?: string
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: '-20% 0px' })
  const [count, setCount] = useState(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!isInView) return
    if (reduceMotion) {
      setCount(value)
      return
    }
    const controls = animate(0, value, {
      duration: 1.2,
      onUpdate: (latest) => setCount(Math.round(latest)),
    })
    return () => controls.stop()
  }, [isInView, value, reduceMotion])

  return (
    <div ref={ref} className="rounded-2xl border border-slate-200 bg-white/80 p-6 dark:border-white/10 dark:bg-white/5">
      <p className="text-3xl font-semibold text-slate-900 dark:text-white">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{label}</p>
    </div>
  )
}
