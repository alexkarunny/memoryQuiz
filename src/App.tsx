import { LogOutIcon } from '@/assets'
import { Avatar } from '@/components/ui/avatar'
import { Dropdown } from '@/components/ui/dropdown'
import { DropdownWithAvatar } from '@/components/ui/dropdown/dropdownAvatar'
import { DropdownItem, DropdownItemWithIcon } from '@/components/ui/dropdown/dropdownItem'

export function App() {
  return (
    <>
      <Dropdown
        align={'end'}
        trigger={
          <Avatar
            image={
              'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
            }
          />
        }
      >
        <DropdownItem>
          <DropdownWithAvatar
            avatar={
              'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
            }
            mail={'IvanMain@gmail.com'}
            name={'Ivan'}
          />
        </DropdownItem>
        <DropdownItemWithIcon icon={<LogOutIcon />} label={'Sign Out'} />
      </Dropdown>
    </>
  )
}
