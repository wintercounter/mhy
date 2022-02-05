import fs from 'fs'
import path from 'path'

import mhyConfig from '@/configs/mhy'

const tryResolve = (...m) => {
    try {
        return require.resolve(...m)
    } catch (e) {
        return null
    }
}

const defaultAliases = { ...mhyConfig.defaultAliases }
for (const [key, entry] of Object.entries(defaultAliases)) {
    // eslint-disable-next-line wrap-regex
    const isModule = !/[/\\.]/.test(entry)
    if (isModule && tryResolve(entry)) {
        defaultAliases[key] = tryResolve(entry)
    } else if (isModule && tryResolve(process.cwd(), 'node_modules', entry)) {
        defaultAliases[key] = tryResolve(process.cwd(), 'node_modules', entry)
    } else if (!fs.existsSync(entry)) {
        defaultAliases[key] = path.resolve(process.cwd(), entry)
    } else {
        // Make sure it's a resolved path indeed
        defaultAliases[key] = path.resolve(entry)
    }
}

export default ({ alias } = {}) => {
    return {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.mjs'],
        modules: Array.from(
            new Set([path.resolve(__dirname, '../../../../node_modules'), path.resolve(process.cwd(), 'node_modules')])
        ),
        alias: { ...defaultAliases, ...alias }
    }
}
