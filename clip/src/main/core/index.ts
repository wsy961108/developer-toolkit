import { app, BrowserWindow } from 'electron'
import createWindow from './window'
import {
  registerIgnoreMouseEvents,
  registerIpc,
  registerOpenConfigWindow,
  registerShortCut
} from './ipc'
// import '../db'

app.whenReady().then(() => {
  const win = createWindow()
  registerIpc(win)
  registerShortCut(win)
  registerIgnoreMouseEvents(win)
  registerOpenConfigWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
