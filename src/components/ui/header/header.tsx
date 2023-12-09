import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { LogOutIcon, Logo, ProfileAvatarIcon } from '@/assets'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './header.module.scss'

import { Avatar } from '../avatar'
import { Dropdown } from '../dropdown'
import { DropdownWithAvatar } from '../dropdown/dropdownAvatar'
import { DropdownItem, DropdownItemWithIcon } from '../dropdown/dropdownItem'
type Props = { className?: string; isAuth?: boolean } & ComponentPropsWithoutRef<'div'>

export const Header = forwardRef<ElementRef<'div'>, Props>(({ className }, ref) => {
  const classNames = {
    avatarContainer: clsx(s.avatarContainer),
    headerContainer: clsx(s.headerContainer),
    logo: clsx(s.logo),
    root: clsx(s.root, className),
    userName: clsx(s.userName),
  }

  const isAuth = true

  return (
    <header className={classNames.root} ref={ref}>
      <div className={classNames.headerContainer}>
        <Logo className={classNames.logo} />
        {isAuth ? (
          <div className={classNames.avatarContainer}>
            <Typography className={classNames.userName} variant={'subtitle1'}>
              Ivan
            </Typography>
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
              <DropdownItemWithIcon icon={<ProfileAvatarIcon />} label={'My Profile'} />
              <DropdownItemWithIcon icon={<LogOutIcon />} label={'Sign Out'} />
            </Dropdown>
          </div>
        ) : (
          <Button variant={'primary'}>Sign In</Button>
        )}
      </div>
    </header>
  )
})
