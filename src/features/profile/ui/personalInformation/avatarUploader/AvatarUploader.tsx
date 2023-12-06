import { EditIcon } from '@/assets'
import { Avatar } from '@/components/ui/avatar'
import { IconButton } from '@/components/ui/iconButton/iconButton'
import { Uploader } from '@/components/ui/uploader'
import { useUpdateProfileMutation } from '@/features/auth/api'

type AvatarUploaderProps = {
  avatar?: string
  className?: string
  edit?: boolean
}

import s from './AvatarUploader.module.scss'
export const AvatarUploader = ({ avatar, className, edit }: AvatarUploaderProps) => {
  const [updateProfile] = useUpdateProfileMutation()

  const onLoadCover = async (data: File) => {
    const formData = new FormData()

    await formData.append('avatar', data)
    updateProfile(formData)
  }

  const classNames = {
    edit: s.edit,
    root: (s.root, className),
    uploader: s.uploader,
  }

  return (
    <div className={classNames.root}>
      <Avatar image={avatar} size={'large'} />
      {edit && (
        <Uploader className={classNames.uploader} onLoadCover={onLoadCover} onLoadError={() => {}}>
          <IconButton className={classNames.edit} icon={<EditIcon />} />
        </Uploader>
      )}
    </div>
  )
}
