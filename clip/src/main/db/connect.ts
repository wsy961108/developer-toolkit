import Database, * as BetterSqlite3 from 'better-sqlite3'
import { app } from 'electron'
import { resolve } from 'path'

const file = resolve(app.getPath('home'), 'Desktop', 'test.db')

const db: BetterSqlite3.Database = new Database(file, {})

db.pragma('journal_mode = WAL')

export default db
