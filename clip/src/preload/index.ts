import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

const api = {
  hideWin: (): void => ipcRenderer.send('hideWin'),
  shortCut: (hostKey: string): Promise<boolean> => ipcRenderer.invoke('shortCut', hostKey),
  ignoreMouseEvent: (ignore: boolean, options: { forward: boolean }): void =>
    ipcRenderer.send('ignoreMouseEvent', ignore, options),
  openConfigWin: (): void => ipcRenderer.send('openConfigWindow')
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
