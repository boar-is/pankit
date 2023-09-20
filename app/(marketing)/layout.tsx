import { type PropsWithChildren } from 'react'
import { Header } from '@marketing/_ui/header'
import { Footer } from '@marketing/_ui/footer'

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
