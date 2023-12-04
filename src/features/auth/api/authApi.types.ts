export type SignUpParamsType = {
  email: string
  html?: string
  name?: string
  password: string
  sendConfirmationEmail?: boolean
  subject?: string
}

export type AuthResponseType = {
  avatar: string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}

export type LoginResponseType = {
  accessToken: string
}

export type RecoverPasswordParamsType = {
  email: string
}

export type ResetPasswordParamsType = Pick<SignUpParamsType, 'password'> & {
  token?: string
}

export type SignUpDataType = Pick<SignUpParamsType, 'email' | 'password'>

export type SignInDataType = SignUpDataType & {
  rememberMe?: boolean
}
