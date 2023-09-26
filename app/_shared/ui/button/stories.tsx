import { type Meta, type StoryObj } from '@storybook/react'
import {
  Button,
  ButtonDecoration,
  ButtonLoadingIndicator,
  buttonVariants,
} from '@shared/ui/button'
import {
  ArrowRightIcon,
  ArrowUpIcon,
  HeartIcon,
  ThumbsUpIcon,
} from 'lucide-react'
import { keysInlineRadioArg } from '@/.storybook/lib/utils'

const meta = {
  title: 'UI / Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: keysInlineRadioArg(buttonVariants.variants.variant),
    size: keysInlineRadioArg(buttonVariants.variants.size),
  },
} satisfies Meta<typeof Button>
export default meta

type Story = StoryObj<typeof meta>

export const ByVariant = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
}

export const BySize = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button
        variant="primary"
        size="small"
      >
        Small
      </Button>
      <Button
        variant="primary"
        size="medium"
      >
        Medium
      </Button>
      <Button
        variant="primary"
        size="large"
      >
        Large
      </Button>
    </div>
  ),
}

export const Icon = {
  args: {
    variant: 'tertiary',
  },
  render: (props) => (
    <Button {...props}>
      <ButtonDecoration>
        <HeartIcon />
      </ButtonDecoration>
    </Button>
  ),
} satisfies Story

export const WithPrefix = {
  args: {
    variant: 'tertiary',
  },
  render: (props) => (
    <Button {...props}>
      <ButtonDecoration>
        <ThumbsUpIcon />
      </ButtonDecoration>
      Like
    </Button>
  ),
} satisfies Story

export const WithSuffix = {
  args: {
    variant: 'secondary',
  },
  render: (props) => (
    <Button {...props}>
      Upload
      <ButtonDecoration>
        <ArrowUpIcon />
      </ButtonDecoration>
    </Button>
  ),
} satisfies Story

export const Loading = {
  args: {
    variant: 'primary',
    loading: true,
  },
  render: (props) => (
    <Button {...props}>
      <ButtonLoadingIndicator />
      Please wait
    </Button>
  ),
} satisfies Story

export const JustifyBetween = {
  args: {
    variant: 'primary',
  },
  render: (props) => (
    <Button
      className="w-36 justify-between"
      {...props}
    >
      Go Pro
      <ButtonDecoration>
        <ArrowRightIcon />
      </ButtonDecoration>
    </Button>
  ),
} satisfies Story
