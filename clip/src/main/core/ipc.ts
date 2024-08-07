import {
  app,
  BrowserWindow,
  ipcMain,
  globalShortcut,
  IpcMainInvokeEvent,
  IpcMainEvent
} from 'electron'
import openConfigWindow from '../config'

export const registerIpc = (win: BrowserWindow): void => {
  ipcMain.on('hideWin', () => win.hide())
}

export const registerIgnoreMouseEvents = (win: BrowserWindow): void => {
  ipcMain.on(
    'ignoreMouseEvent',
    (_event: IpcMainEvent, ignore: boolean, option: { forward: boolean }) => {
      win.setIgnoreMouseEvents(ignore, option)
    }
  )
}
export const registerOpenConfigWindow = (): void => {
  ipcMain.on('openConfigWindow', () => openConfigWindow())
}
export const registerShortCut = (win: BrowserWindow): void => {
  ipcMain.handle('shortCut', (_event: IpcMainInvokeEvent, hostKey) => {
    return globalShortcut.register(hostKey, () => {
      win.isVisible() ? win.hide() : win.show()
    })
  })
}
app.once('will-quit', () => {
  globalShortcut.unregisterAll()
})
