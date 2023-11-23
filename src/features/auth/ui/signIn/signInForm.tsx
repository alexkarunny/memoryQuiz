import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { SignInFormValues, useSignIn } from '@/features/auth/ui/signIn/useSignIn'
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
    signUp: clsx(s.signUp),
  }

  return (
    <Card className={classNames.container}>
      <Typography as={'h1'} variant={'large'}>
        Sign In
      </Typography>
      <form className={classNames.form} onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        {/*<ControlledTextField*/}
        {/*  control={control}*/}
        {/*  label={'Email'}*/}
        {/*  name={'email'}*/}
        {/*  placeholder={'Email'}*/}
        {/*/>*/}
        {/*<ControlledTextField*/}
        {/*  control={control}*/}
        {/*  label={'Password'}*/}
        {/*  name={'password'}*/}
        {/*  placeholder={'Password'}*/}
        {/*/>*/}
        {/*<ControlledCheckbox control={control} label={'rememberMe'} name={'rememberMe'} />*/}
        <Typography as={'a'} className={classNames.forgotPasswordLabel} variant={'body2'}>
          Forgot Password?
        </Typography>
        <Button className={classNames.confirmButton} fullWidth type={'submit'}>
          Sign In
        </Button>
      </form>
      <Typography className={classNames.dontHaveAccLabel} variant={'body2'}>
        Don't have an account?
      </Typography>
      <Button as={'a'} className={classNames.signUp} variant={'link'}>
        Sign Up
      </Button>
    </Card>
  )
}
