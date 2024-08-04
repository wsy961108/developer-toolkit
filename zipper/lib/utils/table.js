import Table from "cli-table3"

const tableHead = ["文件", "压缩前", "压缩后", "压缩比"]
const tableColWidth = [20, 10, 20]
const tableStyle = {
  head: ["green"],
  border: ["yellow"],
  compact: false,
}

const initTable = (data) => {
  if (!data.length) return

  const head = tableHead

  const table = new Table({
    head,
    colWidths: tableColWidth,
    style: tableStyle,
  })

  table.push(...data)

  console.log(table.toString())
}

export default initTable
