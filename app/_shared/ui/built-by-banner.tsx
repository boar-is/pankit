import { type HTMLAttributes } from 'react'
import Link from 'next/link'
import { cn } from '@shared/lib/utils'
import { UkrainianFlagIcon } from '@shared/ui/icons'

export function BuiltByBanner({
  className,
  ...props
}: HTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href="https://github.com/BorisZubchenko"
      target="_blank"
      className={cn(
        'flex items-center gap-3 rounded-lg bg-black px-3 py-3 !text-[15px] text-sm font-light text-white',
        className,
      )}
      {...props}
    >
      <UkrainianFlagIcon className="h-5 w-5" />
      <div className="-my-2 w-[1px] self-stretch bg-[#5E5E5E]" />
      <span className="tracking-wide">
        Built by <span className="font-medium">Boris Zubchenko</span>
      </span>
    </Link>
  )
}
