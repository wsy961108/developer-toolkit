import { Menu, Tray } from 'electron'
import icon from '../../../resources/icon.png?asset'
import { getByNameWindow } from '.'

export default function createTray() {
  const tray = new Tray(icon)
  tray.setTitle('Electron Toolkit')
  const contenxtMenu = Menu.buildFromTemplate([
    {
      label: '设置',
      click: () => {
        const win = getByNameWindow('config')
        win.show()
      }
    },
    { label: '退出', role: 'quit' }
  ])
  tray.setContextMenu(contenxtMenu)
}
