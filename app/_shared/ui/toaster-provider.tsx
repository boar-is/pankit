'use client'

import { useTheme } from 'next-themes'
import { Toaster as SonnerToaster } from 'sonner'
import { z } from 'zod'

const sonnerThemes = z.enum(['light', 'dark', 'system'])

export default function ToasterProvider() {
  const { theme } = useTheme()

  const sonnerTheme = sonnerThemes.safeParse(theme)

  return (
    <SonnerToaster theme={sonnerTheme.success ? sonnerTheme.data : 'system'} />
  )
}
