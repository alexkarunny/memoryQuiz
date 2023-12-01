import { Meta, StoryObj } from '@storybook/react'

import { ProfileInfo } from './profileInfo'

const meta = {
  component: ProfileInfo,
  tags: ['autodocs'],
  title: 'Profile/ProfileInfo',
} satisfies Meta<typeof ProfileInfo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    email: 'ivan@mail.com',
    name: 'Ivan',
  },
}
