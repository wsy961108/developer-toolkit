import { ElectronAPI } from '@electron-toolkit/preload'

type SqlType = 'findAll' | 'findOne' | 'insert' | 'deleted' | 'update'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      hotKey: (hotKey: string) => Promise<boolean>
      setIgnoreMouseEvents: (ignore: boolean, options?: { forward: boolean }) => void
      sql: <T>(sql: string, type: SqlActionType, params?: Record<string, any>) => Promise<T>
      openWindow: (name: WindowNameType) => void
      closeWindow: (name: WindowNameType) => void
      restoreWindow: (name: WindowNameType) => void
      minimizeWindow: (name: WindowNameType) => void
      writeClipboard: (content: string) => void
      selectDatabaseDirectory: () => Promise<string>
      setDatabaseDirectory: (path: string) => void
      initTable: () => void
      moveWindow: (name: WindowNameType, x: number, y: number) => void
    }
  }
}
