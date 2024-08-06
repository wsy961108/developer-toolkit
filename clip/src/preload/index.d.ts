import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      hideWin: () => void
      shortCut: (type: string, hostKey: string) => void
    }
  }
}
