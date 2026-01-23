import clsx from 'clsx'

export interface FormFieldProps {
  label: string
  name: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  type?: string
  error?: string
  as?: 'input' | 'textarea'
  rows?: number
}

export function FormField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  error,
  as = 'input',
  rows = 4,
}: FormFieldProps) {
  const isTextarea = as === 'textarea'
  const radiusClass = isTextarea ? 'rounded-2xl' : 'rounded-full'

  return (
    <label className="block text-sm text-slate-600 dark:text-slate-300">
      <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{label}</span>
      <div className="relative">
        {isTextarea ? (
          <textarea
            name={name}
            rows={rows}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder={placeholder}
            className={clsx(
              'peer w-full resize-none border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none dark:border-white/10 dark:bg-slate-950/50 dark:text-white dark:placeholder:text-slate-500',
              radiusClass,
              error && 'border-rose-500/60'
            )}
          />
        ) : (
          <input
            name={name}
            type={type}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder={placeholder}
            className={clsx(
              'peer w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none dark:border-white/10 dark:bg-slate-950/50 dark:text-white dark:placeholder:text-slate-500',
              radiusClass,
              error && 'border-rose-500/60'
            )}
          />
        )}
        <span
          className={clsx(
            'pointer-events-none absolute inset-0 ring-2 ring-cyan-400/40 opacity-0 transition-opacity duration-200 peer-focus:opacity-100',
            radiusClass
          )}
        />
      </div>
      {error && <span className="mt-2 block text-xs text-rose-500 dark:text-rose-400">{error}</span>}
    </label>
  )
}
