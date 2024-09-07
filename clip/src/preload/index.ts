import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

const api = {
  hotKey: (hotKey: string) => ipcRenderer.invoke('hotKey', hotKey),
  openWindow: (name: WindowNameType) => ipcRenderer.send('openWindow', name),
  closeWindow: (name: WindowNameType) => ipcRenderer.send('closeWindow', name),
  selectDatabaseDirectory: () => ipcRenderer.invoke('selectDatabaseDirectory'),
  setDatabaseDirectory: (path: string) => ipcRenderer.send('setDatabaseDirectory', path),
  initTable: () => ipcRenderer.send('initTable'),
  moveWindow: (name: WindowNameType, x: number, y: number) =>
    ipcRenderer.invoke('moveWindow', name, x, y),
  setIgnoreMouseEvents: (ignore: boolean, options?: { forward: boolean }) =>
    ipcRenderer.send('setIgnoreMouseEvents', ignore, options),
  sql: (sql: string, type: SqlActionType, params = {}) =>
    ipcRenderer.invoke('sql', sql, type, params)
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
