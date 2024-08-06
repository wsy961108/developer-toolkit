import { app, BrowserWindow } from 'electron'
import createWindow from './window'
import { registerIpc, registerShortCut } from './ipc'

app.whenReady().then(() => {
  const win = createWindow()
  registerIpc(win)
  registerShortCut(win)
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
