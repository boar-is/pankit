import { env } from '@/env.mjs'

export function WorkInProgress() {
  return (
    <div className="prose mx-auto max-w-prose rounded-xl border border-destructive bg-destructive/25 px-8 py-4 font-medium">
      This page is in progress. If you have any questions, please go to{' '}
      <a href={`${env.NEXT_PUBLIC_GITHUB_REPO_URL}/discussions`}>
        GitHub Discussions
      </a>
      .
    </div>
  )
}
