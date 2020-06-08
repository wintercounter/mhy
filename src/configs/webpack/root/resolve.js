import fs from 'fs'
import path from 'path'

import mhyConfig from '@/configs/mhy'

const defaultAliases = { ...mhyConfig.defaultAliases }
for (const [key, entry] of Object.entries(defaultAliases)) {
    if (!fs.existsSync(entry)) {
        defaultAliases[key] = path.resolve(process.cwd(), entry)
    } else {
        // Make sure it's a resolved path indeed
        defaultAliases[key] = path.resolve(entry)
    }
}

if (process.env.WEBPACK_DEV_SERVER) {
    defaultAliases['react-dom'] = '@hot-loader/react-dom'
}

export default ({ alias } = {}) => {
    return {
        extensions: ['.js', '.mjs', '.jsx', '.css', '.scss', '.ts', '.tsx', '.json'],
        modules: Array.from(
            new Set([path.resolve(__dirname, '../../../../node_modules'), path.resolve(process.cwd(), 'node_modules')])
        ),
        alias: { ...defaultAliases, ...alias }
    }
}