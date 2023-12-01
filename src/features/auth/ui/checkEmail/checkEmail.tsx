import { Email } from '@/assets'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from '@/features/auth/ui/checkEmail/checkEmail.module.scss'

export const CheckEmail = () => {
  const classNames = {
    checkMailLabel: clsx(s.checkMailLabel),
    confirmButton: clsx(s.confirmButton),
    container: clsx(s.container),
    instructionsLabel: clsx(s.instructionsLabel),
  }

  return (
    <Card className={classNames.container}>
      <Typography as={'h1'} className={classNames.checkMailLabel} variant={'large'}>
        Check Email
      </Typography>
      <Email z-index={100} />
      <Typography className={classNames.instructionsLabel} variant={'body2'}>
        We’ve sent an Email with instructions to example@mail.com
      </Typography>
      <Button className={classNames.confirmButton} fullWidth>
        Back to sign In
      </Button>
    </Card>
  )
}
