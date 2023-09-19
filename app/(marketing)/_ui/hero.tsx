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
    <article className="flex flex-col gap-10">
      <header>
        <hgroup className="container flex flex-col gap-4">
          <h1 className="text-4xl font-extrabold tracking-tight">
            The{' '}
            <span className="relative text-highlight-blue-foreground before:absolute before:-inset-1 before:z-[-1] before:skew-x-[-20deg]  before:bg-highlight-blue">
              DXiest
            </span>{' '}
            Starter Kit for Next.js
          </h1>
          <p className="prose-lg font-medium text-muted-foreground">
            Focus on developing your idea,
            <br /> instead of configuring up the project
          </p>
        </hgroup>
      </header>
      <menu className="container flex flex-col gap-4">
        <SessionButton size="large" />
        <GithubRepoLink
          variant="outline"
          size="large"
        />
      </menu>
      <footer className="flex flex-col items-center gap-3">
        <p className="text-sm font-semibold uppercase text-muted-foreground">
          Connecting techs:
        </p>
        <Fader
          className="w-full max-w-lg"
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
