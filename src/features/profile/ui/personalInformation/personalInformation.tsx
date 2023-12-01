import { useState } from 'react'

import { Avatar } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { ChangeNameFormValues } from '@/features/profile/ui/personalInformation/changeNameForm/useChangeName'
import { ProfileInfo } from '@/features/profile/ui/personalInformation/profileInfo'
import { clsx } from 'clsx'

import s from './personalInformation.module.scss'

import { ChangeNameForm } from './changeNameForm'
export const PersonalInformation = () => {
  const classNames = {
    avatar: clsx(s.avatar),
    container: clsx(s.container),
    label: clsx(s.label),
  }

  const [edit, setEdit] = useState(false)
  const onSubmit = (data: ChangeNameFormValues) => {
    console.log(data)
    setEdit(false)
  }

  const EditHandler = () => setEdit(true)

  return (
    <Card className={classNames.container}>
      <Typography className={classNames.label} variant={'large'}>
        Personal Information
      </Typography>
      <Avatar
        image={
          'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
        }
        size={'large'}
      />
      {edit ? (
        <ChangeNameForm onSubmit={onSubmit} />
      ) : (
        <ProfileInfo EditHandler={EditHandler} email={'Ivan@mail.com'} name={'Ivan'} />
      )}
    </Card>
  )
}
