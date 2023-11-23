import { Meta, StoryObj } from '@storybook/react'
import {SignUpForm} from '@/features/auth/ui/signUp/signUpForm.tsx';

const meta = {
    title: 'Auth/signUp',
    component: SignUpForm,
    tags: ['autodocs'],
} satisfies Meta<typeof SignUpForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
