import fs from 'fs'
import path from 'path'

const ROOT = path.resolve(__dirname, '../..')

const errorHandler = error => error && console.log(`[createSymlink]: ${error}`)

const createSymlink = (workDir, target, type = 'file') => {
    const src = path.resolve(ROOT, target)
    const dest = path.resolve(workDir, target)
    !fs.existsSync(dest) && fs.symlink(src, dest, type, errorHandler)
}

export default createSymlink