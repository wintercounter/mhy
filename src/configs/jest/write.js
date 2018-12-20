import FileTypes from '@/utils/fileTypes'
import { writeFile } from '@/utils'
import jestConfig from '@/configs/jest'

const writeConfig = (
    dir = process.cwd(),
    format = FileTypes.JS,
    overwrite = false
) => {
    return writeFile(dir, 'jest.config', jestConfig, format, overwrite)
}

export default writeConfig
