import '@/app/globals.css'
import './index.css'
import { type Preview } from '@storybook/react'
import { cn } from '@shared/lib/utils'
import { variables } from '@shared/lib/fonts'
import { StoryDecorator } from '@/.storybook/ui/story.decorator'

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={cn('font-base antialiased', variables)}>
        <StoryDecorator>
          <Story />
        </StoryDecorator>
        <StoryDecorator className="dark">
          <Story />
        </StoryDecorator>
      </div>
    ),
  ],
} satisfies Preview

export default preview
