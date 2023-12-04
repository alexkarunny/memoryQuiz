import { CheckEmail } from '@/features/auth/ui/checkEmail/checkEmail'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: CheckEmail,
  tags: ['autodocs'],
  title: 'Auth/CheckMail',
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    email: 'randomEmail.com',
  },
}
