import { SelectType, useStoreSelect } from '@renderer/store/useStoreSelect'
import { useCallback, useEffect, useState } from 'react'

interface codeSelect extends Partial<SelectType> {
  data: SelectType[]
}

export default (): codeSelect => {
  const data = useStoreSelect((z) => z.data)
  const setData = useStoreSelect((z) => z.setData)

  const [id, setId] = useState(0)
  const keyEventFn = (e: KeyboardEvent): void => {
    if (data.length === 0) {
      setId(0)
      return
    }
    console.log(e.code)
    const eventTypeFn = {
      ArrowUp: (): void => {
        setId((id) => {
          const index = data.findIndex((d) => d.id === id)
          return data[index - 1]?.id || data[data.length - 1].id
        })
      },
      ArrowDown: (): void => {
        setId((id) => {
          const index = data.findIndex((d) => d.id === id)
          return data[index + 1]?.id || data[0].id
        })
      },
      Enter: async (): Promise<void> => {
        const content = data.find((d) => d.id === id)?.content
        if (content) {
          await navigator.clipboard.writeText(content)
          setData([])
          window.api.hideWin()
        }
      }
    }
    eventTypeFn[e.code]?.()
  }

  const handleKeyEvent = useCallback(keyEventFn, [data, id])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyEvent)
    return (): void => window.removeEventListener('keydown', handleKeyEvent)
  }, [handleKeyEvent])

  return { data, id }
}
