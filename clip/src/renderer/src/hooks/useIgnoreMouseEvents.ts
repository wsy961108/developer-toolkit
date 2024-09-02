import { MutableRefObject } from 'react'
/**
 * @description 设置是否忽略鼠标事件
 */
export default () => {
  const setIgnoreMouseEvents = <T extends HTMLElement>(
    openMouseEventEl: MutableRefObject<T>,
    closeMouseEventEl: MutableRefObject<T>
  ) => {
    openMouseEventEl.current?.addEventListener('mouseover', () => {
      window.api.setIgnoreMouseEvents(false)
    })

    closeMouseEventEl.current?.addEventListener('mouseenter', () => {
      window.api.setIgnoreMouseEvents(true, { forward: true })
    })
  }

  return { setIgnoreMouseEvents }
}
