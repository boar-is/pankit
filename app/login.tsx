'use client'

import { type Session } from 'next-auth'
import { signIn, signOut } from 'next-auth/react'

export interface LoginProps {
  session: Session | null
}

export const Login = ({ session }: LoginProps) => {
  if (!session) {
    return <button onClick={() => void signIn('github')}>Login</button>
  }
  return (
    <div>
      <button onClick={() => void signOut()}>Logout</button>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}
