import { tv, type VariantProps } from 'tailwind-variants'
import { forwardRef, type HTMLAttributes } from 'react'

export const headerVariants = tv({
  slots: {
    base: 'sticky top-0 border-b border-muted/75 bg-background/50 backdrop-blur-md md:backdrop-blur-lg',
    container:
      'container flex items-center justify-between gap-8 py-2 lg:py-4 xl:gap-12',
  },
})
export type HeaderVariantsProps = VariantProps<typeof headerVariants>

export const Header = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & HeaderVariantsProps
>(({ className, ...props }, ref) => {
  const { base } = headerVariants()
  return (
    <header
      ref={ref}
      className={base({ className })}
      {...props}
    />
  )
})
Header.displayName = 'Header'

export const HeaderContainer = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & HeaderVariantsProps
>(({ className, ...props }, ref) => {
  const { container } = headerVariants()
  return (
    <div
      ref={ref}
      className={container({ className })}
      {...props}
    />
  )
})
HeaderContainer.displayName = 'HeaderContainer'
