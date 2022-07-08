import FileTypes from '@/utils/fileTypes'
import { writeFile } from '@/utils'

const writeConfig = (dir = process.cwd(), format = FileTypes.JS, overwrite) => {
    const fn = require('./')
    return writeFile(dir, 'webpack.config', fn.default || fn, format, overwrite)
}

export default writeConfig
