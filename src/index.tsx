import { REACT_ROUTER } from '@util/routes'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={REACT_ROUTER} />
  </React.StrictMode>
)
