'use client'

import { DropdownMenuIcon } from '@/components/ui/dropdown'
import { LogOutIcon } from 'lucide-react'
import { signIn, signOut } from 'next-auth/react'
import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/styles'
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

export const SignOutButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    {...props}
    type="button"
    className={cn('w-full p-0 capitalize text-destructive', className)}
    onClick={() => signOut()}
  >
    <DropdownMenuIcon>
      <LogOutIcon strokeWidth={2.5} />
    </DropdownMenuIcon>
    <span className="font-semibold">Sign Out</span>
  </button>
))
SignOutButton.displayName = 'SignOutButton'
