import { type PropsWithChildren } from 'react'
import { MarketingHeader } from '@/app/(marketing)/server'

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col">
      <MarketingHeader />
      <main>{children}</main>
    </div>
  )
}
