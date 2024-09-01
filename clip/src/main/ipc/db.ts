import { IpcMainInvokeEvent } from 'electron/main'
import { dialog, ipcMain, IpcMainEvent } from 'electron'
import * as query from '../db/command'
import config from '../db/config'
import { initTable } from '../db/initTable'

ipcMain.handle(
  'sql',
  (_event: IpcMainInvokeEvent, sql: string, type: SqlActionType, params = {}) => {
    return query[type](sql, params)
  }
)

ipcMain.handle('selectDatabaseDirectory', async () => {
  const res = await dialog.showOpenDialog({
    //对话框窗口的标题
    title: '选择目录',
    //选择文件、目录，并支持多选
    properties: ['openDirectory', 'createDirectory']
  })
  return res.canceled ? '' : res.filePaths[0]
})

ipcMain.on('setDatabaseDirectory', (_event: IpcMainEvent, path: string) => {
  config.databaseDirectory = path
})

ipcMain.on('initTable', () => {
  initTable()
})
