import { getServerSession } from 'next-auth'
import { GitHubButton } from '@/app/(marketing)/_ui/github-button'
import { GoToDashboardButton } from '@marketing/_ui/go-to-dashboard-button'
import { type ButtonProps } from '@shared/ui/button'

export async function SessionButton(props: ButtonProps) {
  const session = await getServerSession()

  return session?.user ? (
    <GoToDashboardButton
      name={session.user.name}
      image={session.user.image}
      {...props}
    />
  ) : (
    <GitHubButton {...props} />
  )
}
