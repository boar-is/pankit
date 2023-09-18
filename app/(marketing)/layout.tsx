import { type PropsWithChildren } from 'react'
import { Header } from '@marketing/_ui/header'

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col">
      <Header />
      <main>{children}</main>
    </div>
  )
}
