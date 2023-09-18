'use client'

import { type ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'
import ToasterProvider from '@shared/ui/toaster-provider'
import TailwindIndicator from '@shared/ui/tailwind.indicator'
import ThemeIndicator from '@shared/ui/theme.indicator'
import IndicatorsProvider from '@shared/ui/indicators-provider'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      {children}

      <Analytics />
      <ToasterProvider />
      <IndicatorsProvider>
        <TailwindIndicator />
        <ThemeIndicator />
      </IndicatorsProvider>
    </ThemeProvider>
  )
}
