'use client'

import { signIn } from 'next-auth/react'
import {
  Button,
  ButtonDecoration,
  ButtonLoadingIndicator,
} from '@shared/ui/button'
import { useState } from 'react'
import { GitHubIcon } from '@shared/ui/icons'

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
