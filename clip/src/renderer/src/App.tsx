import Seach from '@renderer/components/Seach'
import Result from '@renderer/components/Result'
import useHostKey from '@renderer/hooks/useHostKey'
import Error from './components/Error'
import { useEffect, useRef } from 'react'

function App(): JSX.Element {
  const { shortCut } = useHostKey()
  shortCut('CommandOrControl+L')
  const mainRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    mainRef.current?.addEventListener('mouseover', () => window.api.ignoreMouseEvent(false))
    mainRef.current?.addEventListener('mouseout', () =>
      window.api.ignoreMouseEvent(true, { forward: true })
    )
  }, [])
  return (
    <div ref={mainRef}>
      <Error />
      <Seach />
      <Result />
    </div>
  )
}

export default App
