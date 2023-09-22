import { PoweredByVercelBanner } from '@shared/ui/powered-by-vercel-banner'
import { BuiltByBanner } from '@shared/ui/built-by-banner'

export function Footer() {
  return (
    <footer>
      <div className="container flex flex-col items-start justify-center gap-2 py-2 sm:items-stretch md:flex-row md:gap-4 lg:py-4">
        <BuiltByBanner className="md:order-1" />
        <PoweredByVercelBanner />
      </div>
    </footer>
  )
}
