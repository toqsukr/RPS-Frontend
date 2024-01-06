import { createBrowserRouter } from 'react-router-dom'
import { Routes } from './constants'

export const REACT_ROUTER = createBrowserRouter([
  {
    path: Routes.DEFAULT_ROUTE,
    async lazy() {
      return { Component: (await import('@pages/home/Home.page')).default }
    },
  },
])
