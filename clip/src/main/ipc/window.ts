import { ipcMain, IpcMainEvent } from 'electron'
import { getByNameWindow, getWindowByEvent } from '../window/index'

ipcMain.on('openWindow', (_event: IpcMainEvent, name: WindowNameType) => {
  getByNameWindow(name).show()
})

ipcMain.on('closeWindow', (_event: IpcMainEvent, name: WindowNameType) => {
  getByNameWindow(name).hide()
})

ipcMain.on(
  'setIgnoreMouseEvents',
  (event: IpcMainEvent, ignore: boolean, options?: { forward: boolean }) => {
    console.log('失去焦点', ignore)
    getWindowByEvent(event).setIgnoreMouseEvents(ignore, options)
  }
)

ipcMain.handle('moveWindow', (_event, name: WindowNameType, x: number, y: number) => {
  const win = getByNameWindow(name)
  win.setPosition(x, y)
})
