import { getServerSession } from 'next-auth'
import { Button, ButtonDecoration } from '@shared/ui/button'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@shared/ui/avatar'
import Image from 'next/image'
import { GitHubButton } from '@/app/(marketing)/_ui/github-button'
import { initials } from '@shared/lib/utils'

export async function SessionButton() {
  const session = await getServerSession()

  if (session?.user) {
    return (
      <Button
        className="w-full"
        asChild
      >
        <Link
          href="/dashboard"
          className="flex gap-2"
        >
          <ButtonDecoration>
            <Avatar className="h-6 w-6">
              <AvatarImage
                src={session.user.image ?? ''}
                asChild
              >
                <Image
                  src={session.user.image ?? ''}
                  alt={`Avatar of ${session?.user.image}`}
                  priority
                  fill
                />
              </AvatarImage>
              <AvatarFallback>{initials(session.user.name)}</AvatarFallback>
            </Avatar>
          </ButtonDecoration>
          Go to Dashboard
        </Link>
      </Button>
    )
  }

  return <GitHubButton />
}
