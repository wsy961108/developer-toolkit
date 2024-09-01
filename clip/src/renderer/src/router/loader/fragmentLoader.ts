export default async (): Promise<void> => {
  return window.api.sql(`select * from categories`, 'findAll')
}
