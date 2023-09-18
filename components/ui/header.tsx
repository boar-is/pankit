import { Slot } from '@radix-ui/react-slot'

/*
<Header>
  <HeaderContainer>
    <HeaderItem asChild>
      <Brand>
        <BrandLogo>
          <PanKitIcon/>
        </BrandLogo>
        <BrandName>
          PanKit
        </BrandName>
      </Brand>
    </HeaderItem>
    <HeaderItem asChild>
      <NavigationMenu>
        ...
      </Navigation>
    </HeaderItem>
    <HeaderItem>
      <menu>
        ...
      </menu>
    </HeaderItem>
    <HeaderItem asChild>
      <Popover>
        ...
      </Popover>
    </HeaderItem>
  </HeaderContainer>
</Header>
 */
import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/styles'
import { type PropsWithAsChild } from '@/core/types'

export const Header = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <header
    ref={ref}
    className={cn('sticky', className)}
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
