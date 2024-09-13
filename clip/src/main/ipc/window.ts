import { ipcMain, IpcMainEvent, clipboard } from 'electron'
import { getByNameWindow, getWindowByEvent } from '../window/index'
import { platform } from 'os'
import { keyboard, Key } from '@nut-tree/nut-js'

keyboard.config.autoDelayMs = 0

ipcMain.on('restoreWindow', (_event: IpcMainEvent, name: WindowNameType) => {
  getByNameWindow(name).restore()
})

ipcMain.on('minimizeWindow', (_event: IpcMainEvent, name: WindowNameType) => {
  getByNameWindow(name).minimize()
})

ipcMain.on('writeClipboard', (_event: IpcMainEvent, content: string) => {
  clipboard.writeText(content)
  if (platform() === 'darwin') {
    keyboard
      .pressKey(Key.LeftCmd)
      .then(() => keyboard.pressKey(Key.V))
      .then(() => keyboard.releaseKey(Key.V))
      .then(() => keyboard.releaseKey(Key.LeftCmd))
  } else {
    keyboard
      .pressKey(Key.LeftControl)
      .then(() => keyboard.pressKey(Key.V))
      .then(() => keyboard.releaseKey(Key.V))
      .then(() => keyboard.releaseKey(Key.LeftControl))
  }
})

ipcMain.on('openWindow', (_event: IpcMainEvent, name: WindowNameType) => {
  getByNameWindow(name).show()
})

ipcMain.on('closeWindow', (_event: IpcMainEvent, name: WindowNameType) => {
  getByNameWindow(name).hide()
})

ipcMain.on(
  'setIgnoreMouseEvents',
  (event: IpcMainEvent, ignore: boolean, options?: { forward: boolean }) => {
    getWindowByEvent(event).setIgnoreMouseEvents(ignore, options)
  }
)

ipcMain.handle('moveWindow', (_event, name: WindowNameType, x: number, y: number) => {
  const win = getByNameWindow(name)
  win.setPosition(x, y)
})
