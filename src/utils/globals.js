import path from 'path'
import { addPath, addAlias } from 'module-alias'

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
    addAlias('@/mhy', path.resolve(__dirname, '../'))
    addPath(path.resolve(__dirname, '../../node_modules'))

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

    SETUP_DONE = true
})()
