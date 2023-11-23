import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['password', 'search'],
    },
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Input',
    placeholder: 'Input',
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
