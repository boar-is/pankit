import { Slot, type SlotProps } from '@radix-ui/react-slot'
import { cn } from '@shared/lib/utils'

export function InlineDecoration({ className, ...props }: SlotProps) {
  return (
    <Slot
      className={cn('h-[1em] w-[1em]', { className })}
      {...props}
    />
  )
}
