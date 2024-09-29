import { Search as SearchIcon } from '@icon-park/react'
import useCodeSearch from '@renderer/hooks/useCodeSearch'
import useMoveWindow from '@renderer/hooks/useMoveWindow'
import { MutableRefObject, useEffect, useRef } from 'react'
import styles from './search.module.scss'

export default function Search(): JSX.Element {
  const { handleSearch, search } = useCodeSearch()
  const { handleMove } = useMoveWindow()
  const moveRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    handleMove(moveRef as MutableRefObject<HTMLDivElement>, 'search')
  }, [])

  return (
    <div ref={moveRef} className={styles.search}>
      <section className={styles.searchLayout}>
        <SearchIcon theme="outline" size="19" className={styles.searchSetting} />
        <input
          value={search}
          onChange={handleSearch}
          autoFocus
          placeholder="搜索功能、代码片段、书签"
          className={styles.searchInput}
        />
      </section>
    </div>
  )
}
