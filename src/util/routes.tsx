import Collection from '@pages/collection/Collection.page'
import Home from '@pages/home/Home.page'
import { createBrowserRouter } from 'react-router-dom'
import { Routes } from './constants'

export const REACT_ROUTER = createBrowserRouter([
  {
    path: Routes.DEFAULT_ROUTE,
    Component: () => <Home />,
  },
  {
    path: Routes.COLLECTION,
    Component: () => <Collection />,
  },
])
