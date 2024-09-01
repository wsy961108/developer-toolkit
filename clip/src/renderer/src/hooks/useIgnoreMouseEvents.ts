import { MutableRefObject } from 'react'

export default () => {
  const setIgnoreMouseEvents = <T extends HTMLElement>(el: MutableRefObject<T>) => {
    el.current?.addEventListener('mouseover', () => {
      console.log('el.current')
      window.api.setIgnoreMouseEvents(false)
    })

    document.body?.addEventListener('mouseout', (e: MouseEvent) => {
      console.log('document.body', e.target)
      if (e.target === document.body) {
        console.log(`进入进入进入`)
        window.api.setIgnoreMouseEvents(true, { forward: true })
      }
    })
  }

  return { setIgnoreMouseEvents }
}
