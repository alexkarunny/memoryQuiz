import type { Meta, StoryObj } from '@storybook/react'

import { ForgotPassword } from '@/features/auth/ui/forgotPassword/forgotPassword'

const meta = {
  component: ForgotPassword,
  tags: ['autodocs'],
  title: 'Auth/forgotPassword',
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
