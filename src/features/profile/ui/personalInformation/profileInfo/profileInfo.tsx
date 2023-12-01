import { EditIcon, LogOutIcon } from '@/assets'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './profileInfo.module.scss'

type Props = {
  EditHandler: () => void
  email: string
  name: string
}

export const ProfileInfo = ({ EditHandler, email, name }: Props) => {
  const classNames = {
    buttonLabel: clsx(s.buttonLabel),
    container: clsx(s.container),
    email: clsx(s.email),
    logoutButton: clsx(s.logoutButton),
    name: clsx(s.name),
  }

  return (
    <div className={classNames.container}>
      <Typography className={classNames.name} variant={'h1'}>
        {name}
        <EditIcon onClick={EditHandler} />
      </Typography>
      <Typography className={classNames.email} variant={'body2'}>
        {email}
      </Typography>
      <Button className={s.logoutButton} variant={'secondary'}>
        <LogOutIcon size={16} />
        <Typography className={classNames.buttonLabel} variant={'subtitle2'}>
          Logout
        </Typography>
      </Button>
    </div>
  )
}
