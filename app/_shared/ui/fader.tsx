import { tv, type VariantProps } from 'tailwind-variants'
import { type HTMLAttributes } from 'react'

export const faderVariants = tv({
  base: 'relative before:pointer-events-none before:absolute before:z-[2] before:to-transparent after:pointer-events-none after:absolute after:z-[2] after:to-transparent',
  variants: {
    orientation: {
      horizontal:
        'before:inset-y-0 before:left-0 before:w-28 before:bg-gradient-to-r after:inset-y-0 after:right-0 after:w-28 after:bg-gradient-to-l',
      vertical:
        'before:inset-x-0 before:top-0 before:h-28 before:bg-gradient-to-b after:inset-x-0 after:bottom-0 after:h-28 after:bg-gradient-to-t',
    },
    color: {
      background: 'before:from-background after:from-background',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

export function Fader({
  orientation,
  color,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & VariantProps<typeof faderVariants>) {
  return (
    <div
      className={faderVariants({ orientation, color, className })}
      {...props}
    />
  )
}
