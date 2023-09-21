import { Hero } from '@marketing/(home)/_ui/hero'
import { Features } from '@marketing/(home)/_ui/features'

export default async function Page() {
  return (
    <div className="py-12 md:py-24">
      <Hero />
      <Features />
    </div>
  )
}
