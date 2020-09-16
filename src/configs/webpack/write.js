import FileTypes from '@/utils/fileTypes'
import { writeFile } from '@/utils'

const writeConfig = (dir = process.cwd(), format = FileTypes.JS, overwrite) => {
    return writeFile(dir, 'webpack.config', require('./'), format, overwrite)
}

export default writeConfig
