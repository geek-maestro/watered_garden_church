import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/index.tsx'
import Users from './pages/Users.tsx'
import UserManagement from './pages/UserManagement.tsx'
import UserAnalytics from './pages/UserAnalytics.tsx'
import Finance from './pages/Finance.tsx'
import Inventory from './pages/Inventory.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/user_management',
    element: <UserManagement />
  },
  {
    path: '/users',
    element: <Users />
  },
  {
    path: '/user_analytics',
    element: <UserAnalytics />
  },
  {
    path: '/finance',
    element: <Finance />
  },
  {
    path: '/inventory',
    element: <Inventory />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
