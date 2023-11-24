import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { useSignIn } from '@/features/auth/ui/signIn/useSignIn'
import { DevTool } from '@hookform/devtools'
import { clsx } from 'clsx'

import s from './forgotPassword.module.scss'

type PropsType = {}

export const ForgotPassword = (props: PropsType) => {
  const { control, handleSubmit } = useSignIn()
  const classNames = {
    container: clsx(s.container),
    emailInstructions: clsx(s.emailInstructions),
    form: clsx(s.form),
    rememberInstruction: clsx(s.rememberInstruction),
    sendInstructions: clsx(s.sendInstructions),
    tryLogging: clsx(s.tryLogging),
  }
  const onSubmit = () => console.log(props)

  return (
    <>
      <Card className={classNames.container}>
        <Typography as={'h1'} className={s.lol} variant={'large'}>
          Forgot your password?
        </Typography>
        <form className={classNames.form} onSubmit={handleSubmit(onSubmit)}>
          <DevTool control={control} />
          {/*<ControlledTextField*/}
          {/*  control={control}*/}
          {/*  label={'Email'}*/}
          {/*  name={'email'}*/}
          {/*  placeholder={'Email'}*/}
          {/*/>*/}
          <Typography as={'p'} className={classNames.emailInstructions} variant={'body2'}>
            Enter your email address and we will send you further instructions
          </Typography>
          <Button className={classNames.sendInstructions} fullWidth type={'submit'}>
            Send Instructions
          </Button>
        </form>
        <Typography className={classNames.rememberInstruction} variant={'body2'}>
          Did you remember your password?
        </Typography>
        <Button as={'a'} className={classNames.tryLogging} variant={'link'}>
          Try logging in
        </Button>
      </Card>
    </>
  )
}
