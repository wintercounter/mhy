import FileTypes from '@/utils/fileTypes'
import { writeFile } from '@/utils'
import npmignore from '@/configs/npmignore'

const writeConfig = async (dir = process.cwd(), format = FileTypes.RAW, overwrite) => {
    return writeFile(dir, '.npmignore', (await npmignore).join('\n'), format, overwrite)
}

export default writeConfig
