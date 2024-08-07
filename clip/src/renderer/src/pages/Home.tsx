import Seach from '@renderer/components/Seach'
import Result from '@renderer/components/Result'
import useHostKey from '@renderer/hooks/useHostKey'
import { useEffect, useRef } from 'react'

function Home(): JSX.Element {
  const { shortCut } = useHostKey()
  shortCut('CommandOrControl+L')
  const mainRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const openMoseEvent = (): void => window.api.ignoreMouseEvent(true, { forward: true })
    const closeMoseEvent = (): void => window.api.ignoreMouseEvent(false)
    mainRef.current?.addEventListener('mouseover', closeMoseEvent)
    mainRef.current?.addEventListener('mouseout', openMoseEvent)
    return (): void => {
      mainRef.current?.removeEventListener('mouseover', closeMoseEvent)
      mainRef.current?.removeEventListener('mouseout', openMoseEvent)
    }
  }, [])

  return (
    <div ref={mainRef}>
      <Seach />
      <Result />
    </div>
  )
}

export default Home
