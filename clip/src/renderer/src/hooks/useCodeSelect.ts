import { DataType } from '@renderer/data'
import useCode from '@renderer/hooks/useCode'
import { useCallback, useEffect, useState } from 'react'

interface codeSelect extends Partial<DataType> {
  data: DataType[]
}

export default (): codeSelect => {
  const { data } = useCode()
  const [id, setId] = useState(0)
  const keyEventFn = (e: KeyboardEvent): void => {
    if (data.length === 0) {
      setId(0)
      return
    }
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
      Enter: (): void => {
        const content = data.find((d) => d.id === id)?.content
        if (content) {
          navigator.clipboard.writeText(content)
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
