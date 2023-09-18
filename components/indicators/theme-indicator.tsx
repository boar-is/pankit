'use client'

import { useTheme } from 'next-themes'
import { cn } from '@/styles'
import { useMounted } from '@/core/hooks'
import { Button } from '@/components/ui/button'

export default function ThemeIndicator() {
  const mounted = useMounted()
  const { theme, setTheme, themes } = useTheme()

  return (
    <div className="flex gap-2">
      {themes.map((t) => (
        <Button
          key={t}
          type="button"
          color="muted"
          onClick={() => setTheme(t)}
          className={cn(
            'backdrop-blur',
            mounted && t === theme && 'border-primary',
          )}
          suppressHydrationWarning
        >
          {t}
        </Button>
      ))}
    </div>
  )
}
