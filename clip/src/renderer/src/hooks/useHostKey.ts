import { useStoreError } from '@renderer/store/useStoreError'

export default () => {
  const shortCut = async (key: string) => {
    const setError = useStoreError((e) => e.setError)
    const isRegisterShortCut = await window.api.shortCut(key)
    isRegisterShortCut || setError('提示：快捷键冲突')
  }
  return { shortCut }
}
