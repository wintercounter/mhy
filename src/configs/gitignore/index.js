import mhyConfig from '@/configs/mhy'
import { loadConfig } from '@/utils'

const gitignore = loadConfig('gitignore', async () => ['/dist', '/build', ...(await mhyConfig).defaultIgnoreList])

export default gitignore
