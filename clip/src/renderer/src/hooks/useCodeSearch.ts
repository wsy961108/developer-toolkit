import { ChangeEvent } from 'react'
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

  const handleSearch = async (e: ExtractEventType<codeSearch, 'handleSearch'>): Promise<void> => {
    e.target.value !== search && setSearch(e.target.value)
    if (!e.target.value) {
      data.length && setData([])
      return
    }
    const codes = (await window.api.sql(
      `select * from contents where title like @content limit 6`,
      'findAll',
      { content: `%${e.target.value}%` }
    )) as ContentType[]

    setData(codes)
  }

  return { search, handleSearch }
}
