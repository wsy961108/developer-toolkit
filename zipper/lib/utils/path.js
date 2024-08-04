import path from "node:path"
import { fileURLToPath } from "node:url"
import { ensureDir } from "fs-extra"

// 转换相对路径为绝对路径
export const toAbsolutePath = (relativePath, baseDir = process.cwd()) => {
  if (import.meta.url) {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    baseDir = baseDir || __dirname
  }

  return path.resolve(baseDir, relativePath)
}

// 确保输出目录存在 不存在会自动创建
export const isFileExist = async (filePath) => ensureDir(filePath)
