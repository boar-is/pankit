import { type HTMLAttributes } from 'react'
import { cn } from '@shared/lib/utils'

export function Header({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <header
      className={cn(
        'sticky top-0 border-b border-muted/75 bg-background/50 backdrop-blur-md md:backdrop-blur-lg',
        { className },
      )}
      {...props}
    />
  )
}

export function HeaderContainer({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'container flex items-center justify-between gap-8 py-2 lg:py-4 xl:gap-12',
        { className },
      )}
      {...props}
    />
  )
}
