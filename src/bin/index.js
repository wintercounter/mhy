#!/usr/bin/env node
import yargs from 'yargs'
import { loadCommands } from '@/processes'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
process.env.MHY_ENV = 'cli'
process.env.MHY_LOCAL_DIR = '.mhy'

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
