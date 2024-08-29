import db from './connect'

db.exec(`
  CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    name TEXT NOT NULL,
    created_at  TEXT NOT NULL
  );
`)

db.exec(`
  CREATE TABLE IF NOT EXISTS contents (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    category_id INTEGER,
    created_at  TEXT NOT NULL
  ); 
`)

for (let i = 0; i < 10; i++) {
  db.exec(`
    INSERT INTO categories (name,created_at) VALUES('${Math.random().toString()}',datetime())
    `)
  for (let j = 0; j < 10; j++) {
    const title = Math.random().toString()
    const content = Math.random().toString()
    db.exec(`
        INSERT INTO contents (title,content,category_id,created_at) VALUES('${title}','${content}',${j},datetime())
        `)
  }
}
