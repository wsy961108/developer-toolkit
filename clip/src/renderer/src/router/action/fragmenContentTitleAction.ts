import { redirect } from 'react-router-dom'

export default async ({ request, params }): void => {
  const formData = await request.formData()
  const form = Object.fromEntries(formData)
  console.log(params)
  switch (form.action) {
    case 'add': {
      const id = await window.api.sql(
        `INSERT INTO contents (title,content,category_id,created_at) VALUES('未命名片段','',${params.cid},datetime())`,
        'insert',
        {}
      )
      return redirect(`fragmentContent/${id}`)
    }
    case 'del': {
      await window.api.sql(`DELETE from contents WHERE id=${form.id}`, 'deleted', {})
      console.log('先执行')
      return Promise.resolve(null)
    }
  }

  return {}
}
