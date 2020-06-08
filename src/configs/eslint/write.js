import FileTypes from '@/utils/fileTypes'
import { writeFile } from '@/utils'
import eslintConfig from '@/configs/eslint'

const writeConfig = (dir = process.cwd(), format = FileTypes.JSON_NO_EXT, overwrite) => {
    return writeFile(dir, '.eslintrc', eslintConfig, format, overwrite)
}

export default writeConfig
