import { Page } from '@/components/ui/page'
import { SignInDataType, useLoginMutation } from '@/features/auth/api'
import { SignInForm } from '@/features/auth/ui/signInForm'

export const SignInPage = () => {
  const [signIn] = useLoginMutation()

  const signInHandler = ({ email, password, rememberMe }: SignInDataType) => {
    signIn({ email, password, rememberMe })
  }

  return (
    <Page>
      <SignInForm onSubmit={signInHandler} />
    </Page>
  )
}
