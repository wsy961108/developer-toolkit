import { app, BrowserWindow, dialog, globalShortcut } from 'electron'

export const registerShortCut = (win: BrowserWindow) => {
  const hotCut = `CommandOrControl+X`
  app.whenReady().then(() => {
    const ret = globalShortcut.register(hotCut, () => {
      console.log('hotCut is pressed')
      win.show()
    })

    if (!ret) {
      dialog.showErrorBox('温馨提示', '注册快捷键失败')
    }

    // 检查快捷键是否注册成功
    console.log(globalShortcut.isRegistered('hotCut'))
  })

  app.on('will-quit', () => {
    // 注销快捷键
    globalShortcut.unregister('hotCut')
    // 注销所有快捷键
    globalShortcut.unregisterAll()
  })
}
