import { Page } from '@/components/ui/page/page'
import { ForgotPassword } from '@/features/auth/ui/forgotPassword/forgotPassword'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Page,
  tags: ['autodocs'],
  title: 'Components/Page',
} satisfies Meta<typeof Page>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    children: <ForgotPassword onSubmit={console.log} />,
  },
}
