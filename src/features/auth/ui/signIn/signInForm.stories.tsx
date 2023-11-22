import type { Meta, StoryObj } from '@storybook/react'

import { SignInForm } from '@/features/auth/ui/signIn/signInForm'

const meta = {
  component: SignInForm,
  tags: ['autodocs'],
  title: 'Auth/signIn',
} satisfies Meta<typeof SignInForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
