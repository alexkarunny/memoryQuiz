import { ArrowMiniUpIcon, EditIcon, PlayIcon, ThrashIcon } from '@/assets'
import { Table } from '@/components/ui/table/table'
import { Meta, StoryObj } from '@storybook/react'

import { Typography } from '../typography'

const meta = {
  component: Table.Root,
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof Table.Root>

export default meta
type Story = StoryObj<typeof meta>

const ArgForMap = [
  { Cards: 4, CreatedBy: 'Ivan Ivanov', LastUpdated: '18.03.2021', Name: 'Pack Name', id: '1' },
  { Cards: 4, CreatedBy: 'Ivan Ivanov', LastUpdated: '18.03.2021', Name: 'Pack Name', id: '2' },
  { Cards: 4, CreatedBy: 'Ivan Ivanov', LastUpdated: '18.03.2021', Name: 'Pack Name', id: '3' },
  { Cards: 4, CreatedBy: 'Ivan Ivanov', LastUpdated: '18.03.2021', Name: 'Pack Name', id: '4' },
  { Cards: 4, CreatedBy: 'Ivan Ivanov', LastUpdated: '18.03.2021', Name: 'Pack Name', id: '5' },
]

export const Default: Story = {
  args: {
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell variant={'columnName'}>
              <Typography variant={'subtitle2'}>{'Name'}</Typography>
            </Table.HeadCell>
            <Table.HeadCell variant={'columnName'}>
              <Typography variant={'subtitle2'}>{'Cards'}</Typography>
            </Table.HeadCell>
            <Table.HeadCell variant={'columnNameIcon'}>
              <Typography variant={'subtitle2'}>{'Last Updated'}</Typography>
              <ArrowMiniUpIcon />
            </Table.HeadCell>
            <Table.HeadCell variant={'columnName'}>
              <Typography variant={'subtitle2'}>{'Created by'}</Typography>
            </Table.HeadCell>
            <Table.HeadCell />
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {ArgForMap.map(data => (
            <Table.Row key={data.id}>
              <Table.Cell variant={'cellText'}>
                <Typography variant={'body2'}>{data.Name}</Typography>
              </Table.Cell>
              <Table.Cell variant={'cellText'}>
                <Typography variant={'body2'}>{data.Cards}</Typography>
              </Table.Cell>
              <Table.Cell variant={'cellText'}>
                <Typography variant={'body2'}>{data.LastUpdated}</Typography>
              </Table.Cell>
              <Table.Cell variant={'cellText'}>
                <Typography variant={'body2'}>{data.CreatedBy}</Typography>
              </Table.Cell>
              <Table.Cell variant={'cellIcons'}>
                <PlayIcon />
                <EditIcon />
                <ThrashIcon />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </>
    ),
  },

  render: args => <Table.Root {...args} />,
}
