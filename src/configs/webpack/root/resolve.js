import fs from 'fs'
import path from 'path'

import mhyConfig from '@/configs/mhy'

const alias = { ...mhyConfig.defaultAliases }
for (const [key, entry] of Object.entries(alias)) {
    if (!fs.existsSync(entry)) {
        alias[key] = path.resolve(process.cwd(), entry)
    } else {
        // Make sure it's a resolved path indeed
        alias[key] = path.resolve(entry)
    }
}

export default () => ({
    extensions: ['.js', '.mjs', '.jsx', '.css', '.scss', '.ts', '.tsx', '.json'],
    modules: Array.from(
        new Set([path.resolve(__dirname, '../../../../node_modules'), path.resolve(process.cwd(), 'node_modules')])
    ),
    alias
})
