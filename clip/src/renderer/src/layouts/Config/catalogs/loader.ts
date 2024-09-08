export default (): Promise<CategoryType[]> => {
  return window.api.sql(`select * from categories`, 'findAll')
}
