import { ArrowMiniUpIcon, EditIcon, PlayIcon, RatingEmptyIcon, ThrashIcon } from '@/assets'
import { CellContent } from '@/components/ui/table/table-primitives/table-primitives'
import { TrashIcon } from '@radix-ui/react-icons'
import { Meta, StoryObj } from '@storybook/react'

import { CheckBox } from '../../checkbox'
import { Typography } from '../../typography'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        'columnName',
        'columnNameIcon',
        'cellText',
        'cellCheckboxText',
        'cellTextIcons',
        'cellIcons',
        'cellGrade',
        'cellPhotoText',
        'cellCheckbox',
      ],
    },
  },
  component: CellContent,
  tags: ['autodocs'],
  title: 'Components/CellContent',
} satisfies Meta<typeof CellContent>

export default meta
type Story = StoryObj<typeof meta>

export const ColumnName: Story = {
  args: {
    children: <Typography variant={'subtitle2'}>{'Name'}</Typography>,
    variant: 'columnName',
  },
}

export const ColumnNameIcon: Story = {
  args: {
    children: (
      <>
        <Typography title={'Name'} variant={'subtitle2'}>
          {'Name'}
        </Typography>
        <ArrowMiniUpIcon />
      </>
    ),
    variant: 'columnNameIcon',
  },
}

export const CellText: Story = {
  args: {
    children: <Typography variant={'body2'}>{'Hello'}</Typography>,
    variant: 'cellText',
  },
}

export const CellCheckboxText: Story = {
  args: {
    children: (
      <>
        <CheckBox />
        <Typography variant={'body2'}>{'Hello'}</Typography>
      </>
    ),
    variant: 'cellCheckboxText',
  },
}

export const CellTextIcons: Story = {
  args: {
    children: (
      <>
        <Typography variant={'body2'}>{'Hello'}</Typography>
        <EditIcon />
        <TrashIcon />
      </>
    ),
    variant: 'cellTextIcons',
  },
}
export const CellIcons: Story = {
  args: {
    children: (
      <>
        <PlayIcon />
        <EditIcon />
        <ThrashIcon />
      </>
    ),
    variant: 'cellIcons',
  },
}

export const CellGrade: Story = {
  args: {
    children: (
      <>
        <RatingEmptyIcon />
        <RatingEmptyIcon />
        <RatingEmptyIcon />
        <RatingEmptyIcon />
        <RatingEmptyIcon />
      </>
    ),
    variant: 'cellGrade',
  },
}

export const CellPhotoText: Story = {
  args: {
    children: (
      <>
        <img
          src={
            'https://images.pexels.com/photos/1557652/pexels-photo-1557652.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          }
        />
        <Typography variant={'body2'}>{'Hello'}</Typography>
        <ThrashIcon />
      </>
    ),
    variant: 'cellPhotoText',
  },
}

export const CellCheckbox: Story = {
  args: {
    children: <CheckBox />,
    variant: 'cellCheckbox',
  },
}
