import { Meta, StoryObj } from '@storybook/react'

import { RecoverPasswordForm } from './recoverPasswordForm'

const meta = {
  component: RecoverPasswordForm,
  tags: ['autodocs'],
  title: 'Auth/RecoverPasswordForm',
} satisfies Meta<typeof RecoverPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
