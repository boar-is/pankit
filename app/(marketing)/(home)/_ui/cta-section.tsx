import { SessionButton } from '@marketing/_ui/session-button'
import { Spotlight, SpotlightItem } from '@shared/ui/spotlight'

export function CtaSection() {
  return (
    <Spotlight
      color="blue"
      asParent
    >
      <SpotlightItem>
        <article className="space-y-8 overflow-hidden bg-gradient-to-br from-muted to-transparent py-32 md:space-y-12">
          <header className="container space-y-4 text-center md:max-w-4xl">
            <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">
              <span className="text-muted-foreground">
                You made it this far!
              </span>
              <br />
              Wanna see the Dashboard?
            </h2>
          </header>

          <menu className="container max-w-sm">
            <SessionButton
              className="w-full"
              size="large"
            />
          </menu>
        </article>
      </SpotlightItem>
    </Spotlight>
  )
}
