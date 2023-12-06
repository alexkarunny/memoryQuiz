import { PersonalInformation } from '@/features/profile/ui/personalInformation/personalInformation'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: PersonalInformation,
  tags: ['autodocs'],
  title: 'Profile/PersonalInformation',
} satisfies Meta<typeof PersonalInformation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    avatar: 'https://placehold.jp/3d4070/ffffff/150x150.png ',
  },
}
