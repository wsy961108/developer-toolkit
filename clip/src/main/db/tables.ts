import db from './connect'

db.exec(`
  CREATE TABLE IF NOT EXISTS categoties(
    id interget primary key aytoincrement not null,
    name text not null,
    created_time text not null,
  );  
`)

db.exec(`
  CREATE TABLE IF NOT EXISTS contents(
    id interget primary key aytoincrement not null,
    title text not null,
    content text not null,
    category_id text not null,
    created_time text not null,
  );  
`)
