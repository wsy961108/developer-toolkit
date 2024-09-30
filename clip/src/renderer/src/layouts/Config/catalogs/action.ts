import { redirect } from 'react-router-dom'

export default async ({ request }) => {
  const data = await request.formData()
  const action = data.get('action')
  switch (action) {
    case 'add': {
      const addId = await window.api.sql(
        `INSERT INTO categories (name,created_at) VALUES('未命名目录',datetime())`,
        'insert',
        {}
      )
      return redirect(`listings/${addId}`)
    }
    case 'del': {
      const cid = data.get('cid')
      await window.api.sql(`DELETE FROM categories where id=@cid`, 'del', { cid })
      await window.api.sql(`DELETE FROM contents where category_id=@cid`, 'del', { cid })
      break
    }

    default: {
      const name = data.get('name')
      const id = data.get('id')
      const p = {
        name,
        id
      }
      await window.api.sql(`update categories set name=@name where id=@id`, 'update', p)
    }
  }
  return {}
}
