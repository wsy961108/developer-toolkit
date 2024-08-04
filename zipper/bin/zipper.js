#!/usr/bin/env node
import { program } from "commander";
import { version } from "../lib/utils/version.js";
import Zipper from "../lib/start.js";

program
  .version(version, "-v, --version", "输出当前版本号")
  .usage("<command> [options]")
  .helpOption("-h, --help", "显示帮助信息");

program
  .command("start <input> [output]")
  .description("对音视频进行压缩处理")
  .option(
    "-vq, --video <质量>",
    "数值越大，压缩率越高，文件越小，但处理时间也越长。 取值 0-51",
    28
  )
  .option(
    "-iq, --image <质量>",
    "数值越大，压缩率越高，文件越小，但处理时间也越长。 取值 1-100",
    85
  )
  .option(
    "-gq, --gif <质量>",
    "0-10 如果需要不需要高的流畅度，10-30 如果需要非常流畅的动画 ",
    30
  )
  .action(async (input, output, options) => {
    const inputPath = input;
    const outputPath = output ?? input;
    const S = new Zipper(inputPath, outputPath, options);
    await S.init();
    await S.start();
    S.end();
  });

program.parse(process.argv);
