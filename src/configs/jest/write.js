import FileTypes from '@/utils/fileTypes'
import { writeFile } from '@/utils'
import jestConfig from '@/configs/jest'

const writeConfig = async (dir = process.cwd(), format = FileTypes.JS, overwrite) => {
    return writeFile(dir, 'jest.config', await jestConfig, format, overwrite)
}

export default writeConfig
