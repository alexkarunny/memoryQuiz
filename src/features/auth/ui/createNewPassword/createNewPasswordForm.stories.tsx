import { Meta, StoryObj } from '@storybook/react'
import {CreateNewPasswordForm} from '@/features/auth/ui/createNewPassword/createNewPasswordForm';

const meta = {
    component: CreateNewPasswordForm,
    tags: ['autodocs'],
    title: 'Auth/CreateNewPassword',
} satisfies Meta<typeof CreateNewPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
