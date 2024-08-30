import db from './connect'

export const findAll = (sql: string) => {
  return db.prepare(sql).all()
}
export const findOne = (sql: string) => {
  return db.prepare(sql).get()
}
export const insert = (sql: string) => {
  return db.prepare(sql).run().lastInsertRowid
}
export const deleted = (sql: string) => {
  return db.prepare(sql).run().changes
}
export const update = (sql: string, params) => {
  return db.prepare(sql).run(params).changes
}
