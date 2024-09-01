import { app, BrowserWindow, IpcMainEvent, IpcMainInvokeEvent } from 'electron'
import createWindow from './create'
import { config } from './options'

export const getByNameWindow = (name: WindowNameType) => {
  let win = BrowserWindow.fromId(config[name].id)
  if (!win) {
    win = createWindow(config[name].options)
    config[name].id = win.id
  }
  return win
}

export const getWindowByEvent = (event: IpcMainEvent | IpcMainInvokeEvent) => {
  return BrowserWindow.fromWebContents(event.sender)!
}

app.whenReady().then(() => {
  getByNameWindow('search')
  getByNameWindow('config')
})
