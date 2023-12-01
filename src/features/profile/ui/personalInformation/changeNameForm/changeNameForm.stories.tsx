import { ChangeNameForm } from '@/features/profile/ui/personalInformation/changeNameForm/changeNameForm'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: ChangeNameForm,
  tags: ['autodocs'],
  title: 'Profile/ChangeNameForm',
} satisfies Meta<typeof ChangeNameForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
