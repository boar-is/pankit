import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    AUTH_GITHUB_ID: z.string().min(1),
    AUTH_GITHUB_SECRET: z.string().min(1),
    NEXTAUTH_SECRET:
      process.env['NODE_ENV'] === 'production'
        ? z.string().min(1)
        : z.string().min(1).optional(),
    NEXTAUTH_URL: z.preprocess(
      // This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
      // Since NextAuth.js automatically uses the VERCEL_URL if present.
      (str) => process.env['VERCEL_URL'] ?? str,
      // VERCEL_URL doesn't include `https` so it cant be validated as a URL
      process.env.VERCEL ? z.string().min(1) : z.string().url(),
    ),
    POSTGRES_PRISMA_URL: z.string().url(),
    POSTGRES_URL_NON_POOLING: z.string().url(),
  },
  client: {
    NEXT_PUBLIC_NODE_ENV: z.enum(['development', 'test', 'production']),
  },
  runtimeEnv: {
    AUTH_GITHUB_ID: process.env['AUTH_GITHUB_ID'],
    AUTH_GITHUB_SECRET: process.env['AUTH_GITHUB_SECRET'],
    NEXTAUTH_SECRET: process.env['NEXTAUTH_SECRET'],
    NEXTAUTH_URL: process.env['NEXTAUTH_URL'],
    POSTGRES_PRISMA_URL: process.env['POSTGRES_PRISMA_URL'],
    POSTGRES_URL_NON_POOLING: process.env['POSTGRES_URL_NON_POOLING'],
    NEXT_PUBLIC_NODE_ENV: process.env['NODE_ENV'],
  },
})
