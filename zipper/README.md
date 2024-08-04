# zipper

1. 安装与设置版本信息
   - 使用 `npm install @developer-toolkit/zipper` 安装。
   - `zipper -v` 选项来显示版本信息。

2. 命令定义：
   - `zipper start <input> [output]`，提供输入路径 和 输出路径 对资源进行压缩

3. 选项定义：

- `zipper start input.mp4 output --video 28` -vq, --video <质量>：设定视频压缩质量的选项。
- `zipper start input.jpg output --image 85` -iq, --image <质量>：设定图片压缩质量的选项。
- `zipper start input.gif output --image 30` -iq, --image <质量>：设定图片压缩质量的选项。

4. 支持格式：
   - jpg、jpeg、png、webp、gif、mp4
