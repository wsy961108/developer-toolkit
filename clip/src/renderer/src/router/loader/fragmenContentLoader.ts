export default async ({ params }): Promise<void> => {
  return window.api.sql(`select * from contents where id = ${params.id}`, 'findOne')
}
