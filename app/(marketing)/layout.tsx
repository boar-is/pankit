import { type PropsWithChildren } from 'react'
import { Header } from '@marketing/_ui/header'

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  )
}
