import { Slot } from '@radix-ui/react-slot'

import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/styles'
import { type PropsWithAsChild } from '@/core/types'

export const Header = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <header
    ref={ref}
    className={cn(
      'sticky top-0 border-b border-muted/75 bg-background/50 backdrop-blur-lg',
      className,
    )}
    {...props}
  />
))
Header.displayName = 'Header'

export const HeaderContainer = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'container flex items-center justify-between gap-8 xl:gap-12',
      className,
    )}
    {...props}
  />
))
HeaderContainer.displayName = 'HeaderContainer'

export const HeaderItem = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & PropsWithAsChild
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      ref={ref}
      className={cn('', className)}
      {...props}
    />
  )
})
HeaderItem.displayName = 'HeaderItem'
