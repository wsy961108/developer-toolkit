import { redirect } from 'react-router-dom'

export default async ({ request, params }) => {
  const data = await request.formData()
  const action = data.get('action')
  switch (action) {
    case 'add': {
      const addId = await window.api.sql(
        `INSERT INTO contents (title,content,category_id,created_at) VALUES('未命名标题','未填写片段',${params.cid},datetime())`,
        'insert',
        {}
      )
      return redirect(`content/${addId}`)
    }
    case 'del': {
      const lid = data.get('lid')
      await window.api.sql(`DELETE FROM contents where id=@lid`, 'del', { lid })
      break
    }

    default: {
      const title = data.get('title')
      const id = data.get('id')
      const p = {
        title,
        id
      }
      await window.api.sql(`update contents set title=@title where id=@id`, 'update', p)
    }
  }

  return {}
}
