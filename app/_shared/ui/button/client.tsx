'use client'

import { type ButtonVariants } from '@shared/ui/button/styles'
import { type HTMLAttributes } from 'react'
import { InlineDecoration } from '@shared/ui/inline-decoration'
import { createSafeContext } from '@shared/lib/create-safe-context'

const [ButtonProvider, useButtonContext] = createSafeContext<
  ButtonVariants & {
    loading?: boolean
  }
>('Button component was not found in tree')

type ButtonDecorationProps = HTMLAttributes<HTMLDivElement> & {
  hideOnDefault?: boolean
  showOnLoading?: boolean
}

function ButtonDecoration({
  hideOnDefault,
  showOnLoading,
  ...props
}: ButtonDecorationProps) {
  const { loading } = useButtonContext()

  if (loading ? !showOnLoading : hideOnDefault) {
    return null
  }

  return <InlineDecoration {...props} />
}

export {
  ButtonProvider,
  useButtonContext,
  type ButtonDecorationProps,
  ButtonDecoration,
}
