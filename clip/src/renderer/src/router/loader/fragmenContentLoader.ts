export default async ({ params }): Promise<void> => {
  console.log(params, 'loader')
  return window.api.sql(`select * from contents where id = ${params.id}`, 'findOne')
}