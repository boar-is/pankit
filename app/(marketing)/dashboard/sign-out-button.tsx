'use client'

import { signOut } from 'next-auth/react'
import {
  Button,
  ButtonDecoration,
  ButtonLoadingIndicator,
} from '@/components/ui/button'
import { LogOutIcon } from 'lucide-react'
import { useState } from 'react'

export function SignOutButton() {
  const [loading, setLoading] = useState(false)

  return (
    <Button
      color="destructive"
      variant="outline"
      size="large"
      type="button"
      className="mx-auto max-w-xs"
      loading={loading}
      onClick={() => {
        setLoading(true)
        void signOut()
      }}
    >
      <ButtonLoadingIndicator />
      <ButtonDecoration>
        <LogOutIcon />
      </ButtonDecoration>
      Sign out
    </Button>
  )
}
