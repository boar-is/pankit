import { tv, type VariantProps } from 'tailwind-variants'
import { type HTMLAttributes } from 'react'
import { InlineDecoration } from '@shared/ui/inline-decoration'

export const alertVariants = tv({
  base: 'flex items-center border border-transparent font-medium',
  variants: {
    color: {
      destructive: '',
    },
    variant: {
      subtle: '',
    },
    size: {
      small: 'gap-1.5 rounded-md px-3 py-0.5 text-sm',
      medium: 'gap-2 rounded-lg px-4 py-1 text-sm',
      large:
        'gap-2 rounded-xl px-4 py-1 text-sm md:gap-3 md:px-6 md:py-2 md:text-lg',
    },
  },
  compoundVariants: [
    {
      color: 'destructive',
      variant: 'subtle',
      className:
        'border-destructive bg-destructive/25 text-destructive dark:bg-destructive/25',
    },
  ],
  defaultVariants: {
    color: 'destructive',
    variant: 'subtle',
    size: 'medium',
  },
})

export type AlertProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof alertVariants>

export function Alert({
  color,
  variant,
  size,
  className,
  ...props
}: AlertProps) {
  return (
    <div
      className={alertVariants({ color, variant, size, className })}
      {...props}
    />
  )
}

export const AlertDecoration = InlineDecoration
