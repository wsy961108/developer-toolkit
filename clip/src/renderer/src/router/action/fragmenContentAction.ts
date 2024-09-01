export default async ({ request, params }) => {
  const data = await request.formData()
  const content = data.get('content')
  const sql = {
    content,
    id: params.id
  }
  const res = window.api.sql(`update contents set content=@content where id=@id`, 'update', sql)
  return res
}
