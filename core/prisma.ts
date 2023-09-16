import { PrismaClient } from '@prisma/client'
import { env } from '@/env.mjs'

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient
}

const prisma = global.prisma ?? new PrismaClient()

if (env.NEXT_PUBLIC_NODE_ENV === 'development') {
  global.prisma = prisma
}

export default prisma as PrismaClient
