import { Meta, StoryObj } from '@storybook/react'
import {Panel} from '@/components/ui/panel/panel.tsx';

const meta = {
    component: Panel,
    tags: ['autodocs'],
    title: 'Components/Panel',
} satisfies Meta<typeof Panel>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
