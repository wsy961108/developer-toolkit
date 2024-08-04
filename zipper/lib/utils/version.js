import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { dirname } from "node:path"
import semver from "semver"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const pkgPath = path.join(__dirname, "../../package.json")

const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"))

const currentVersion = pkg.version

function writeVersion(version) {
  pkg.version = version
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2), "utf8")
}
// 增加一个补丁版本
function writePatchVersion() {
  const addPatchVersion = semver.inc(currentVersion, "patch")
  writeVersion(addPatchVersion)
}
// 增加一个次版本
function writeMinorVersion() {
  const addMinorVersion = semver.inc(currentVersion, "minor")
  writeVersion(addMinorVersion)
}
// 增加一个主版本
function writeMajorVersion() {
  const addMajorVersion = semver.inc(currentVersion, "major")
  writeVersion(addMajorVersion)
}

export {
  writePatchVersion,
  writeMinorVersion,
  writeMajorVersion,
  currentVersion as version,
}
