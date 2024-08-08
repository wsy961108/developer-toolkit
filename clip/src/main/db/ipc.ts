import { ipcMain, IpcMainInvokeEvent } from 'electron'
import * as command from './command'

export type SqlType = 'findAll' | 'findOne' | 'insert' | 'deleted' | 'update'

ipcMain.handle('sql', (_event: IpcMainInvokeEvent, sql: string, type: SqlType) => {
  return command[type](sql)
})
