import FileTypes from '@/utils/fileTypes'
import { writeFile } from '@/utils'
import gitignore from '@/configs/gitignore'

const writeConfig = (dir = process.cwd(), format = FileTypes.RAW, overwrite) => {
    return writeFile(dir, '.gitignore', gitignore.join('\n'), format, overwrite)
}

export default writeConfig
