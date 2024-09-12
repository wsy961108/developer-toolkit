export default ({ params }): Promise<ContentType> => {
  return window.api.sql(
    `select * from contents where category_id=${params.cid} and id=${params.lid}`,
    'findOne'
  )
}
