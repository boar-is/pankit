import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { type PropsWithAsChild } from '@shared/lib/types'
import { Slot } from '@radix-ui/react-slot'
import {
  ButtonDecoration,
  type ButtonDecorationProps,
  ButtonProvider,
} from '@shared/ui/button/client'
import { buttonVariants, type ButtonVariants } from '@shared/ui/button/styles'
import { Loader2Icon } from 'lucide-react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants &
  PropsWithAsChild & {
    loading?: boolean
  }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, className, loading, disabled, variant, size, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <ButtonProvider value={{ variant, size, loading }}>
        <Comp
          disabled={loading || disabled}
          className={buttonVariants({ variant, size, className })}
          ref={ref}
          {...props}
        />
      </ButtonProvider>
    )
  },
)
Button.displayName = 'Button'

function ButtonLoadingIndicator(props: ButtonDecorationProps) {
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

export { Button, ButtonLoadingIndicator }
export { buttonVariants } from './styles'
export { ButtonDecoration, useButtonContext } from './client'
