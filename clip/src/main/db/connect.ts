import Database, * as BetterSqlite3 from 'better-sqlite3'
import { app } from 'electron'
import { resolve } from 'node:path'
import { existsSync } from 'node:fs'
import config from './config'

const db = (): BetterSqlite3.Database => {
  const devPath = resolve(app.getPath('home'), 'Desktop')
  const proPath = app.getAppPath()
  const isDev = app.isPackaged === false
  let dir = isDev ? devPath : proPath

  if (config.databaseDirectory && existsSync(config.databaseDirectory)) {
    dir = config.databaseDirectory
  }
  const db: BetterSqlite3.Database = new Database(dir + '/snippets.db', {})
  db.pragma('journal_mode = WAL')
  return db
}

export { db }
