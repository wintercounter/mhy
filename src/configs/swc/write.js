import FileTypes from '@/utils/fileTypes'
import { writeFile } from '@/utils'
import swcConfig from '@/configs/swc'

const writeConfig = (dir = __dirname, format = FileTypes.JSON_NO_EXT, overwrite) => {
    return writeFile(dir, '.swcrc', swcConfig, format, overwrite)
}

export default writeConfig
