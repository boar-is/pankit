'use client'

import { tv, type VariantProps } from 'tailwind-variants'
import { type HTMLAttributes } from 'react'
import { InlineDecoration } from '@shared/ui/inline-decoration'

export const badgeVariants = tv({
  base: 'inline-flex items-center justify-center rounded-full font-semibold',
  variants: {
    color: {
      gray: '',
      blue: '',
      yellow: '',
      red: '',
      green: '',
    },
    variant: {
      subtle: '',
    },
    size: {
      small: 'gap-1 px-3 py-0.5 text-xs',
      medium: 'gap-1.5 px-4 py-1 text-sm',
      large: 'gap-2 px-6 py-1.5 text-lg md:py-2',
    },
  },
  compoundVariants: [
    {
      color: 'gray',
      variant: 'subtle',
      className:
        'bg-highlight-gray/50 text-highlight-gray-content dark:bg-highlight-gray/25',
    },
    {
      color: 'blue',
      variant: 'subtle',
      className:
        'bg-highlight-blue/50 text-highlight-blue-content dark:bg-highlight-blue/25',
    },
    {
      color: 'yellow',
      variant: 'subtle',
      className:
        'bg-highlight-yellow/50 text-highlight-yellow-content dark:bg-highlight-yellow/25',
    },
    {
      color: 'red',
      variant: 'subtle',
      className:
        'bg-highlight-red/50 text-highlight-red-content dark:bg-highlight-red/25',
    },
    {
      color: 'green',
      variant: 'subtle',
      className:
        'bg-highlight-green/50 text-highlight-green-content dark:bg-highlight-green/25',
    },
  ],
  defaultVariants: {
    color: 'gray',
    variant: 'subtle',
    size: 'medium',
  },
})

export type BadgeProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>

export function Badge({
  color,
  variant,
  size,
  className,
  ...props
}: BadgeProps) {
  return (
    <div
      className={badgeVariants({ color, variant, size, className })}
      {...props}
    />
  )
}

export const BadgeDecoration = InlineDecoration
