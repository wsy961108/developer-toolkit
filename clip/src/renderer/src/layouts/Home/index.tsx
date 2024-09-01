import Seach from '@renderer/components/Seach'
import Result from '@renderer/components/Result'
import { MutableRefObject, useEffect, useRef } from 'react'
import useIgnoreMouseEvents from '@renderer/hooks/useIgnoreMouseEvents'

function Home(): JSX.Element {
  const mainRef = useRef<HTMLDivElement>(null)
  const { setIgnoreMouseEvents } = useIgnoreMouseEvents()
  // const config = useStore((s) => s.config)
  // window.api.setDatabaseDirectory(config.databaseDirectory)
  window.api.hotKey('CommandOrControl+L')
  window.api.initTable()
  useEffect(() => {
    setIgnoreMouseEvents(mainRef as MutableRefObject<HTMLDivElement>)
  }, [])

  return (
    <main className="relative p-3" ref={mainRef}>
      <Seach />
      <Result />
    </main>
  )
}

export default Home
