import { EditIcon, LogOutIcon, PlayIcon, ProfileAvatarIcon, ThrashIcon } from '@/assets'
import { Avatar } from '@/components/ui/avatar'
import { Dropdown } from '@/components/ui/dropdown/Dropdown'
import { DropdownWithAvatar } from '@/components/ui/dropdown/dropdownAvatar/DropdownAvatar'
import {
  DropdownItem,
  DropdownItemWithIcon,
} from '@/components/ui/dropdown/dropdownItem/DropdownItems'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Dropdown,
  tags: ['autodocs'],
  title: 'Components/Dropdown',
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <DropdownItemWithIcon icon={<PlayIcon />} label={'Learn'} />
        <DropdownItemWithIcon icon={<EditIcon />} label={'Edit'} />
        <DropdownItemWithIcon icon={<ThrashIcon />} label={'Delete'} />
      </>
    ),
    trigger: (
      <Avatar
        image={
          'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
        }
      />
    ),
  },
}

export const WithAvatar: Story = {
  args: {
    children: (
      <>
        <DropdownItem>
          <DropdownWithAvatar
            avatar={'https://ionicframework.com/docs/img/demos/avatar.svg'}
            mail={'IvanMain@gmail.com'}
            name={'Ivan'}
          />
        </DropdownItem>
        <DropdownItemWithIcon icon={<ProfileAvatarIcon />} label={'My Profile'} />
        <DropdownItemWithIcon icon={<LogOutIcon />} label={'Sign Out'} />
      </>
    ),
  },
}
