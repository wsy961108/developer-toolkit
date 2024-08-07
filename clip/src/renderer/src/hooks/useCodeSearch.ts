import { ChangeEvent } from 'react'
import { data as codes } from '@renderer/data'
import { useStoreSelect } from '@renderer/store/useStoreSelect'
import { StoreSearch, useStoreSearch } from '@renderer/store/useStoreSearch'

type ExtractEventType<T, M extends keyof T> = T[M] extends (event: infer E) => void ? E : never

interface codeSearch extends Partial<StoreSearch> {
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

export default (): codeSearch => {
  const setData = useStoreSelect((z) => z.setData)
  const search = useStoreSearch((z) => z.search)
  const setSearch = useStoreSearch((z) => z.setSearch)
  const data = useStoreSelect((z) => z.data)

  const handleSearch = (e: ExtractEventType<codeSearch, 'handleSearch'>): void => {
    e.target.value !== search && setSearch(e.target.value)
    if (!e.target.value) {
      data.length && setData([])
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

  return { search, handleSearch }
}
