import '@/app/globals.css'
import './index.css'
import { type Preview } from '@storybook/react'
import { cn } from '@shared/lib/utils'
import { variables } from '@shared/lib/fonts'

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
      <div
        className={cn(
          'bg-background p-4 font-base text-foreground antialiased',
          variables,
        )}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Preview

export default preview
