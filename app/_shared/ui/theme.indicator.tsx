'use client'

import { useTheme } from 'next-themes'
import { useMounted } from '@shared/lib/hooks'
import { Button } from '@shared/ui/button'
import { cn } from '@shared/lib/utils'

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
