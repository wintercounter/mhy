import FileTypes from '@/utils/fileTypes'
import { writeFile } from '@/utils'
import tslintConfig from '@/configs/tslint'

const writeConfig = (dir = process.cwd(), format = FileTypes.JSON, overwrite) => {
    return writeFile(dir, 'tslint', tslintConfig, format, overwrite)
}

export default writeConfig
