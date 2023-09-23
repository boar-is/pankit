'use client'

import { Button, ButtonDecoration, type ButtonProps } from '@shared/ui/button'
import {
  type PaymentFrequency,
  type priceByFrequency,
} from '@marketing/pricing/_ui/data-pricing-plan-list'
import { cn } from '@shared/lib/utils'
import { ArrowRightIcon } from 'lucide-react'
import { toast } from 'sonner'

export type DataPricingPlanFooterButton = ButtonProps & {
  frequency: PaymentFrequency
  plan: keyof typeof priceByFrequency
}

export function DataPricingPlanFooterButton({
  frequency,
  plan,
  children,
  className,
  ...props
}: DataPricingPlanFooterButton) {
  return (
    <Button
      className={cn('w-full justify-between rounded-xl', className)}
      size="large"
      onClick={() => {
        toast(
          <p>
            Stripe demo is not yet available for the {frequency} {plan} plan.
          </p>,
        )
      }}
      {...props}
    >
      {children}
      <ButtonDecoration>
        <ArrowRightIcon />
      </ButtonDecoration>
    </Button>
  )
}
