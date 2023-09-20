'use client'

import { tv, type VariantProps } from 'tailwind-variants'
import {
  type ButtonHTMLAttributes,
  createContext,
  forwardRef,
  type HTMLAttributes,
  useContext,
} from 'react'
import { Slot } from '@radix-ui/react-slot'
import { Loader2Icon } from 'lucide-react'
import { type PropsWithAsChild } from '@shared/lib/types'
import { cn } from '@shared/lib/utils'

export const buttonVariants = tv({
  base: 'inline-flex select-none items-center justify-center border border-transparent font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  variants: {
    color: {
      default: '',
      muted: '',
      destructive: '',
    },
    variant: {
      solid: '',
      outline: '',
      ghost: '',
      link: 'decoration-2 underline-offset-4 hover:underline',
    },
    size: {
      small: 'gap-1 rounded px-3 py-1 text-xs',
      medium: 'gap-1.5 rounded-md px-4 py-2 text-sm',
      large: 'gap-2 rounded-lg px-6 py-1.5 text-lg sm:py-3',
    },
  },
  compoundVariants: [
    {
      color: 'default',
      variant: 'solid',
      className: 'bg-foreground text-background hover:bg-foreground/90',
    },
    {
      color: 'default',
      variant: ['outline', 'ghost', 'link'],
      className: 'text-foreground',
    },
    {
      color: 'default',
      variant: ['outline', 'ghost'],
      className: 'hover:bg-foreground/5 dark:hover:bg-foreground/10',
    },
    {
      color: 'default',
      variant: 'outline',
      className: 'border-foreground/10',
    },
    {
      color: 'default',
      variant: 'link',
      className: 'decoration-foreground',
    },
    {
      color: 'muted',
      variant: 'solid',
      className: 'bg-muted text-muted-foreground hover:bg-muted/75',
    },
    {
      color: 'muted',
      variant: ['outline', 'ghost', 'link'],
      className: 'text-muted-foreground',
    },
    {
      color: 'muted',
      variant: ['outline', 'ghost'],
      className: 'hover:bg-muted/25 dark:hover:bg-muted/60',
    },
    {
      color: 'muted',
      variant: 'outline',
      className: 'border-muted',
    },
    {
      color: 'muted',
      variant: 'link',
      className: 'decoration-muted-foreground',
    },
    {
      color: 'destructive',
      variant: 'solid',
      className:
        'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    },
    {
      color: 'destructive',
      variant: ['outline', 'ghost', 'link'],
      className: 'text-destructive',
    },
    {
      color: 'destructive',
      variant: ['outline', 'ghost'],
      className: 'hover:bg-destructive/10 dark:hover:bg-destructive/25',
    },
    {
      color: 'destructive',
      variant: 'outline',
      className: 'border-destructive',
    },
    {
      color: 'destructive',
      variant: 'link',
      className: 'decoration-destructive',
    },
  ],
  defaultVariants: {
    variant: 'solid',
    size: 'medium',
    color: 'default',
  },
})

type ButtonContextValue = {
  loading: boolean
}

const ButtonContext = createContext<ButtonContextValue>(
  null as unknown as ButtonContextValue,
)
const useButtonContext = () => useContext(ButtonContext)

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> &
  PropsWithAsChild & {
    loading?: boolean
  }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild,
      className,
      loading = false,
      disabled,
      variant,
      size,
      color,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <ButtonContext.Provider value={{ loading }}>
        <Comp
          className={buttonVariants({ variant, size, color, className })}
          ref={ref}
          {...props}
          disabled={loading || disabled}
        />
      </ButtonContext.Provider>
    )
  },
)
Button.displayName = 'Button'

export type ButtonDecorationProps = HTMLAttributes<HTMLDivElement> & {
  hideOnDefault?: boolean
  showOnLoading?: boolean
}

export function ButtonDecoration({
  hideOnDefault,
  showOnLoading,
  className,
  children,
  ...props
}: ButtonDecorationProps) {
  const { loading } = useButtonContext()

  if (loading ? !showOnLoading : hideOnDefault) {
    return null
  }

  return (
    <Slot
      className={cn('h-[1em] w-[1em]', { className })}
      {...props}
    >
      {children}
    </Slot>
  )
}

export function ButtonLoadingIndicator(props: ButtonDecorationProps) {
  return (
    <ButtonDecoration
      showOnLoading
      hideOnDefault
      {...props}
    >
      <Loader2Icon className="animate-spin" />
    </ButtonDecoration>
  )
}
