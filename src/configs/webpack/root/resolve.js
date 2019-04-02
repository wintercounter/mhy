import fs from 'fs'
import path from 'path'

import mhyConfig from '@/configs/mhy'

const alias = { ...mhyConfig.defaultAliases }
for (const [key, entry] of Object.values(alias)) {
    const p = path.resolve(process.cwd(), entry)
    if (fs.existsSync(p)) {
        alias[key] = p
    }
}

export default () => ({
    extensions: ['.js', '.mjs', '.jsx', '.css', '.scss', '.ts', '.tsx', '.json'],
    modules: Array.from(
        new Set([path.resolve(__dirname, '../../../../node_modules'), path.resolve(process.cwd(), 'node_modules')])
    ),
    alias
})
