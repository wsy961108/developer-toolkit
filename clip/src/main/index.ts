import { app, ipcMain } from 'electron'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import './window'
import './ipc'
import createTray from './window/tray'

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  ipcMain.on('ping', () => console.log('pong'))
})

app.on('ready', () => {
  createTray()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
