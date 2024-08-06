import useCode from '@renderer/hooks/useCode'
import { ChangeEvent, useState } from 'react'
import { data as codes } from '@renderer/data'

export default () => {
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
    console.log(searchReg)
    setData(codes.filter((code) => searchReg.test(code.content)))
  }
  return { search, handleSearch }
}
