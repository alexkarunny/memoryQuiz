import { useState } from 'react'

import { Page } from '@/components/ui/page'
import { RecoverPasswordParamsType, useRecoverPasswordMutation } from '@/features/auth/api'
import { CheckEmail } from '@/features/auth/ui/checkEmail'
import { RecoverPasswordForm } from '@/features/auth/ui/recoverPasswordForm'

export const RecoverPasswordPage = () => {
  const [forgotPassword, { isSuccess }] = useRecoverPasswordMutation()
  const [email, setEmail] = useState('')
  const recoverPasswordHandler = ({ email }: RecoverPasswordParamsType) => {
    forgotPassword({ email })
    if (isSuccess) {
      setEmail(email)
    }
  }

  return (
    <Page>
      {!isSuccess && <RecoverPasswordForm onSubmit={recoverPasswordHandler} />}
      {isSuccess && <CheckEmail email={email} />}
    </Page>
  )
}
