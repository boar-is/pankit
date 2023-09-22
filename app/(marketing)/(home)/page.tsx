import { Hero } from '@marketing/(home)/_ui/hero'
import { Features } from '@marketing/(home)/_ui/features'
import { CtaSection } from '@marketing/(home)/_ui/cta-section'

export default async function Page() {
  return (
    <div className="pt-12 md:pt-24">
      <Hero />
      <Features />
      <CtaSection />
    </div>
  )
}
