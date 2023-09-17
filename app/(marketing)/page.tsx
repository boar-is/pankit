import { Login } from '@/app/login'
import { getSession } from '@/core/auth'

export default async function Home() {
  const session = await getSession()
  return (
    <main className="p-64">
      <Login session={session} />
    </main>
  )
}
