import { type HTMLAttributes } from 'react'
import { cn } from '@shared/lib/utils'
import { Slot, type SlotProps } from '@radix-ui/react-slot'
import { type PropsWithAsChild } from '@shared/lib/types'
import { ArrowRightIcon, CheckIcon } from 'lucide-react'
import { Button, ButtonDecoration, type ButtonProps } from '@shared/ui/button'

export function PricingPlanList({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-fit grid-cols-1 grid-rows-3 gap-4 lg:grid-cols-3 lg:grid-rows-1',
        className,
      )}
      {...props}
    />
  )
}

export function PricingPlan({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex w-full max-w-sm flex-col gap-12 rounded-3xl border border-foreground/5 bg-gradient-to-br from-muted to-transparent p-6 shadow-md shadow-black/5 dark:border-foreground/20',
        className,
      )}
      {...props}
    />
  )
}

export function PricingPlanHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <header
      className={cn('space-y-4', className)}
      {...props}
    />
  )
}

export function PricingPlanTitle({ className, ...props }: SlotProps) {
  return (
    <Slot
      className={cn('text-lg font-semibold', className)}
      {...props}
    />
  )
}

export function PricingPlanContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('', className)}
      {...props}
    />
  )
}

export function PricingPlanPrice({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex items-baseline gap-1', className)}
      {...props}
    />
  )
}

export function PricingPlanPriceValue({
  asChild,
  className,
  ...props
}: HTMLAttributes<HTMLDataElement> & PropsWithAsChild) {
  const Comp = asChild ? Slot : 'data'

  return (
    <Comp
      className={cn('text-4xl font-bold', className)}
      {...props}
    />
  )
}

export function PricingPlanPriceDescription({
  asChild,
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement> & PropsWithAsChild) {
  const Comp = asChild ? Slot : 'p'

  return (
    <Comp
      className={cn('text-lg font-medium text-muted-foreground', className)}
      {...props}
    />
  )
}

export function PricingPlanDescription({
  asChild,
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement> & PropsWithAsChild) {
  const Comp = asChild ? Slot : 'p'

  return (
    <Comp
      className={cn('prose-sm text-muted-foreground', className)}
      {...props}
    />
  )
}

export function PricingPlanFeatureList({
  className,
  ...props
}: HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className={cn('space-y-2.5', className)}
      {...props}
    />
  )
}

export function PricingPlanFeatureItem({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLLIElement>) {
  return (
    <li
      className={cn(
        'flex items-center gap-2 font-medium text-muted-foreground',
        className,
      )}
      {...props}
    >
      <aside className="rounded-full bg-foreground/90 p-0.5 text-background">
        <CheckIcon className="h-3 w-3" />
      </aside>
      <div>{children}</div>
    </li>
  )
}

export function PricingPlanFooter({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <footer
      className={cn('mt-auto flex', className)}
      {...props}
    />
  )
}

export function PricingPlanFooterButton({
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <Button
      className={cn('w-full justify-between rounded-xl', className)}
      size="large"
      {...props}
    >
      {children}
      <ButtonDecoration>
        <ArrowRightIcon />
      </ButtonDecoration>
    </Button>
  )
}
