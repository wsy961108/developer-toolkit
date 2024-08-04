import fs from "fs-extra"
import path from "path"

// 获取文件夹下所有文件
export const findFilesRecursively = async (dir, fileList = []) => {
  const isDirectory = (await fs.stat(dir)).isDirectory()
  if (isDirectory) {
    const files = await fs.readdir(dir)
    for (const file of files) {
      const filePath = path.join(dir, file)
      await findFilesRecursively(filePath, fileList)
    }
  } else {
    fileList.push(dir)
  }

  return fileList
}

// 根据文件路径获取文件名
export const getFileName = (filePath) => path.basename(filePath)

// 根据文件路径获取文件后缀
export const getFileExtension = (filePath) => path.extname(filePath).slice(1)
