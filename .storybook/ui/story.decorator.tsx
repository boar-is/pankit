import { HTMLAttributes } from 'react'
import { cn } from '@shared/lib/utils'

export function StoryDecorator({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('bg-background p-8 text-foreground', className)}
      {...props}
    />
  )
}
