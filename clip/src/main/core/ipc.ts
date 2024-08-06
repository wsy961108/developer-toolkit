import { app, BrowserWindow, ipcMain, globalShortcut, dialog, IpcMainEvent } from 'electron'
const config = {
  hostKey: ''
}
export const registerIpc = (win: BrowserWindow): void => {
  ipcMain.on('hideWin', () => win.hide())
}
export const registerShortCut = (win: BrowserWindow): void => {
  ipcMain.on('shortCut', (_event: IpcMainEvent, type, hostKey) => {
    if (config.hostKey) globalShortcut.unregister(config.hostKey)
    config.hostKey = hostKey
    const ret = globalShortcut.register(hostKey, () => {
      win.isVisible() ? win.hide() : win.show()
    })
    if (!ret) dialog.showErrorBox('温馨提示', '注册快捷键失败')
    // 检查快捷键是否注册成功 console.log(globalShortcut.isRegistered('hotCut'))
  })
}
app.once('will-quit', () => {
  globalShortcut.unregisterAll()
})
