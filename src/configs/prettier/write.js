import FileTypes from '@/utils/fileTypes'
import { writeFile } from '@/utils'
import prettierConfig from '@/configs/prettier/index'

const writeConfig = (dir = process.cwd(), format = FileTypes.JSON_NO_EXT, overwrite) => {
    let filename
    switch (format) {
        case FileTypes.JS:
            filename = 'prettier.config'
            break
        case FileTypes.JSON_NO_EXT:
        case FileTypes.JSON:
        default:
            filename = '.prettierrc'
    }
    return writeFile(dir, filename, prettierConfig, format, overwrite)
}

export default writeConfig
