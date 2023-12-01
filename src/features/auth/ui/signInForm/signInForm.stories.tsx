import type { Meta, StoryObj } from '@storybook/react'

import { SignInForm } from '@/features/auth/ui/signInForm/signInForm'

const meta = {
  component: SignInForm,
  tags: ['autodocs'],
  title: 'Auth/SignIn',
} satisfies Meta<typeof SignInForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
