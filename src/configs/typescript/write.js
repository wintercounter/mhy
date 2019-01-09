import FileTypes from '@/utils/fileTypes'
import { writeFile } from '@/utils'
import tsconfig from '@/configs/typescript'

const writeConfig = (dir = process.cwd(), format = FileTypes.JSON, overwrite) =>
    writeFile(dir, 'tsconfig', tsconfig, format, overwrite)

export default writeConfig
