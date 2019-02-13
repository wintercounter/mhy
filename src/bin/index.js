#!/usr/bin/env node
import path from 'path'
import yargs from 'yargs'
import { loadCommands } from '@/processes'

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

if (process.argv.includes('--mhy-debug')) {
    process.env.MHY_DEBUG = true
}

yargs
    .usage('\nUsage:\n  mhy [command (process)] [process args] [mhy options]')
    .scriptName('')
    .help('mhy-help')
    .version(false)
    .option('mhy-verbose', {
        default: false,
        description: 'Show more info than usual'
    })
    .option('mhy-debug', {
        default: false,
        description: 'Show debug information'
    })
    .option('mhy-prod', {
        description: 'forces `process.env.NODE_ENV` to be "production"'
    })
    .version('--mhy-version', 'desc', require(path.resolve(__dirname, '../../package.json')).version)
    .recommendCommands()

// Register commands
try {
    loadCommands()
} catch (e) {
    console.error('FATAL: Could not register.', e)
    process.exit(1)
}

// Initialize yargs
yargs.argv
