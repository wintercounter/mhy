import mhyConfig from '@/configs/mhy'
import { loadConfig } from '@/utils'

const npmignore = loadConfig('npmignore', async () => ([
    '.circleci',
    '/docker',
    '/src',
    '/build',
    '/docs',
    'book.json',
    ...(await mhyConfig).defaultIgnoreList
]))

export default npmignore
