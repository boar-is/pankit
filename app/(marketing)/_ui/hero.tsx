import { SessionButton } from '@marketing/_ui/session-button'
import { GithubRepoLink } from '@marketing/_ui/github-repo-link'
import {
  InfiniteSlider,
  InfiniteSliderItem,
  InfiniteSliderList,
} from '@shared/ui/infinite-slider'
import { Fader } from '@shared/ui/fader'
import {
  EsLintIcon,
  NextIcon,
  PrettierIcon,
  PrismaIcon,
  ReactIcon,
  StripeIcon,
  TailwindIcon,
  TypeScriptIcon,
  VercelIcon,
} from '@shared/ui/icons'

export function Hero() {
  return (
    <article className="space-y-10">
      <header>
        <hgroup className="container space-y-4 sm:max-w-xl">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            The{' '}
            <span className="relative mx-[0.25ch] italic text-highlight-blue-foreground before:absolute before:inset-0 before:inset-x-[-0.25em] before:left-[-0.1em] before:z-[-1] before:skew-x-[-14deg] before:bg-highlight-blue">
              DXiest
            </span>{' '}
            Starter Kit for Next.js
          </h1>
          <p className="prose-lg font-medium text-muted-foreground sm:prose-xl">
            Focus on developing your idea,
            <br /> instead of configuring up the project
          </p>
        </hgroup>
      </header>
      <menu className="container flex flex-col gap-3 sm:max-w-xl sm:flex-row sm:justify-center">
        <SessionButton
          className="w-full"
          size="large"
        />
        <GithubRepoLink
          className="w-full"
          variant="outline"
          size="large"
        />
      </menu>
      <footer className="container space-y-3 sm:max-w-xl">
        <p className="text-center text-sm font-semibold uppercase text-muted-foreground">
          Connecting techs:
        </p>
        <Fader
          className="w-full"
          color="background"
        >
          <InfiniteSlider>
            <InfiniteSliderList
              fillAmount={10}
              animationDuration="10s"
            >
              <InfiniteSliderItem>
                <NextIcon />
              </InfiniteSliderItem>
              <InfiniteSliderItem>
                <ReactIcon />
              </InfiniteSliderItem>
              <InfiniteSliderItem>
                <TailwindIcon />
              </InfiniteSliderItem>
              <InfiniteSliderItem>
                <PrismaIcon />
              </InfiniteSliderItem>
              <InfiniteSliderItem>
                <EsLintIcon />
              </InfiniteSliderItem>
              <InfiniteSliderItem>
                <TypeScriptIcon />
              </InfiniteSliderItem>
              <InfiniteSliderItem>
                <PrettierIcon />
              </InfiniteSliderItem>
              <InfiniteSliderItem>
                <VercelIcon />
              </InfiniteSliderItem>
              <InfiniteSliderItem>
                <StripeIcon />
              </InfiniteSliderItem>
            </InfiniteSliderList>
          </InfiniteSlider>
        </Fader>
      </footer>
    </article>
  )
}
