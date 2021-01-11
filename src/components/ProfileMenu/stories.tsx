import { Story, Meta } from '@storybook/react/types-6-0'
import ProfileMenu, { ProfileMenuProps } from '.'

export default {
  title: 'Profile/ProfileMenu',
  component: ProfileMenu,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<ProfileMenuProps>

export const Default: Story<ProfileMenuProps> = (args) => (
  <ProfileMenu {...args} />
)
