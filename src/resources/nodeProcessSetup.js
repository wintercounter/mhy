import fs from 'fs'
import path from 'path'
import { addPath, addAliases } from 'module-alias'
import _mhyConfig from '@/configs/mhy'
import _babelConfig from '@/configs/babel'
import register from '@babel/register'
import BuiltinModule from 'module'

export default new Promise(async (
    resolve
) => {
    // Guard against poorly mocked module constructors
    const Module = module.constructor.length > 1 ? module.constructor : BuiltinModule
    const mhyConfig = await _mhyConfig
    const babelConfig = await _babelConfig

    babelConfig.presets.find(p => p[0].includes('preset-env'))[1] = {
        modules: 'commonjs',
        targets: {
            node: true,
            browsers: false,
            esmodules: true
        }
    }
    babelConfig.extensions = ['.es6', '.es', '.jsx', '.js', '.mjs', '.ts', '.tsx']
    babelConfig.cache = false

    register(babelConfig)
    addPath(path.resolve(process.cwd(), 'node_modules'))
    addPath(path.resolve(__dirname, '../../node_modules'))

    const oldResolveFilename = Module._resolveFilename

    Module._resolveFilename = function(request, parentModule, isMain, options) {
        const nodeModulesPath = path.resolve(__dirname, '../../')
        if (!parentModule.paths.includes(nodeModulesPath)) {
            parentModule.paths.push(nodeModulesPath)
        }
        return oldResolveFilename.call(this, request, parentModule, isMain, options)
    }

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

    const scriptKey = '--mhy-script'
    const scriptIndex = process.argv.findIndex(v => v.includes(scriptKey))
    const scriptValue = process.argv[scriptIndex] || ''
    const src =
        scriptValue.length === scriptKey.length
            ? process.argv[scriptIndex + 1]
            : scriptValue.replace(`${scriptKey}=`, '')

    // Remove them
    process.argv.splice(scriptIndex, 2)

    resolve()

    if (src) {
        require(path.resolve(process.cwd(), src))
    }
})
