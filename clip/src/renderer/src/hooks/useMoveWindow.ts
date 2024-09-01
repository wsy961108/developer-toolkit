import { MutableRefObject } from 'react'

export default () => {
  let isKeyDownState = false
  let x = 0
  let y = 0

  const handleMove = <T extends HTMLElement>(el: MutableRefObject<T>) => {
    el.current.addEventListener('mousedown', (event) => {
      isKeyDownState = true
      x = event.x
      y = event.y
    })

    document.addEventListener('mousemove', (event) => {
      if (isKeyDownState) {
        const appX = event.screenX - x
        const appY = event.screenY - y
        window.api.moveWindow('search', appX, appY)
      }
    })

    document.addEventListener('mouseup', () => {
      isKeyDownState = false
    })
  }

  return { handleMove }
}
