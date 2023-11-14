import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'password', 'search'],
    },
  },
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    labelText: 'Label',
    variant: 'primary',
  },
}
export const Icon: Story = {
  args: {
    labelText: 'Label',
    variant: 'password',
  },
}

export const Search: Story = {
  args: {
    variant: 'search',
  },
}
