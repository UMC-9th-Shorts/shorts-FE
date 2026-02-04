import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layouts/root-layout.tsx'
import LandingPage from '../pages/landing-page/entry/LandingPage.tsx'

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <LandingPage />,
      },
    ],
  },
])
