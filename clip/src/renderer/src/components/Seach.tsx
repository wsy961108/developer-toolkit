import { Config } from '@icon-park/react'
import useCodeSearch from '@renderer/hooks/useCodeSearch'
import { Input } from 'antd'

export default function Seach(): JSX.Element {
  const { handleSearch, search } = useCodeSearch()

  return (
    // drag
    <div className="bg-slate-50 rounded-lg p-3">
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
