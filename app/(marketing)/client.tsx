'use client'

import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { GitHubIcon } from '@/components/icons'

export function GitHubButton() {
  return (
    <Button
      type="button"
      variant="github"
      onClick={() => signIn('github')}
    >
      <GitHubIcon />
      <span className="font-semibold">Continue with GitHub</span>
    </Button>
  )
}
