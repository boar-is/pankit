import { WorkInProgress } from '@/components/work-in-progress'
import { getServerSession } from 'next-auth'
import { SignOutButton } from '@/app/(marketing)/dashboard/sign-out-button'

export default async function Page() {
  const session = await getServerSession()
  return (
    <div className="container flex flex-col gap-8 py-16">
      <WorkInProgress />
      {session && <SignOutButton />}
    </div>
  )
}
