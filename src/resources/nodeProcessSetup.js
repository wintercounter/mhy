import fs from 'fs'
import path from 'path'
import { addPath, addAliases } from 'module-alias'
import mhyConfig from '@/configs/mhy'
import swcConfig from '@/configs/swc'
import register from '@swc/register'
import BuiltinModule from 'module'

// Expose mhy config as Global (just like with webpack)
global.mhy = mhyConfig

// Guard against poorly mocked module constructors
const Module = module.constructor.length > 1 ? module.constructor : BuiltinModule

swcConfig.module = {
    type: 'commonjs'
}

register(swcConfig)

const tryResolve = (...m) => {
    try {
        return require.resolve(...m)
    } catch (e) {
        return null
    }
}

const localNodeModulesDir = path.resolve(process.cwd(), 'node_modules')
addPath(localNodeModulesDir)

const nodeModulesPath = path.resolve(__dirname, '../../')
addPath(nodeModulesPath)

const oldResolveFilename = Module._resolveFilename
Module._resolveFilename = function (request, parentModule, isMain, options) {
    if (!parentModule.paths.includes(nodeModulesPath)) {
        parentModule.paths.push(nodeModulesPath)
    }
    return oldResolveFilename.call(this, request, parentModule, isMain, options)
}

const oldNodeModulePaths = Module._nodeModulePaths
Module._nodeModulePaths = function (from) {
    const paths = oldNodeModulePaths.call(this, from)

    if (!paths.includes(nodeModulesPath)) {
        paths.push(nodeModulesPath)
    }

    return paths
}

const alias = { ...mhyConfig.defaultAliases }
for (const [key, entry] of Object.entries(alias)) {
    // eslint-disable-next-line wrap-regex
    const isModule = !/[/\\.]/.test(entry)
    if (isModule && tryResolve(entry)) {
        alias[key] = tryResolve(entry)
    } else if (isModule && tryResolve(process.cwd(), 'node_modules', entry)) {
        alias[key] = tryResolve(process.cwd(), 'node_modules', entry)
    } else if (!fs.existsSync(entry)) {
        alias[key] = path.resolve(process.cwd(), entry)
    } else {
        // Make sure it's a resolved path indeed
        alias[key] = path.resolve(entry)
    }
    // Remove index.js to allow folders
    if (alias[key].split(path.sep).pop().includes('index.')) {
        alias[key] = path.dirname(alias[key])
    }
}
addAliases(alias)

const scriptKey = '--mhy-script'
const scriptIndex = process.argv.findIndex(v => v.includes(scriptKey))
const scriptValue = process.argv[scriptIndex]
const src =
    scriptValue.length === scriptKey.length ? process.argv[scriptIndex + 1] : scriptValue.replace(`${scriptKey}=`, '')

// Remove them
process.argv.splice(scriptIndex, 2)

if (src) {
    require(path.resolve(process.cwd(), src))
}
