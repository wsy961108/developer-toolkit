export default ({ params }): Promise<ContentType[]> => {
  return window.api.sql(`select * from contents where category_id=${params.cid} ORDER BY created_at DESC`, 'findAll')
}
