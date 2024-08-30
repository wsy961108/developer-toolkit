import { redirect } from 'react-router-dom'

export default async ({ request, params }) => {
  const formData = await request.formData()
  const form = Object.fromEntries(formData)
  console.log(params)
  switch (form.action) {
    case 'add':
      const id = await window.api.sql(
        `INSERT INTO contents (title,content,category_id,created_at) VALUES('未命名片段','',${params.cid},datetime())`,
        'insert',
        {}
      )
      return redirect(`fragmentContent/${id}`)
  }

  return {}
}
