import mhyConfig from '@/configs/mhy'
import { loadConfig } from '@/utils'

const gitignore = loadConfig('gitignore', ['/dist', '/build', ...mhyConfig.defaultIgnoreList])

export default gitignore
