import { Children, type HTMLAttributes } from 'react'
import { cn } from '@shared/lib/utils'
import { Slot, type SlotProps } from '@radix-ui/react-slot'
import { tv, type VariantProps } from 'tailwind-variants'

export const bentoGridVariants = tv({
  base: 'grid gap-4 sm:gap-6',
  variants: {
    variant: {
      1: 'grid-cols-5 grid-rows-3',
      2: 'grid-cols-3 grid-rows-2',
      3: 'grid-cols-3',
      4: 'grid-cols-3 grid-rows-2',
    },
  },
})
export type BentoGridVariantProps = VariantProps<typeof bentoGridVariants>

export const bentoItemVariants = tv({
  base: 'col-span-full rounded-2xl border border-accent bg-gradient-to-br from-accent to-transparent p-4 text-accent-foreground shadow-lg shadow-black/5 sm:rounded-3xl sm:p-8',
  variants: {
    variant: {
      1: '',
      2: '',
      3: '',
      4: '',
    },
    index: {
      0: '',
      1: '',
      2: '',
      3: '',
      4: '',
    },
  },
  compoundVariants: [
    {
      variant: 1,
      index: 0,
      className: 'sm:col-span-3 sm:row-span-2',
    },
    {
      variant: 1,
      index: 1,
      className: 'sm:col-span-2 sm:row-span-1',
    },
    {
      variant: 1,
      index: 2,
      className: 'sm:col-span-2 sm:row-span-1',
    },
    {
      variant: 1,
      index: 3,
      className: 'sm:col-span-2 sm:row-span-1',
    },
    {
      variant: 1,
      index: 4,
      className: 'sm:col-span-3 sm:row-span-1',
    },
    {
      variant: 2,
      index: 0,
      className: 'sm:col-span-2 sm:row-span-1',
    },
    {
      variant: 2,
      index: 1,
      className: 'sm:col-span-1 sm:row-span-2',
    },
    {
      variant: 2,
      index: 2,
      className: 'sm:col-span-2 sm:row-span-1',
    },
    {
      variant: 3,
      index: 0,
      className: 'sm:col-span-2',
    },
    {
      variant: 3,
      index: 1,
      className: 'sm:col-span-1',
    },
    {
      variant: 3,
      index: 2,
      className: 'sm:col-span-full',
    },
    {
      variant: 3,
      index: 3,
      className: 'sm:col-span-1',
    },
    {
      variant: 3,
      index: 4,
      className: 'sm:col-span-2',
    },
    {
      variant: 4,
      index: 0,
      className: 'sm:col-span-1 sm:row-span-2',
    },
    {
      variant: 4,
      index: 1,
      className: 'sm:col-span-2 sm:row-span-1',
    },
    {
      variant: 4,
      index: 2,
      className: 'sm:col-span-2 sm:row-span-1',
    },
  ],
})

export function BentoGrid({
  variant = 1,
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement> & BentoGridVariantProps) {
  return (
    <div
      className={bentoGridVariants({ variant, className })}
      {...props}
    >
      {Children.map(children, (child, index) => (
        <Slot
          // @ts-expect-error Not important to provide a `0 | 1 | 2 | 3 | 4` type
          className={bentoItemVariants({ variant, index, className })}
        >
          {child}
        </Slot>
      ))}
    </div>
  )
}

export function BentoItem({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex flex-col justify-center space-y-2 sm:items-center',
        className,
      )}
      {...props}
    ></div>
  )
}

export function BentoItemIcon({ className, ...props }: SlotProps) {
  return (
    <Slot
      className={cn(
        'h-8 w-8 text-muted-foreground/50 sm:h-16 sm:w-16',
        className,
      )}
      {...props}
    ></Slot>
  )
}

export function BentoItemHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <header
      className={cn('flex flex-row items-center gap-3 sm:flex-col', className)}
      {...props}
    ></header>
  )
}

export function BentoItemTitle({ className, ...props }: SlotProps) {
  return (
    <Slot
      className={cn(
        'text-2xl font-semibold capitalize tracking-tight opacity-90 sm:text-center sm:text-3xl',
        className,
      )}
      {...props}
    ></Slot>
  )
}

export function BentoItemContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'prose-sm font-medium text-muted-foreground/90 sm:prose sm:text-center',
        className,
      )}
      {...props}
    ></div>
  )
}
