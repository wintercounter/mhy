import path from 'path'
import requireContext from 'node-require-context'
import { addPath, addAlias } from 'module-alias'
import BuiltinModule from 'module'

let SETUP_DONE = false

;(() => {
    if (SETUP_DONE) return

    // Let's save us from the work ASAP
    const [, ...mhyIfStr] = (process.argv.find(a => a.startsWith('--mhy-if')) || '').split('=')

    if (mhyIfStr.length && !eval(mhyIfStr.join('='))) {
        console.info(`Skipping command due to falsy expression: ${mhyIfStr.join('=')}`)
        process.exit(0)
    }

    // Register dist with alias and mhy's node_modules as module source so custom JS files can use it loaded through mhy
    // Guard against poorly mocked module constructors
    const Module = module.constructor.length > 1 ? module.constructor : BuiltinModule

    const nodeModulesPath = path.resolve(__dirname, '../../node_modules')

    addAlias('@/mhy', path.resolve(__dirname, '../'))
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

    process.env.NODE_ENV = process.env.NODE_ENV || 'development'
    process.env.MHY_ENV = 'cli'
    process.env.MHY_ENVS = process.env.MHY_ENVS || process.env.NODE_ENV
    process.env.MHY_LOCAL_DIR = '.mhy'

    const envsMap = {
        prod: 'production',
        dev: 'development'
    }
    const [, mhyEnvsStr = ''] = (process.argv.find(a => a.startsWith('--mhy-env')) || '').split('=')
    const mhyEnvsList = mhyEnvsStr.split(':').filter(a => a)
    if (mhyEnvsList.length) {
        const NODE_ENV = (mhyEnvsList[0] = envsMap[mhyEnvsList[0]] || mhyEnvsList[0])
        process.env.MHY_ENVS = mhyEnvsList.join(':')
        process.env.NODE_ENV = NODE_ENV
    }

    if (process.argv.includes('--mhy-prod')) {
        process.env.NODE_ENV = 'production'
        console.warn('--mhy-prod is deprecated! Please use --mhy-env instead.')
    }

    if (process.argv.includes('--mhy-verbose')) {
        process.env.MHY_VERBOSE = true
    }

    if (process.argv.includes('--mhy-debug')) {
        process.env.MHY_DEBUG = true
    }

    if (process.argv.includes('--mhy-version')) {
        console.log(require(path.resolve(__dirname, '../../package.json')).version)
        process.exit(0)
    }

    process.env.MHY_UI_ACTION = 'action'
    process.env.MHY_UI_ACTION_CLEAR = 'clear'
    process.env.MHY_UI_ACTION_DATA = 'data'
    process.env.MHY_UI_ACTION_UPDATE = 'update'
    process.env.MHY_UI_ACTION_FUNCTION = 'function'

    const { wrap } = module.constructor

    global.requireContext = requireContext

    let requireContextResolver = function(directory, recursive, regExp) {
        var dir = require('node-dir')
        var path = require('path')
  
        // Assume absolute path by default
        var basepath = directory
  
        if (directory[0] === '.') {
            // Relative path
            basepath = path.join(__dirname, directory)
        } else if (!path.isAbsolute(directory)) {
            // Module path
            basepath = require.resolve(directory)
        }

        var keys = dir
            .files(basepath, {
            sync: true,
            recursive: recursive || false
            })
            .filter(function(file) {
            return file.match(regExp || /\.(json|js|ts)$/)
            })


        var context = function(key) {
            return require(context.resolve(key))
        }

        context.resolve = function(key) {
            return key
        }

        context.keys = function() {
            return keys
        }

        return context
    }

    module.constructor.wrap = function (script) {
        return wrap.call(this, `${script.includes('require.context') ? `require.context = ${requireContextResolver.toString()};\n` : ''}${script}`)
    }

    SETUP_DONE = true
})()
