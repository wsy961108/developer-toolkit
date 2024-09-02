import { BrowserWindow, BrowserWindowConstructorOptions, shell } from 'electron'
import { join } from 'path'
import icon from '../../../resources/icon.png?asset'
import { is } from '@electron-toolkit/utils'
import url from 'node:url'
export interface OptionsType extends Partial<BrowserWindowConstructorOptions> {
  openDevTools?: boolean
  hash?: string
  initShow?: boolean
}

export default function create(options: OptionsType): BrowserWindow {
  const win = new BrowserWindow(
    Object.assign(
      {
        width: 500,
        height: 350,
        show: false,
        center: true,
        autoHideMenuBar: true,
        ...(process.platform === 'linux' ? { icon } : {}),
        webPreferences: {
          preload: join(__dirname, '../preload/index.js'),
          sandbox: false
        }
      },
      options
    )
  )

  if (is.dev && options.openDevTools) {
    win.webContents.openDevTools()
  }

  win.on('ready-to-show', () => {
    options.initShow && win.show()
  })

  win.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    win.loadURL(process.env['ELECTRON_RENDERER_URL'] + options.hash)
  } else {
    win.loadURL(
      url.format({
        pathname: join(__dirname, '../renderer/index.html'),
        protocol: 'file',
        slashes: true,
        hash: options.hash?.substring(1)
      })
    )
  }

  return win
}
