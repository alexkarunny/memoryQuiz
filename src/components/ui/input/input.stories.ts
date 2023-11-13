import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'icon', 'search'],
    },
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Input',
    labelText: 'Label',
    variant: 'primary',
  },
}
export const Icon: Story = {
  args: {
    children: 'Icon',
    labelText: 'Label',
    variant: 'icon',
  },
}

export const Search: Story = {
  args: {
    children: 'Search',
    variant: 'search',
  },
}
