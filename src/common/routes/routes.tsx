import { Navigate, RouteObject } from 'react-router-dom'
// import { SignInPage } from '@/pages/signInPage/SignInPage.tsx'
// import { SignUpPage } from '@/pages/signUpPage/SignUpPage.tsx'
// import { ForgotPasswordPage } from '@/pages/forgotPasswordPage/ForgotPasswordPage.tsx'
// import { CreateNewPasswordPage } from '@/pages/createNewPasswordPage/CreateNewPasswordPage.tsx'
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
//     path: '/signInForm',
//     element: <SignInPage />,
//   },
//   {
//     path: '/signUp',
//     element: <SignUpPage />,
//   },
//   {
//     path: '/forgotPasswordForm',
//     element: <ForgotPasswordPage />,
//   },
//   {
//     path: `${'/createNewPasswordForm'}/:token`,
//     element: <CreateNewPasswordPage />,
//   },
//   {
//     path: '/404',
//     element: <NotFoundPage />,
//   },
// ]
