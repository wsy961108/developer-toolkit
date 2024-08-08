import { ElectronAPI } from '@electron-toolkit/preload'

type SqlType = 'findAll' | 'findOne' | 'insert' | 'deleted' | 'update'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      hideWin: () => void
      shortCut: (hostKey: string) => Promise<boolean>
      ignoreMouseEvent: (ignore: boolean, option?: { forward: boolean }) => void
      openConfigWin: () => void
      sql: <T>(sql: string, type: SqlType) => Promise<T>
    }
  }
}
