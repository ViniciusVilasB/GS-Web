import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import TestItYourself from './pages/TestItYourself.jsx'
import Team from './pages/Team.jsx'
import PageNotFound from './pages/PageNotFound.jsx'

const router= createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: 'test-it-yourself', element: <TestItYourself />},
      {path: 'team', element: <Team />},
      {path: '*', element: <PageNotFound/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)