import { Navigate } from 'react-router-dom'

import { Page } from '@/components/ui/page'
import { SignInDataType, useLoginMutation, useMeQuery } from '@/features/auth/api'
import { SignInForm } from '@/features/auth/ui/signInForm'

export const SignInPage = () => {
  const [signIn] = useLoginMutation()

  const { isError } = useMeQuery()

  const isAuth = !isError

  const signInHandler = ({ email, password, rememberMe }: SignInDataType) => {
    signIn({ email, password, rememberMe })
  }

  if (isAuth) {
    return <Navigate replace to={'/'} />
  }

  return (
    <Page>
      <SignInForm onSubmit={signInHandler} />
    </Page>
  )
}
