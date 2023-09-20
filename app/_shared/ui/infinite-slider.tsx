'use client'

import { Children, type HTMLAttributes } from 'react'
import { Slot, type SlotProps } from '@radix-ui/react-slot'
import { cn } from '@shared/lib/utils'
import { useMounted } from '@shared/ui/hooks'

export function InfiniteSlider({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex max-w-full flex-nowrap overflow-hidden', className)}
      {...props}
    >
      {children}
      {children}
    </div>
  )
}

export function InfiniteSliderList({
  fillAmount = 40,
  animationDuration = '30s',
  className,
  children,
  ...props
}: HTMLAttributes<HTMLUListElement> & {
  fillAmount?: number
  animationDuration?: string
}) {
  const mounted = useMounted()

  if (!mounted) {
    return null
  }

  const length = Math.round(fillAmount / 2 / Children.count(children))

  return (
    <ul
      className={cn('flex animate-infinite-slide [&_li]:mx-4', className)}
      style={{
        animationDuration,
      }}
      {...props}
    >
      {Array.from({ length }, () =>
        Children.map(children, (child) => <li>{child}</li>),
      )}
    </ul>
  )
}

export const InfiniteSliderItem = ({ className, ...props }: SlotProps) => (
  <Slot
    className={cn('h-8 w-8 text-muted-foreground', { className })}
    {...props}
  />
)
