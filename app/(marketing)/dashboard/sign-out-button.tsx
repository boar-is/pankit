'use client'

import { signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'

export function SignOutButton() {
  return (
    <Button
      variant="destructive"
      size="lg"
      type="button"
      className="mx-auto max-w-xs"
      onClick={() => signOut()}
    >
      Sign Out
    </Button>
  )
}
