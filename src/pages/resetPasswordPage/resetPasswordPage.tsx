import { Navigate, useParams } from 'react-router-dom'

import { Page } from '@/components/ui/page'
import { ResetPasswordParamsType, useResetPasswordMutation } from '@/features/auth/api'
import { ResetPasswordForm } from '@/features/auth/ui/resetPasswordForm'

export const ResetPasswordPage = () => {
  const [createNewPassword, { isSuccess }] = useResetPasswordMutation()

  const { token } = useParams<{ token: string }>()

  const resetPasswordHandler = ({ password }: ResetPasswordParamsType) => {
    if (token) {
      createNewPassword({ password, token })
    }
  }

  isSuccess && <Navigate replace to={'/signIn'} />

  return (
    <Page>
      <ResetPasswordForm onSubmit={resetPasswordHandler} />
    </Page>
  )
}
