import { createRequire } from "node:module";
import { stat } from "node:fs/promises";
import sharp from "sharp";

const require = createRequire(import.meta.url);
const ffmpegPath = require("ffmpeg-static");
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);

class Compressor {
  constructor() {
    if (new.target === Compressor) {
      throw new TypeError("Cannot construct Compressor instances directly");
    }
  }
  async compress() {
    throw new Error("Method 'compress()' must be implemented.");
  }
}
class JpegCompressor extends Compressor {
  constructor(options) {
    super();
    this.options = options;
  }
  async compress(inputPath, outputPath) {
    const { image } = this.options;
    await sharp(inputPath).jpeg({ quality: image }).toFile(outputPath);
  }
}
class PngCompressor extends Compressor {
  constructor(options) {
    super();
    this.options = options;
  }
  async compress(inputPath, outputPath) {
    const { image } = this.options;
    await sharp(inputPath).png({ quality: image }).toFile(outputPath);
  }
}
class WebpCompressor extends Compressor {
  constructor(options) {
    super();
    this.options = options;
  }
  async compress(inputPath, outputPath) {
    const { image } = this.options;
    await sharp(inputPath).webp({ quality: image }).toFile(outputPath);
  }
}
class Mp4Compressor extends Compressor {
  constructor(options) {
    super();
    this.options = options;
  }
  async compress(inputPath, outputPath) {
    const { video } = this.options;
    return new Promise((resolve, reject) => {
      ffmpeg(inputPath)
        .outputOptions([
          "-vcodec libx264",
          `-crf ${video}`,
          "-preset slow",
          "-c:a copy",
        ])
        .on("end", (...arg) => resolve())
        .on("error", (err) => reject(err))
        .save(outputPath);
    });
  }
}
class GifCompressor extends Compressor {
  constructor(options) {
    super();
    this.options = options;
  }
  async compress(inputPath, outputPath) {
    const { gif } = this.options;
    return new Promise((resolve, reject) => {
      ffmpeg(inputPath)
        .outputOptions(["-vf", `scale=iw:ih`, "-r", gif])
        .on("end", () => resolve())
        .on("error", (err) => reject(err))
        .save(outputPath);
    });
  }
}
export default class CompressorFactory {
  static createCompressor(format, option) {
    switch (format.toLowerCase().trim()) {
      case "jpg":
      case "jpeg":
        return new JpegCompressor(option);
      case "png":
        return new PngCompressor(option);
      case "webp":
        return new WebpCompressor(option);
      case "gif":
        return new GifCompressor(option);
      case "mp4":
        return new Mp4Compressor(option);
      default:
        throw new Error("Unsupported format");
    }
  }
  static async getFileSize(filePath) {
    const stats = await stat(filePath);
    return stats.size;
  }
}
