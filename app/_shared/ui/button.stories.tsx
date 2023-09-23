import { Button } from '@shared/ui/button'
import { type Meta, type StoryObj } from '@storybook/react'

const StoryMeta = {
  component: Button,
} satisfies Meta<typeof Button>
export default StoryMeta

type Story = StoryObj<typeof StoryMeta>

export const Solid = {
  args: {
    variant: 'solid',
    children: 'Button',
  },
} satisfies Story
