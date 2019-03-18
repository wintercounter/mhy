import path from 'path'
import { addPath, addAlias } from 'module-alias'

let SETUP_DONE = false

;(() => {
    if (SETUP_DONE) return

    // Register dist with alias and mhy's node_modules as module source so custom JS files can use it loaded through mhy
    addAlias('@/mhy', path.resolve(__dirname, '../'))
    addPath(path.resolve(__dirname, '../../node_modules'))

    process.env.NODE_ENV = process.env.NODE_ENV || 'development'
    process.env.MHY_ENV = 'cli'
    process.env.MHY_LOCAL_DIR = '.mhy'

    if (process.argv.includes('--mhy-prod')) {
        process.env.NODE_ENV = 'production'
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
