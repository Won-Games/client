import { Story, Meta } from '@storybook/react/types-6-0'
import { MockedProvider } from '@apollo/client/testing'
import FormSignUp from '.'

export default {
  title: 'Form/FormSignUp',
  component: FormSignUp
} as Meta

export const Default: Story = () => (
  <div style={{ width: 300, margin: 'auto' }}>
    <MockedProvider>
      <FormSignUp />
    </MockedProvider>
  </div>
)
