import { ControlledInput } from '@/components/controlled'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { useCreateNewPassword } from '@/features/auth/ui/createNewPasswordForm/useCreateNewPassword'
import { DevTool } from '@hookform/devtools'
import { clsx } from 'clsx'

import s from './createNewPasswordForm.module.scss'

type Props = {
  onSubmit: () => void
}
export const CreateNewPasswordForm = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useCreateNewPassword()
  const classNames = {
    confirmButton: clsx(s.confirmButton),
    container: clsx(s.container),
    createNewPasswordLabel: clsx(s.createNewPassword),
    form: clsx(s.form),
    formHeader: clsx(s.formHeader),
    input: clsx(s.input),
  }

  return (
    <Card className={classNames.container}>
      <Typography className={classNames.formHeader} variant={'large'}>
        Create new Password
      </Typography>
      <form className={classNames.form} onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        <ControlledInput
          control={control}
          label={'Password'}
          name={'password'}
          placeholder={'Password'}
          variant={'password'}
        />
        <Typography className={classNames.createNewPasswordLabel} variant={'body2'}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button className={classNames.confirmButton} fullWidth type={'submit'}>
          Create new Password
        </Button>
      </form>
    </Card>
  )
}
