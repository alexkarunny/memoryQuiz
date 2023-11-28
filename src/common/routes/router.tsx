import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

const Layout = () => {
  return <>{/*<Header />*/}</>
}

const router = createBrowserRouter([
  {
    children: [
      {
        // element: <PrivateRoutes />,
        // children: privateRoutes,
      },
      // ...publicRoutes,
    ],
    element: <Layout />,
    errorElement: <Navigate to={'/404'} />,
  },
])

export const Router = () => <RouterProvider router={router} />
