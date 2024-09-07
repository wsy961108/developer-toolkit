import { useStoreId } from '@renderer/store/useStoreId'
import { useStoreSearch } from '@renderer/store/useStoreSearch'
import { SelectType, useStoreSelect } from '@renderer/store/useStoreSelect'
import { useCallback, useEffect } from 'react'

interface codeSelect extends Partial<SelectType> {
  data: SelectType[]
}

export default (): codeSelect => {
  const data = useStoreSelect((z) => z.data)
  const setData = useStoreSelect((z) => z.setData)
  const id = useStoreId((z) => z.id)
  const setId = useStoreId((z) => z.setId)
  const setSearch = useStoreSearch((z) => z.setSearch)
  const search = useStoreSearch((z) => z.search)

  const handleKeyEvent = useCallback(
    (e: KeyboardEvent): void => {
      if (data.length === 0) return
      const eventTypeFn = {
        ArrowUp: (): void => {
          const index = data.findIndex((d) => d.id === id)
          setId(data[index - 1]?.id || data[data.length - 1].id)
        },
        ArrowDown: (): void => {
          const index = data.findIndex((d) => d.id === id)
          setId(data[index + 1]?.id || data[0].id)
        },
        Enter: async (): Promise<void> => {
          const content = data.find((d) => d.id === id)?.content
          if (content) await navigator.clipboard.writeText(content)
          data.length && setData([])
          search && setSearch('')
          window.api.closeWindow('search')
        }
      }
      eventTypeFn[e.code]?.()
    },
    [data, id]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyEvent)
    return (): void => window.removeEventListener('keydown', handleKeyEvent)
  }, [handleKeyEvent])

  useEffect(() => {
    setId(data[0]?.id || 0)
  }, [data])

  return { data, id }
}
