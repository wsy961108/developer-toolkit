import { useStoreError } from '@renderer/store/useStoreError'
import { useEffect } from 'react'

export default function Error(): JSX.Element {
  const error = useStoreError((e) => e.error)
  const setError = useStoreError((e) => e.setError)

  useEffect(() => {
    const time = 1 * 1000
    const timer = setTimeout(() => setError(''), time)
    return () => clearTimeout(timer)
  }, [error])

  if (error) return <div className="text-red-500">{error}</div>

  return <></>
}
