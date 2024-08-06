import { DataType } from '@renderer/data'
import useCode from '@renderer/hooks/useCode'
import { useEffect, useState } from 'react'

interface codeSelect {
  data: DataType[]
  current: number
}
export default (): codeSelect => {
  const { data } = useCode()
  const [current, setCurrent] = useState(0)

  const keyEventFn = (e: KeyboardEvent): void => {
    if (data.length === 0) {
      setCurrent(0)
      return
    }
    const listTypeFn = {
      ArrowUp: (): void => setCurrent((pre) => (pre === 0 ? data.length - 1 : pre - 1)),
      ArrowDown: (): void => setCurrent((pre) => (pre === data.length - 1 ? 0 : pre + 1)),
      Enter: (): Promise<void> => navigator.clipboard.writeText(data[current].content)
    }
    listTypeFn[e.code]?.()
  }

  useEffect(() => {
    window.addEventListener('keydown', keyEventFn)
    return (): void => window.removeEventListener('keydown', keyEventFn)
  }, [data, current])

  return { data, current }
}
