import { Typography } from '@/components/ui/typography'
import { Meta, StoryObj } from '@storybook/react'

import { TabItemType, TabSwitcher } from './tab-switcher'

const meta = {
  component: TabSwitcher,
  tags: ['autodocs'],
  title: 'Components/TabSwitcher',
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>
const lol = [
  { content: 'contents of the tab 6', label: 'Switcher 6', value: 'tab6' },
  { content: 'contents of the tab 7', label: 'Switcher 7', value: 'tab7' },
]

const tabs: TabItemType[] = [
  {
    content: Typography({ children: 'this is Typography', variant: 'body1' }),
    disabled: true,
    label: 'Switcher 1',
    value: 'tab1',
  },
  {
    content: Typography({ children: 'this is too Typography', variant: 'h1' }),
    label: 'Switcher 2',
    value: 'tab2',
  },
  { content: TabSwitcher({ tabs: lol }), label: 'Switcher 3', value: 'tab3' },
  { content: 'contents of the tab 4', label: 'Switcher 4', value: 'tab4' },
  { content: 'contents of the tab 5', label: 'Switcher 5', value: 'tab5' },
]

export const Default: Story = {
  args: {
    tabs,
  },
}
