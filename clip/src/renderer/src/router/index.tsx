import Config from '@renderer/layouts/Config'
import Fragment from '@renderer/pages/Fragment'
import FragmentContent from '@renderer/pages/FragmentContent'
import FragmentTitle from '@renderer/pages/FragmentTitle'
import Home from '@renderer/layouts/Home'
import { createHashRouter } from 'react-router-dom'
import fragmentLoader from './loader/fragmentLoader'
import fragmentTitleLoader from './loader/fragmentTitleLoader'
import fragmenContentLoader from './loader/fragmenContentLoader'
import fragmenContentAction from './action/fragmenContentAction'
import fragmenContentTitleAction from './action/fragmenContentTitleAction'
import Catalogs from '@renderer/layouts/Config/catalogs'
import catalogsLoader from '@renderer/layouts/Config/catalogs/loader'
import Listings from '@renderer/layouts/Config/listings'
import listingsLoader from '@renderer/layouts/Config/listings/loader'
import Content from '@renderer/layouts/Config/content'
const router = createHashRouter([
  { path: '/', element: <Home /> },
  {
    path: '/config',
    element: <Config />,
    children: [
      {
        path: '',
        element: <Catalogs />,
        loader: catalogsLoader,
        children: [
          {
            path: 'listings/:cid',
            element: <Listings />,
            loader: listingsLoader,
            children: [
              {
                path: 'content/:lid',
                element: <Content />
              }
            ]
          }
        ]
      }
    ]
  }
  // {
  //   path: '/config',
  //   element: <Config />,
  //   children: [
  //     {
  //       index: true,
  //       element: <Catalogs />
  //     },
  //     {
  //       path: 'catalogs',
  //       element: <Catalogs />,
  //       children: [
  //         {
  //           path: 'listings/:cid',
  //           element: <Listings />,
  //           children: [
  //             {
  //               path: 'content/:lid',
  //               element: <Content />
  //             }
  //           ]
  //         }
  //       ]
  //     }
  //     // {
  //     //   path: 'fragment',
  //     //   element: <Fragment />,
  //     //   loader: fragmentLoader,
  //     //   children: [
  //     //     {
  //     //       path: 'fragmentTitle/:cid',
  //     //       element: <FragmentTitle />,
  //     //       loader: fragmentTitleLoader,
  //     //       action: fragmenContentTitleAction,
  //     //       children: [
  //     //         {
  //     //           path: 'FragmentContent/:id',
  //     //           loader: fragmenContentLoader,
  //     //           action: fragmenContentAction,
  //     //           element: <FragmentContent />
  //     //         }
  //     //       ]
  //     //     }
  //     //   ]
  //     // }
  //   ]
  // }
])

export default router
