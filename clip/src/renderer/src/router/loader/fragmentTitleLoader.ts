export default async ({ params }): Promise<void> => {
  const data = window.api.sql(
    `select * from contents where category_id=${params.cid}`,
    'findAll',
    {}
  )
  data.then((res) => console.log('fragmenContentTitleAction', params, res))
  return data
}
