'use client'

import { signIn } from 'next-auth/react'
import {
  Button,
  ButtonDecoration,
  ButtonLoadingIndicator,
} from '@/components/ui/button'
import { GitHubIcon } from '@/components/icons'
import { useState } from 'react'

export function GitHubButton() {
  const [loading, setLoading] = useState(false)

  return (
    <Button
      type="button"
      loading={loading}
      onClick={() => {
        setLoading(true)
        void signIn('github')
      }}
    >
      <ButtonLoadingIndicator />
      <ButtonDecoration>
        <GitHubIcon />
      </ButtonDecoration>
      Continue with GitHub
    </Button>
  )
}
