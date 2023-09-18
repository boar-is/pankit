import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@shared/lib/utils'

export const Brand = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex select-none items-center gap-3 text-xl font-semibold',
        className,
      )}
      {...props}
    />
  ),
)
Brand.displayName = 'Brand'

export const BrandLogo = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'relative flex h-8 w-8 overflow-hidden rounded-lg',
      className,
    )}
    {...props}
  />
))
BrandLogo.displayName = 'BrandLogo'

export const BrandName = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('', className)}
    {...props}
  />
))
BrandName.displayName = 'BrandName'
