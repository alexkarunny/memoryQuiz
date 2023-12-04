import { ResetPasswordForm } from '@/features/auth/ui/resetPasswordForm/resetPasswordForm'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: ResetPasswordForm,
  tags: ['autodocs'],
  title: 'Auth/CreateNewPassword',
} satisfies Meta<typeof ResetPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
