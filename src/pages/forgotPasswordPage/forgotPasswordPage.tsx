import { useState } from 'react'

import { Page } from '@/components/ui/page'
import { RecoverPasswordParamsType, useRecoverPasswordMutation } from '@/features/auth/api'
import { CheckEmail } from '@/features/auth/ui/checkEmail'
import { ForgotPasswordForm } from '@/features/auth/ui/forgotPasswordForm'

export const ForgotPasswordPage = () => {
  const [forgotPassword, { isSuccess }] = useRecoverPasswordMutation()
  const [email, setEmail] = useState('')
  const forgotPasswordHandler = ({ email }: RecoverPasswordParamsType) => {
    forgotPassword({ email })
    if (isSuccess) {
      setEmail(email)
    }
  }

  return (
    <Page>
      {!isSuccess && <ForgotPasswordForm onSubmit={forgotPasswordHandler} />}
      {isSuccess && <CheckEmail email={email} />}
    </Page>
  )
}
