import FileTypes from '@/utils/fileTypes'
import { writeFile } from '@/utils'
import tsconfig from '@/configs/typescript'

const writeConfig = async (dir = process.cwd(), format = FileTypes.JSON, overwrite) =>
    writeFile(dir, 'tsconfig', await tsconfig, format, overwrite)

export default writeConfig
