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
    <div className="prose prose-2xl">
      <h1>PanKit</h1>
      <label className="flex items-center">
        <input
          type="checkbox"
          defaultChecked
        />
        <span className="ml-2">Email me news and special offers</span>
      </label>
      <button onClick={() => void signOut()}>Logout</button>
      <code>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </code>
    </div>
  )
}
