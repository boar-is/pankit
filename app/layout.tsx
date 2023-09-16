import '../styles/globals.css'
import { type Metadata } from 'next'
import { type ReactNode } from 'react'
import { cn, variables } from '@/styles'
import Providers from '@/app/providers'

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
