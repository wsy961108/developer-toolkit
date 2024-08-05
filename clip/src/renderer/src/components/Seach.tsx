import useCode from '@renderer/hooks/useCode'
import { ChangeEvent, useState } from 'react'
import { data as codes } from '@renderer/data'

export default function Seach(): JSX.Element {
  const { setData } = useCode()
  const [search, setSearch] = useState('')
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    if (!e.target.value) {
      setData([])
      return
    }
    const searchReg = new RegExp(
      e.target.value
        .split('')
        .map((v) => `(?=${v})`)
        .join('|'),
      'i'
    )
    setData(codes.filter((code) => searchReg.test(code.content)))
  }
  return (
    <div className="bg-slate-50 rounded-lg drag p-3">
      <section className="bg-slate-100 p-3 rounded-lg">
        <input
          className="w-full px-2 outline-none text-2xl text-slate-600 bg-slate-100"
          value={search}
          onChange={handleSearch}
        />
      </section>
    </div>
  )
}
