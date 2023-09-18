import './globals.css'
import { type Metadata } from 'next'
import { type ReactNode } from 'react'
import Providers from '@/app/providers'
import { cn } from '@shared/lib/utils'
import { variables } from '@shared/lib/fonts'

export const metadata: Metadata = {
  title: 'PanKit',
  description: 'Opinionated Next.js Starter Kit',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={cn(
          'min-h-screen bg-background font-base text-foreground antialiased',
          variables,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
