import { Config } from '@icon-park/react'
import useCodeSearch from '@renderer/hooks/useCodeSearch'
import useMoveWindow from '@renderer/hooks/useMoveWindow'
import { Input } from 'antd'
import { MutableRefObject, useEffect, useRef } from 'react'

export default function Seach(): JSX.Element {
  const { handleSearch, search } = useCodeSearch()
  const { handleMove } = useMoveWindow()
  const moveRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    handleMove(moveRef as MutableRefObject<HTMLDivElement>)
  }, [])

  return (
    <div ref={moveRef} className="bg-slate-50 rounded-lg p-3">
      <section className="bg-slate-100 p-3 rounded-lg flex gap-1 items-center">
        <Input value={search} onChange={handleSearch} autoFocus />
        <Config
          theme="outline"
          size="20"
          fill="#333"
          onClick={() => window.api.openConfigWin()}
          className="cursor-pointer"
        />
      </section>
    </div>
  )
}
