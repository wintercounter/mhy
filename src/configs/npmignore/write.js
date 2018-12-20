import FileTypes from '@/utils/fileTypes'
import { writeFile } from '@/utils'
import npmignore from '@/configs/npmignore'

const writeConfig = (
    dir = process.cwd(),
    format = FileTypes.RAW,
    overwrite = false
) => {
    return writeFile(dir, '.npmignore', npmignore.join('\n'), format, overwrite)
}

export default writeConfig
