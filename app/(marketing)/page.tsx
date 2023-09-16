import { Login } from '@/app/login'
import { getSession } from '@/core/auth'

export default async function Home() {
  const session = await getSession()
  return (
    <main>
      <Login session={session} />
    </main>
  )
}
