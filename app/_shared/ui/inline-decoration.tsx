import { Slot, type SlotProps } from '@radix-ui/react-slot'
import { cn } from '@shared/lib/utils'

export function InlineDecoration({ className, ...props }: SlotProps) {
  return (
    <Slot
      className={cn('max-h-[1em] min-h-fit min-w-fit max-w-[1em]', {
        className,
      })}
      {...props}
    />
  )
}
