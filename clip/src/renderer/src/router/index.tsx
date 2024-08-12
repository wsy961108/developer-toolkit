import Config from '@renderer/pages/Config'
import Fragment from '@renderer/pages/Fragment'
import FragmentContent from '@renderer/pages/FragmentContent'
import FragmentTitle from '@renderer/pages/FragmentTitle'
import Home from '@renderer/pages/Home'
import Options from '@renderer/pages/Options'
import { createHashRouter } from 'react-router-dom'

const router = createHashRouter([
  { path: '/', element: <Home /> },
  {
    path: '/config',
    element: <Config />,
    children: [
      {
        path: '',
        element: <Fragment />,
        children: [
          {
            path: 'FragmentTitle',
            element: <FragmentTitle />,
            children: [{ path: 'FragmentContent', element: <FragmentContent /> }]
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
