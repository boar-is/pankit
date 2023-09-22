import {
  BoxIcon,
  DatabaseIcon,
  EditIcon,
  FingerprintIcon,
  MoonIcon,
  ShieldIcon,
} from 'lucide-react'
import {
  EsLintIcon,
  GitIcon,
  NextraIcon,
  PrettierIcon,
  ReactIcon,
  StripeIcon,
  T3Icon,
  TailwindIcon,
  TypeScriptIcon,
  VercelEdgeIcon,
} from '@shared/ui/icons'
import { type ReactNode } from 'react'
import { type BentoGridVariantProps } from '@shared/ui/bento-grid'
import { type SpotlightVariantProps } from '@shared/ui/spotlight'

type FeatureSection = {
  title: string
  bentoVariant: BentoGridVariantProps['variant']
  spotlightColor: SpotlightVariantProps['color']
  items: Array<{
    icon: ReactNode
    title: string
    comingSoon?: boolean
    content: ReactNode
  }>
}

export const featureSections: FeatureSection[] = [
  {
    title: 'Server Features',
    bentoVariant: 1,
    spotlightColor: 'blue',
    items: [
      {
        icon: <BoxIcon className="md:h-32 md:w-32" />,
        title: 'App Router',
        content: (
          <p className="md:max-w-sm">
            Built on <em>React Server Components</em>, which supports shared
            layouts, nested routing, loading states, error handling, and more.
          </p>
        ),
      },
      {
        icon: <VercelEdgeIcon />,
        title: 'Multi-Tenancy',
        comingSoon: true,
        content: (
          <p>
            Custom domains, subdomains, and SSL certificates using the{' '}
            <em>Vercel Domains API</em>.
          </p>
        ),
      },
      {
        icon: <ShieldIcon />,
        title: 'Rate-Limiting',
        comingSoon: true,
        content: (
          <p>
            Prevent DoS attacks and limit web scraping using <em>Upstash</em>.
          </p>
        ),
      },
      {
        icon: <FingerprintIcon />,
        title: 'Auth',
        content: (
          <p>
            OAuth 1.0, 1.0A, 2.0 and OpenID Connect via <em>NextAuth</em>.
          </p>
        ),
      },
      {
        icon: <DatabaseIcon />,
        title: 'Database',
        content: <p>Prisma and Vercel Postgres.</p>,
      },
    ],
  },
  {
    title: 'Client Features',
    bentoVariant: 2,
    spotlightColor: 'yellow',
    items: [
      {
        icon: <ReactIcon />,
        title: 'Component System',
        content: (
          <p>
            Inspired by <em>ShadCN</em>, beautifully designed components based
            on <em>Radix UI</em>. Accessible and Customizable.
          </p>
        ),
      },
      {
        icon: <TailwindIcon className="md:h-32 md:w-32" />,
        title: 'Tailwind Variants',
        content: (
          <p>
            Powerful features like, slots, responsive variants, components
            composition, and more.
          </p>
        ),
      },
      {
        icon: <MoonIcon />,
        title: 'Dark Mode',
        content: (
          <p>
            Advanced dark mode using <em>Next Themes</em>, with different colors
            for every theme and type-safety.
          </p>
        ),
      },
    ],
  },
  {
    title: 'DX Features',
    bentoVariant: 3,
    spotlightColor: 'red',
    items: [
      {
        icon: <TypeScriptIcon />,
        title: 'Strict Mode',
        content: (
          <p>
            <em>TypeScript</em> and <em>React Strict Modes</em> with some
            additional compiler flags to make it more stricter.
          </p>
        ),
      },
      {
        icon: <EsLintIcon />,
        title: 'Linters',
        content: (
          <p>
            Strict <em>ESLint</em> rules with all the needed plugins and autofix
            support. Literally a teacher that whacks your hand with a ruler.
          </p>
        ),
      },
      {
        icon: <PrettierIcon />,
        title: 'Formatters',
        content: (
          <p>
            With <em>Prettier</em>, stop debating about code style, better do
            another release.
          </p>
        ),
      },
      {
        icon: <GitIcon />,
        title: 'Git Hooks',
        content: (
          <p>
            Configured pre-commit <em>Git</em> hooks with <em>Husky</em> and{' '}
            <em>Lint Staged</em> that runs <em>ESLint</em> and <em>Prettier</em>{' '}
            with autofix.
          </p>
        ),
      },
      {
        icon: <T3Icon />,
        title: 'Typed Envs',
        content: (
          <p>
            Type-safe environment variables using <em>T3 Env</em>. Validate and
            transform your environment with the full power of <em>Zod</em>.
          </p>
        ),
      },
    ],
  },
  {
    title: 'UX Features',
    bentoVariant: 4,
    spotlightColor: 'green',
    items: [
      {
        icon: <NextraIcon />,
        title: 'Docs',
        comingSoon: true,
        content: (
          <p>
            Build content focused docs with Nextra, plus extra power to create{' '}
            <em>Markdown</em>
            -based content with ease.
          </p>
        ),
      },
      {
        icon: <EditIcon />,
        title: 'Blog',
        comingSoon: true,
        content: (
          <p>
            Write blog posts using <em>Plate</em> and <em>Slate</em>, an
            extensible <em>Notion</em>-like rich-text editor with plugins.
          </p>
        ),
      },
      {
        icon: <StripeIcon />,
        title: 'Subscriptions',
        comingSoon: true,
        content: (
          <p>
            Free and paid subscriptions using <em>Stripe</em>.
          </p>
        ),
      },
    ],
  },
]
