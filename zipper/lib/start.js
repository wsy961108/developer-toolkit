import EventEmitter from "node:events";
import ora from "ora";
import CompressorFactory from "./core/compress.js";
import initTable from "./utils/table.js";
import { toAbsolutePath, isFileExist } from "./utils/path.js";
import {
  findFilesRecursively,
  getFileName,
  getFileExtension,
} from "./utils/file.js";

class Zipper extends EventEmitter {
  constructor(input, output, option = {}) {
    super();
    this.input = toAbsolutePath(input);
    this.output = output ? toAbsolutePath(output) : this.input;
    this.option = option;
    this.table = [];
    this.files = [];
  }

  async init() {
    this.spinner = ora("压缩中...");
    this.spinner.start();
    this.files = await findFilesRecursively(this.input);
    await isFileExist(this.output);
  }

  async start() {
    for (const path of this.files) {
      const fileName = getFileName(path);
      const ext = getFileExtension(path);
      const fileRep = new RegExp(fileName);
      const outPath = `${this.output.replace(fileRep, "")}/${fileName}`;
      const compressor = CompressorFactory.createCompressor(ext, this.option);
      await compressor.compress(path, outPath);
      const [beforeSize, afterSize] = await Promise.all([
        CompressorFactory.getFileSize(path),
        CompressorFactory.getFileSize(outPath),
      ]);
      const ratio =
        (((beforeSize - afterSize) / beforeSize) * 100).toFixed(2) + "%";
      const t = [fileName, beforeSize, afterSize, ratio];
      this.table.push(t);
    }
  }

  end() {
    this.spinner.succeed("压缩成功");
    initTable(this.table);
    process.exit(1);
  }
}

export default Zipper;
