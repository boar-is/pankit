import {
  type DefaultSession,
  getServerSession,
  type NextAuthOptions,
  type User,
} from 'next-auth'
import GithubProvider, { type GithubProfile } from 'next-auth/providers/github'
import { type User as DbUser } from '@prisma/client'
import { env } from '@/env.mjs'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '@/core/prisma'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: User & DefaultSession['user']
  }

  interface User extends Pick<DbUser, 'username' | 'gh_username'> {}
}

declare module 'next-auth/jwt' {
  interface JWT extends User {}
}

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  providers: [
    GithubProvider({
      clientId: env.AUTH_GITHUB_ID,
      clientSecret: env.AUTH_GITHUB_SECRET,
      profile: (profile: GithubProfile) => ({
        id: profile.id.toString(),
        name: profile.name,
        username: null,
        gh_username: profile.login,
        email: profile.email,
        image: profile.avatar_url,
      }),
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => ({
      ...token,
      ...user,
    }),
    session: ({ token, session }) => ({
      ...session,
      user: {
        ...session.user,
        name: token.name ?? token.gh_username,
      },
    }),
  },
} satisfies NextAuthOptions

export function getSession() {
  return getServerSession(authOptions)
}
