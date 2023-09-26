import { tv, type VariantProps } from 'tailwind-variants'
import { type Require } from '@shared/lib/types'

export const buttonVariants = tv({
  base: 'inline-flex select-none items-center justify-center border font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
      secondary: 'border-border',
      tertiary: '',
      destructive:
        'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    },
    size: {
      small: 'gap-1 rounded px-3 py-1 text-xs',
      medium: 'gap-1.5 rounded-md px-4 py-2 text-sm',
      large: 'gap-2 rounded-lg px-6 py-1.5 text-lg md:py-3',
    },
  },
  compoundVariants: [
    {
      variant: ['secondary', 'tertiary'],
      className: 'text-accent-foreground hover:bg-accent',
    },
  ],
  defaultVariants: {
    size: 'medium',
  },
})

export type ButtonVariants = Require<
  VariantProps<typeof buttonVariants>,
  'variant'
>
