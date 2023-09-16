'use client'

import { type ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'
import Toaster from '@/components/toaster'
import Indicators from '@/components/indicators/indicators'
import TailwindIndicator from '@/components/indicators/tailwind-indicator'
import ThemeIndicator from '@/components/indicators/theme-indicator'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      {children}

      <Analytics />
      <Toaster />
      <Indicators>
        <TailwindIndicator />
        <ThemeIndicator />
      </Indicators>
    </ThemeProvider>
  )
}
