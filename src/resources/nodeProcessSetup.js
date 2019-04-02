import fs from 'fs'
import path from 'path'
import { addPath, addAliases } from 'module-alias'
import mhyConfig from '@/configs/mhy'
import babelConfig from '@/configs/babel'
import register from '@babel/register'

babelConfig.presets.find(p => p[0].includes('preset-env'))[1] = {
    modules: 'commonjs',
    targets: {
        node: true,
        browsers: false,
        esmodules: true
    }
}
const regeneratorIndex = babelConfig.plugins.findIndex(p => p.includes && p.includes('regenerator'))
babelConfig.plugins.splice(regeneratorIndex, 1)
babelConfig.extensions = ['.es6', '.es', '.jsx', '.js', '.mjs', '.ts', '.tsx']
babelConfig.cache = false

register(babelConfig)
addPath(path.resolve(process.cwd(), 'node_modules'))
addPath(path.resolve(__dirname, '../../node_modules'))

const alias = { ...mhyConfig.defaultAliases }
for (const [key, entry] of Object.entries(alias)) {
    if (!fs.existsSync(entry)) {
        alias[key] = path.resolve(process.cwd(), entry)
    } else {
        // Make sure it's a resolved path indeed
        alias[key] = path.resolve(entry)
    }
}
addAliases(alias)

const scriptIndex = process.argv.findIndex(v => v === '--mhy-script')

require(path.resolve(process.cwd(), process.argv[scriptIndex + 1]))
