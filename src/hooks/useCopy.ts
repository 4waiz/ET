import { useCallback, useState } from 'react'

export function useCopy(timeout = 1800) {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(
    async (value: string) => {
      try {
        await navigator.clipboard.writeText(value)
        setCopied(true)
        window.setTimeout(() => setCopied(false), timeout)
        return true
      } catch (error) {
        setCopied(false)
        return false
      }
    },
    [timeout]
  )

  return { copied, copy }
}

