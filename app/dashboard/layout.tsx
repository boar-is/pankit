import { type PropsWithChildren } from 'react'
import { Sidebar } from '@/app/dashboard/_ui/sidebar'

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      {children}
    </div>
  )
}
