import { Inter } from 'next/font/google'

export const base = Inter({
  subsets: ['latin'],
  variable: '--font-base',
})

export const title = base

export const variables = [base, title].map((it) => it.variable)
