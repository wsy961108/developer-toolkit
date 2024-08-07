import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      hideWin: () => void
      shortCut: (hostKey: string) => Promise<boolean>
      ignoreMouseEvent: (ignore: boolean, option?: { forward: boolean }) => void
      openConfigWin: () => void
    }
  }
}
