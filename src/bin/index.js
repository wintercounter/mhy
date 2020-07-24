#!/usr/bin/env node
import yargs from 'yargs'
import '@/utils/globals'
import asciiArt from '@/utils/asciiArt'
import { loadCommands } from '@/processes'

// Feel like a cool hacker (-_-)
asciiArt()

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
    .option('mhy-version', {
        description: `Show the currently used version of mhy`
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
