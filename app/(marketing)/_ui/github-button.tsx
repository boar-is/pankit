'use client'

import { signIn } from 'next-auth/react'
import {
  Button,
  ButtonDecoration,
  ButtonLoadingIndicator,
  type ButtonProps,
} from '@shared/ui/button'
import { useState } from 'react'
import { GitHubIcon } from '@shared/ui/icons'

export function GitHubButton(props: ButtonProps) {
  const [loading, setLoading] = useState(false)

  return (
    <Button
      type="button"
      loading={loading}
      onClick={() => {
        setLoading(true)
        void signIn('github')
      }}
      {...props}
    >
      <ButtonLoadingIndicator />
      <ButtonDecoration>
        <GitHubIcon />
      </ButtonDecoration>
      Continue with GitHub
    </Button>
  )
}
