export default (): Promise<ContentType[]> => {
  return window.api.sql(`select * from contents`, 'findAll')
}
