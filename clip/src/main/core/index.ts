import { app, BrowserWindow } from 'electron'
import createWindow from './window'
import { registerIpc } from './ipc'
import { registerShortCut } from './shortcut'

app.whenReady().then(() => {
  const win = createWindow()
  registerIpc(win)
  registerShortCut(win)
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
