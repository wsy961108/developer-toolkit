import { BrowserWindow } from 'electron'
import createWindow from './window'

let win = null as null | BrowserWindow
export default function openConfigWindow() {
  win = createWindow()
  win.on('closed', () => (win = null))
}
