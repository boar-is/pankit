'use client'

import { useTheme } from 'next-themes'
import { cn } from '@/styles'

export default function ThemeIndicator() {
  const { theme, setTheme, themes } = useTheme()

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
