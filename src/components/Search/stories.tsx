import { Story, Meta } from '@storybook/react/types-6-0'
import Search from '.'

export default {
  title: 'Search',
  component: Search,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = () => <Search />
