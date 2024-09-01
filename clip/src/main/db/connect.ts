import Database, * as BetterSqlite3 from 'better-sqlite3'
import { app } from 'electron'
import { resolve } from 'node:path'
import { existsSync } from 'node:fs'
import config from './config'

const db = (): BetterSqlite3.Database => {
  let dir = resolve(app.getPath('home'), 'Desktop')
  if (config.databaseDirectory && existsSync(config.databaseDirectory)) {
    dir = config.databaseDirectory
  }
  const db: BetterSqlite3.Database = new Database(dir + '/hd.db', {})
  db.pragma('journal_mode = WAL')
  return db
}

export { db }
