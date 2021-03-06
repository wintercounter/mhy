import FileTypes from '@/utils/fileTypes'
import { writeFile } from '@/utils'
import babelConfig from '@/configs/babel'

const writeConfig = (dir = __dirname, format = FileTypes.JSON_NO_EXT, overwrite) => {
    return writeFile(dir, '.babelrc', babelConfig, format, overwrite)
}

export default writeConfig
