import { env } from '@/env.mjs'
import Link from 'next/link'

export function WorkInProgress() {
  return (
    <div className="prose mx-auto max-w-prose rounded-xl border border-destructive bg-destructive/25 px-8 py-4 font-medium">
      This page is in progress. If you have any questions, please go to{' '}
      <Link
        href={`${env.NEXT_PUBLIC_GITHUB_REPO_URL}/discussions`}
        target="_blank"
      >
        GitHub Discussions
      </Link>
      .
    </div>
  )
}
