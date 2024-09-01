import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

const api = {
  hotKey: (hotKey: string) => ipcRenderer.invoke('hotKey', hotKey),
  setIgnoreMouseEvents: (ignore: boolean, options?: { forward: boolean }) => {
    ipcRenderer.send('setIgnoreMouseEvents', ignore, options)
  },
  openConfigWindow: () => ipcRenderer.send('openConfigWindow'),
  sql: (sql: string, type: SqlActionType, params = {}) =>
    ipcRenderer.invoke('sql', sql, type, params),
  openWindow: (name: WindowNameType) => {
    ipcRenderer.send('openWindow', name)
  },
  closeWindow: (name: WindowNameType) => {
    ipcRenderer.send('closeWindow', name)
  },
  selectDatabaseDirectory: () => {
    return ipcRenderer.invoke('selectDatabaseDirectory')
  },
  setDatabaseDirectory: (path: string) => {
    ipcRenderer.send('setDatabaseDirectory', path)
  },
  initTable: () => {
    ipcRenderer.send('initTable')
  },
  moveWindow: (name: WindowNameType, x: number, y: number) => {
    ipcRenderer.invoke('moveWindow', name, x, y)
  }
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
