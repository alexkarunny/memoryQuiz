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
    label: 'Input',
    placeholder: 'Input',
    variant: 'primary',
  },
}
export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Password',
    variant: 'password',
  },
}

export const Search: Story = {
  args: {
    placeholder: 'Search',
    variant: 'search',
  },
}
