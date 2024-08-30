import Config from '@renderer/pages/Config'
import Fragment from '@renderer/pages/Fragment'
import FragmentContent from '@renderer/pages/FragmentContent'
import FragmentTitle from '@renderer/pages/FragmentTitle'
import Home from '@renderer/pages/Home'
import Options from '@renderer/pages/Options'
import { createHashRouter } from 'react-router-dom'
import fragmentLoader from './loader/fragmentLoader'
import fragmentTitleLoader from './loader/fragmentTitleLoader'
import fragmenContentLoader from './loader/fragmenContentLoader'
import fragmenContentAction from './action/fragmenContentAction'
import fragmenContentTitle from './action/fragmenContentTitle'

const router = createHashRouter([
  { path: '/', element: <Home /> },
  {
    path: '/config',
    element: <Config />,
    children: [
      {
        path: 'fragment',
        element: <Fragment />,
        loader: fragmentLoader,
        children: [
          {
            path: 'fragmentTitle/:cid',
            element: <FragmentTitle />,
            loader: fragmentTitleLoader,
            action: fragmenContentTitle,
            children: [
              {
                path: 'FragmentContent/:id',
                loader: fragmenContentLoader,
                action: fragmenContentAction,
                element: <FragmentContent />
              }
            ]
          }
        ]
      },
      {
        path: 'Option',
        element: <Options />
      }
    ]
  }
])

export default router
