import { Login } from '@/app/login'
import { getSession } from '@/core'

export default async function Home() {
  const session = await getSession()
  return (
    <main>
      <Login session={session} />
    </main>
  )
}
