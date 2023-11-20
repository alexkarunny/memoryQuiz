import { Select } from '@/components/ui/select/Select'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const items = [
  { title: 'one', value: 'first' },
  { title: 'two', value: 'second' },
  { title: 'three', value: 'three' },
]

export const Default: Story = {
  args: {
    disabled: false,
    items: items,
    open: true,
    value: 'Hello',
    variant: 'default',
  },
}
