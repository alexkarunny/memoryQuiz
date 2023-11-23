import { ControlledInput } from '@/components/controlled'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { SignUpFormValues, useSignUp } from '@/features/auth/ui/signUp/useSignUp'
import { DevTool } from '@hookform/devtools'
import { clsx } from 'clsx'

import s from './signUpForm.module.scss'

type Props = {
  onSubmit: (data: SignUpFormValues) => void
}

export const SignUpForm = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useSignUp()

  const classNames = {
    alreadyHaveAccLabel: clsx(s.alreadyHave),
    confirmButton: clsx(s.confirmButton),
    container: clsx(s.container),
    form: clsx(s.form),
    formHeader: clsx(s.formHeader),
    signIn: clsx(s.signIn),
  }

  return (
    <Card className={classNames.container}>
      <Typography as={'h1'} className={classNames.formHeader} variant={'large'}>
        Sign Up
      </Typography>
      <form className={classNames.form} onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        <ControlledInput control={control} label={'Email'} name={'email'} placeholder={'Email'} />
        <ControlledInput
          control={control}
          label={'Password'}
          name={'password'}
          placeholder={'Password'}
          variant={'password'}
        />
        <ControlledInput
          control={control}
          label={'Confirm Password'}
          name={'confirmPassword'}
          placeholder={'Confirm Password'}
          variant={'password'}
        />
        <Button className={classNames.confirmButton} fullWidth type={'submit'}>
          Sign Up
        </Button>
      </form>
      <Typography className={classNames.alreadyHaveAccLabel}>Already have an account?</Typography>
      <Button as={'a'} className={classNames.signIn} variant={'link'}>
        Sign In
      </Button>
    </Card>
  )
}
