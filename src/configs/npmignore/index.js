import mhyConfig from '@/configs/mhy'
import { loadConfig } from '@/utils'

const npmignore = loadConfig('npmignore', [
    '.circleci',
    'docker',
    'src',
    'build',
    ...mhyConfig.defaultIgnoreList
])

export default npmignore
