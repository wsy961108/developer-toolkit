import { db } from './connect'
import { findOne } from './command'

export function initTable() {
  db().exec(`
  create table if not exists categories (
    id integer primary key autoincrement not null,
    name text not null,
    created_at text not null
  );
`)

  db().exec(`
  create table if not exists contents (
    id integer primary key autoincrement not null,
    title text not null,
    content text not null,
    category_id integer,
    created_at text not null
  );
`)

  db().exec(`
  create table if not exists config (
    id integer primary key autoincrement not null,
    content text not null
  );
`)

  initData()
}
function initData() {
  const isInit = findOne('select * from contents')
  if (isInit) return
  db().exec(`
    INSERT INTO config (content) VALUES('{"shortCut":"CommandOrControl+L","databaseDirectory":""}');
  `)
}
