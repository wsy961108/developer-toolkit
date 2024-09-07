import { Config } from '@icon-park/react'
import useCodeSearch from '@renderer/hooks/useCodeSearch'
import useMoveWindow from '@renderer/hooks/useMoveWindow'
import { MutableRefObject, useEffect, useRef } from 'react'
import styles from './search.module.scss'

export default function Search(): JSX.Element {
  const { handleSearch, search } = useCodeSearch()
  const { handleMove } = useMoveWindow()
  const moveRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    handleMove(moveRef as MutableRefObject<HTMLDivElement>)
  }, [])

  return (
    <div ref={moveRef} className={styles.search}>
      <section className={styles.searchLayout}>
        <input value={search} onChange={handleSearch} autoFocus className={styles.searchInput} />
        <Config
          theme="outline"
          size="20"
          fill="#333"
          className={styles.searchSetting}
          onClick={() => window.api.openWindow('config')}
        />
      </section>
    </div>
  )
}
