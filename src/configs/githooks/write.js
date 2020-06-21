import fs from 'fs'
import path from 'path'
import FileTypes from '@/utils/fileTypes'
import githooksConfig from '@/configs/githooks'
import { writeFile, createSymlink } from '@/utils'

const GIT_HOOKS_DIR = path.resolve(__dirname, '../../../.git/hooks')

const writeConfig = (dir = process.cwd(), format = FileTypes.JSON_NO_EXT, overwrite) => {
    // Expose Husky scripts in consumer's repo
    createSymlink(dir, 'node_modules/.bin/husky-run', 'dir')
    createSymlink(dir, 'node_modules/.bin/husky-upgrade', 'dir')
    // Create separate links as hooks folder already exists with samples
    fs.readdirSync(GIT_HOOKS_DIR)
        .filter(filename => filename.search('sample') === -1)
        .forEach(filename => createSymlink(dir, `.git/hooks/${filename}`))

    return writeFile(dir, '.huskyrc', githooksConfig, format, overwrite)
}

export default writeConfig
