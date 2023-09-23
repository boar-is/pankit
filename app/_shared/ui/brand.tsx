import { type HTMLAttributes } from 'react'
import { cn } from '@shared/lib/utils'

export type BrandProps = HTMLAttributes<HTMLDivElement>
export function Brand({ className, ...props }: BrandProps) {
  return (
    <div
      className={cn(
        'flex select-none items-center gap-3 text-xl font-semibold',
        className,
      )}
      {...props}
    />
  )
}

export function BrandLogo({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('relative h-8 w-8 overflow-hidden rounded-lg', className)}
      {...props}
    />
  )
}

export function BrandName({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('', className)}
      {...props}
    />
  )
}
