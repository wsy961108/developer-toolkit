import { BrowserWindow, ipcMain } from 'electron'

export const registerIpc = (win: BrowserWindow) => {
  ipcMain.on('hideWin', () => win.hide())
}
