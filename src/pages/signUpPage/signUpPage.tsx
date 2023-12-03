import { Page } from '@/components/ui/page'
import { SignUpDataType, useSignUpMutation } from '@/features/auth/api'
import { SignUpForm } from '@/features/auth/ui/signUp'

export const SignUpPage = () => {
  const [signUp] = useSignUpMutation()

  const signUpHandler = ({ email, password }: SignUpDataType) => {
    signUp({ email, password })
  }

  return (
    <Page>
      <SignUpForm onSubmit={signUpHandler} />
    </Page>
  )
}
