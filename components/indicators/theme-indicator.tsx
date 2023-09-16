'use client'

import { useTheme } from 'next-themes'
import { cn } from '@/styles'
import { useMounted } from '@/core/hooks'

export default function ThemeIndicator() {
  const mounted = useMounted()
  const { theme, setTheme, themes } = useTheme()

  if (!mounted) {
    return null
  }

  return (
    <div className="flex gap-2">
      {themes.map((t) => (
        <button
          key={t}
          type="button"
          onClick={() => setTheme(t)}
          className={cn(
            'rounded-md border-2 bg-muted px-4 py-2 capitalize text-muted-foreground',
            t === theme && 'border-primary',
          )}
          suppressHydrationWarning
        >
          {t}
        </button>
      ))}
    </div>
  )
}
