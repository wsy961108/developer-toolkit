import { Config } from '@icon-park/react'
import useCodeSearch from '@renderer/hooks/useCodeSearch'
import { Input } from 'antd'

export default function Seach(): JSX.Element {
  const { handleSearch, search } = useCodeSearch()

  return (
    <div className="bg-slate-50 rounded-lg drag p-3">
      <section className="bg-slate-100 p-3 rounded-lg flex justify-items-center items-center no_drag">
        <Config
          theme="outline"
          size="20"
          fill="#333"
          onClick={() => window.api.openConfigWin()}
          className="cursor-pointer"
        />
        <Input
          className="w-full px-2 outline-none text-2xl text-slate-600 bg-slate-100"
          value={search}
          onChange={handleSearch}
          autoFocus
        />
      </section>
    </div>
  )
}
