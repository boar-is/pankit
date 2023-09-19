import Link from 'next/link'
import { Button, ButtonDecoration, type ButtonProps } from '@shared/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@shared/ui/avatar'
import Image from 'next/image'
import { initials } from '@shared/lib/utils'
import { type Session } from 'next-auth'

export type GoToDashboardButtonProps = Omit<ButtonProps, 'name'> &
  Pick<Session['user'], 'name' | 'image'>

export function GoToDashboardButton({
  name,
  image,
  ...props
}: GoToDashboardButtonProps) {
  return (
    <Button
      className="w-full"
      asChild
      {...props}
    >
      <Link
        href="/dashboard"
        className="flex gap-2"
      >
        <ButtonDecoration>
          <Avatar className="h-6 w-6">
            {image && (
              <AvatarImage
                src={image}
                asChild
              >
                <Image
                  src={image}
                  alt={`Avatar of ${name}`}
                  priority
                  fill
                />
              </AvatarImage>
            )}
            <AvatarFallback>{initials(name)}</AvatarFallback>
          </Avatar>
        </ButtonDecoration>
        Go to Dashboard
      </Link>
    </Button>
  )
}
