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

if (process.argv.includes('--mhy-version')) {
    console.log(require(path.resolve(__dirname, '../../package.json')).version)
    process.exit(0)
}

yargs
    .usage('\nUsage:\n  mhy [command (process)] [process args] [mhy options]')
    .scriptName('')
    .help('mhy-help')
    .version(false)
    .option('mhy-verbose', {
        default: false,
        description: 'Show more info than usual',
        choices: [false, true],
        type: 'boolean'
    })
    .option('mhy-debug', {
        default: false,
        description: 'Show debug information',
        choices: [false, true],
        type: 'boolean'
    })
    .option('mhy-prod', {
        description: 'forces `process.env.NODE_ENV` to be "production"'
    })
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
