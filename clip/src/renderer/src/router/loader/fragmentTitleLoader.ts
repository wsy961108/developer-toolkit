export default async ({params}):Promise<void>=>{
 return window.api.sql(`select * from contents where category_id=${params.cid}`,'findAll')
}