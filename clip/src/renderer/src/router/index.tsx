import { createHashRouter } from 'react-router-dom'
import Home from '@renderer/layouts/Home'
import Config from '@renderer/layouts/Config'
import Catalogs from '@renderer/layouts/Config/catalogs'
import catalogsLoader from '@renderer/layouts/Config/catalogs/loader'
import catalogsAction from '@renderer/layouts/Config/catalogs/action'
import Listings from '@renderer/layouts/Config/listings'
import listingsLoader from '@renderer/layouts/Config/listings/loader'
import listingsAction from '@renderer/layouts/Config/listings/action'
import Content from '@renderer/layouts/Config/content'
import contentLoader from '@renderer/layouts/Config/content/loader'
import contentAction from '@renderer/layouts/Config/content/action'

const router = createHashRouter([
  { path: '/', element: <Home /> },
  {
    path: '/config',
    element: <Config />,
    children: [
      {
        path: 'catalogs',
        element: <Catalogs />,
        loader: catalogsLoader,
        action: catalogsAction,
        children: [
          {
            path: 'listings/:cid',
            element: <Listings />,
            loader: listingsLoader,
            action: listingsAction,
            children: [
              {
                path: 'content/:lid',
                element: <Content />,
                loader: contentLoader,
                action: contentAction
              }
            ]
          }
        ]
      }
    ]
  }
])

export default router
