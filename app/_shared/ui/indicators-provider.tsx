import { type PropsWithChildren } from 'react'
import { env } from '@/env.mjs'

export default function IndicatorsProvider({ children }: PropsWithChildren) {
  if (env.NEXT_PUBLIC_NODE_ENV === 'production') return null

  return <div className="fixed bottom-2 left-2 z-50 flex gap-4">{children}</div>
}
