import { ControlledInput } from '@/components/controlled'
import { Button } from '@/components/ui/button'
import {
  ChangeNameFormValues,
  useChangeName,
} from '@/features/profile/ui/personalInformation/changeNameForm/useChangeName'
import clsx from 'clsx'

import s from './changeNameForm.module.scss'

type Props = {
  onSubmit: (data: ChangeNameFormValues) => void
}
export const ChangeNameForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { isSubmitSuccessful },
    handleSubmit,
  } = useChangeName()

  const classNames = {
    field: clsx(isSubmitSuccessful ? s.withErrors : s.field),
    form: clsx(s.form),
    submit: clsx(s.submit),
  }

  return (
    <form className={classNames.form} onSubmit={handleSubmit(onSubmit)}>
      <ControlledInput
        className={classNames.field}
        control={control}
        label={'Nickname'}
        name={'name'}
        placeholder={'Nickname'}
      />
      <Button className={s.submit} fullWidth type={'submit'}>
        Save Changes
      </Button>
    </form>
  )
}
