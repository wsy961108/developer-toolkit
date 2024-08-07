import { useStoreError } from '@renderer/store/useStoreError'

export default (): { shortCut: (key: string) => Promise<void> } => {
  const shortCut = async (key: string): Promise<void> => {
    const setError = useStoreError((e) => e.setError)
    const isRegisterShortCut = await window.api.shortCut(key)
    isRegisterShortCut || setError('提示：快捷键冲突')
  }
  return { shortCut }
}
