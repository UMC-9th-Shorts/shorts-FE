import { RouterProvider } from 'react-router-dom'
import { AppRouter } from './components/AppRouter'

export default function App() {
  return (
    <div>
      <RouterProvider router={AppRouter} />
    </div>
  )
}
