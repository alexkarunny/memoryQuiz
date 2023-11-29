import { GoBack } from '@/components/ui/goBack/goBack'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: GoBack,
  tags: ['autodocs'],
  title: 'Components/GoBack',
} satisfies Meta<typeof GoBack>

export default meta
type Story = StoryObj<typeof meta>

export const Defautl: Story = {
  args: {},
}
