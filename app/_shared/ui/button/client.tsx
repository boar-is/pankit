'use client'

import { createSafeContext } from '@shared/lib/create-safe-context'
import { type ButtonVariants } from '@shared/ui/button/styles'
import { type HTMLAttributes } from 'react'
import { InlineDecoration } from '@shared/ui/inline-decoration'

export const [ButtonProvider, useButtonContext] = createSafeContext<
  ButtonVariants & {
    loading?: boolean
  }
>('Button component was not found in tree')

export type ButtonDecorationProps = HTMLAttributes<HTMLDivElement> & {
  hideOnDefault?: boolean
  showOnLoading?: boolean
}

export function ButtonDecoration({
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
