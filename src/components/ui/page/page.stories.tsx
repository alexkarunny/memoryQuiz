import { Page } from '@/components/ui/page/page'
import { ForgotPasswordForm } from '@/features/auth/ui/forgotPassword/forgotPasswordForm.tsx'
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
    children: <ForgotPasswordForm onSubmit={console.log} />,
  },
}
