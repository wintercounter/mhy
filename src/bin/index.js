#!/usr/bin/env node
import yargs from 'yargs'
import { loadCommands } from '@/processes'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
process.env.MHY_ENV = 'cli'
process.env.MHY_LOCAL_DIR = 'mhy'

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

/*
const a = argv._
const task = a[0]

switch (task) {
    case 'boot': {
        const boot = require('@mhy/boot')
        const output = argv.o || argv.output
        boot(a[1], a[2], output)
        break
    }

    case 'ui':
    case undefined: {
        const load = require('@mhy/config').load
        const eco = load('ecosystem')
        const [, ...onlyEcos] = a
        const isOnlyEco = !!onlyEcos.length
        process.env.MHY_ENV = 'ui'
        if (!Object.keys(eco).length) {
            console.error('No UI Widgets are specified in the Ecosystem.')
            process.exit(1)
        }
        const { disabled = [], enabled = [] } = load('ui')

        const f = { ...argv }
        delete f._
        delete f.$0

        const flags = []
        const [, , ...args] = a
        for (const [flag, value] of Object.entries(f)) {
            if (flag.length > 1) {
                flags.push(`--${flag}`)
            } else {
                flags.push(`-${flag}`)
            }

            if (value !== true) {
                flags.push(value)
            }
        }

        // Run processes
        const processes = Object.entries(eco)
            .filter(
                ([key, Process]) =>
                    (isOnlyEco && onlyEcos.includes(key)) ||
                    (!isOnlyEco &&
                        Process.isDefault &&
                        !disabled.includes(key)) ||
                    (!isOnlyEco && !Process.isDefault && enabled.includes(key))
            )
            .sort(([, { order: ao = 0 }], [, { order: bo = 0 }]) => ao - bo) // static order
            .reduce((o, [name, Process]) => {
                o[name] = new Process({ args, flags })
                return o
            }, {})
        // Init magic
        const render = require('../process/ecosystem/root/ui').default
        render(processes)
        break
    }
    default:
    case 'run': {
        // mhy webpack
        process.env.MHY_ENV = 'cli'
        let proc, args
        if (task === 'run') {
            ;[, proc, ...args] = a
        } else {
            ;[proc, ...args] = a
        }

        const Process = require('@mhy/config').loadProcess(proc)
        if (!Process) {
            console.error(`No such process: ${proc}`)
            process.exit(1)
        }
        const f = { ...argv }
        delete f._
        delete f.$0

        const flags = []
        for (const [flag, value] of Object.entries(f)) {
            if (flag.length > 1) {
                flags.push(`--${flag}`)
            } else {
                flags.push(`-${flag}`)
            }
            if (value !== true) {
                flags.push(value)
            }
        }

        args = args.filter(arg => {
            if (!Process.prototype[arg]) {
                flags.push(arg)
                return false
            }
            return true
        })

        const p = new Process({ args, flags })
        p.on('data', l => console.log(l))
        p.on('error', e => {
            console.log(e)
            process.exit(1)
        })

        break
    }
}*/
