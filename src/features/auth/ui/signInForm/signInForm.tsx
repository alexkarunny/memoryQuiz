import { ControlledCheckbox, ControlledInput } from '@/components/controlled'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { SignInFormValues, useSignIn } from '@/features/auth/ui/signInForm/useSignIn'
import { DevTool } from '@hookform/devtools'
import { clsx } from 'clsx'

import s from './signInForm.module.scss'

type Props = {
  onSubmit: (data: SignInFormValues) => void
}
export const SignInForm = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useSignIn()
  const classNames = {
    confirmButton: clsx(s.confirmButton),
    container: clsx(s.container),
    dontHaveAccLabel: clsx(s.dontHaveAcc),
    forgotPasswordLabel: clsx(s.forgotPassword),
    form: clsx(s.form),
    formHeader: clsx(s.formHeader),
    input: clsx(s.input),
    signUp: clsx(s.signUp),
  }

  return (
    <Card className={classNames.container}>
      <Typography as={'h1'} className={classNames.formHeader} variant={'large'}>
        Sign In
      </Typography>
      <form className={classNames.form} onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        <ControlledInput control={control} label={'Email'} name={'email'} placeholder={'Email'} />
        <ControlledInput
          className={classNames.input}
          control={control}
          label={'Password'}
          name={'password'}
          placeholder={'Password'}
          variant={'password'}
        />
        <ControlledCheckbox
          control={control}
          label={'Remember me'}
          name={'rememberMe'}
          position={'left'}
        />
        <Typography as={'a'} className={classNames.forgotPasswordLabel} variant={'body2'}>
          Forgot Password?
        </Typography>
        <Button className={classNames.confirmButton} fullWidth type={'submit'}>
          Sign In
        </Button>
      </form>
      <Typography className={classNames.dontHaveAccLabel} variant={'body2'}>
        Don&apos;t have an account?
      </Typography>
      <Button as={'a'} className={classNames.signUp} variant={'link'}>
        Sign Up
      </Button>
    </Card>
  )
}
