export default async ({ request, params }) => {
  const data = await request.formData()
  const content = data.get('content')
  const p = {
    content,
    id: params.lid
  }
  return window.api.sql(`update contents set content=@content where id=@id`, 'update', p)
}
