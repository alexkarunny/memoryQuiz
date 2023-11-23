import { SignUpForm } from '@/features/auth/ui/signUp/signUpForm'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: SignUpForm,
  tags: ['autodocs'],
  title: 'Auth/signUp',
} satisfies Meta<typeof SignUpForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
