import { Page } from '@/components/ui/page/page'
import { RecoverPasswordForm } from '@/features/auth/ui/recoverPasswordForm/recoverPasswordForm'
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
    children: <RecoverPasswordForm onSubmit={console.log} />,
  },
}
