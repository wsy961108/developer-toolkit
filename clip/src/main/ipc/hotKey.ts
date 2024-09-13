import { app, dialog, globalShortcut, ipcMain, IpcMainInvokeEvent } from 'electron'
import { getByNameWindow } from '../window'
import { config } from '../db/command'

ipcMain.handle('hotKey', (_event: IpcMainInvokeEvent, hotKey: string) => {
  return registerSearchShortCut(hotKey)
})

function registerSearchShortCut(hotKey: string) {
  globalShortcut.unregisterAll()
  if (hotKey && globalShortcut.isRegistered(hotKey)) {
    dialog.showErrorBox('温馨提示', '快捷键注册失败，请检查快捷键是否已被占用')
    return false
  }
  const win = getByNameWindow('search')
  return globalShortcut.register(hotKey, () => {
    if (!win.isVisible() && !win.isMinimized()) win.show()
    else if (win.isMinimized()) win.restore()
    else win.minimize()
  })
}

app.on('will-quit', () => {
  globalShortcut.unregisterAll()
})

export const registerAppGlobShortcut = () => {
  const configData = config() as { hotKey: string }
  if (configData.hotKey) {
    registerSearchShortCut(configData.hotKey)
  }
}
