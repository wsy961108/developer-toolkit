import Seacrh from '@renderer/components/Search'
import Result from '@renderer/components/Result'
import { MutableRefObject, useEffect, useRef } from 'react'
import useIgnoreMouseEvents from '@renderer/hooks/useIgnoreMouseEvents'
import { useLoaderData } from 'react-router-dom'

function Home(): JSX.Element {
  const { setIgnoreMouseEvents } = useIgnoreMouseEvents()
  const openEventEl = useRef<HTMLDivElement>(null)
  const closeEventEl = useRef<HTMLDivElement>(null)

  // const config = useStore((s) => s.config)
  // window.api.setDatabaseDirectory(config.databaseDirectory)

  window.api.hotKey('CommandOrControl+L')
  window.api.initTable()

  const data = useLoaderData()
  console.log(data, 'home')

  useEffect(() => {
    setIgnoreMouseEvents(
      openEventEl as MutableRefObject<HTMLDivElement>,
      closeEventEl as MutableRefObject<HTMLDivElement>
    )
  }, [])

  return (
    <>
      <main ref={openEventEl} className="relative z-10 overflow-hidden rounded-lg bg-slate-300">
        <Seacrh />
        <Result />
      </main>
      <div ref={closeEventEl} className="absolute left-0 right-0 top-0 bottom-0 -z-0"></div>
    </>
  )
}

export default Home
