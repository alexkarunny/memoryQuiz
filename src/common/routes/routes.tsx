import { Navigate, RouteObject } from 'react-router-dom'
// import { SignInPage } from '@/pages/signInPage/SignInPage.tsx'
// import { SignUpPage } from '@/pages/signUpPage/signUpPage.tsx'
// import { ForgotPasswordPage } from '@/pages/recoverPasswordPage/ForgotPasswordPage.tsx'
// import { CreateNewPasswordPage } from '@/pages/resetPasswordPage/CreateNewPasswordPage.tsx'
// import { NotFoundPage } from '@/pages/notFoundPage/NotFoundPage.tsx'

export const privateRoutes: RouteObject[] = [
  {
    element: <Navigate to={'/decks'} />,
    path: '/',
  },
  {
    path: '/profile',
  },
  {
    path: '/decks',
  },
  {
    path: `${'/decks'}/:id/cards`,
  },
  {
    path: `${'/decks'}/:id/learn`,
  },
]

// export const publicRoutes: RouteObject[] = [
//   {
//     path: '/signIn',
//     element: <SignInPage />,
//   },
//   {
//     path: '/signUp',
//     element: <SignUpPage />,
//   },
//   {
//     path: '/recoverPasswordForm',
//     element: <RecoverPasswordPage />,
//   },
//   {
//     path: `${'/resetPasswordForm'}/:token`,
//     element: <ResetPasswordPage />,
//   },
//   {
//     path: '/404',
//     element: <NotFoundPage />,
//   },
// ]
