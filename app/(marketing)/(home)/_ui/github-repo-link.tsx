import { Button, ButtonDecoration, type ButtonProps } from '@shared/ui/button'
import Link from 'next/link'
import { env } from '@/env.mjs'
import { GitHubIcon } from '@shared/ui/icons'

export function GithubRepoLink(props: ButtonProps) {
  return (
    <Button
      asChild
      {...props}
    >
      <Link
        href={env.NEXT_PUBLIC_GITHUB_REPO_URL}
        target="_blank"
      >
        <ButtonDecoration>
          <GitHubIcon />
        </ButtonDecoration>
        GitHub
      </Link>
    </Button>
  )
}
