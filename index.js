#!/usr/bin/env node

import { argv } from 'yargs'

const a = argv._
const task = a[0]

switch (task) {
	case 'boot': {
	    const boot = require('@mhy/boot')
        const output = argv.o || argv.output
		boot(a[1], a[2], output)
		break
	}
    case 'config': {
    	const config = a[1]
		const format = argv.f || argv.format || 'js'
        if (!config) {
			console.error('No config specified!')
			process.exit(2)
        }
        let result = JSON.stringify(require(`@mhy/config/dist/${config}`), null, 2)
		if (format === 'js') {
			result = `module.exports = module.exports.default = ${result}`
		}
        process.stdout.write(result)
        process.exit(0)
		break
    }
	case 'ui':
	case undefined: {
        const load = require('@mhy/config').load
	    const eco = load('ecosystem')
        const [, ...onlyEcos] = a
        const isOnlyEco = !!onlyEcos.length
        process.MHY_ENV = 'ui'
        if (!Object.keys(eco).length) {
            console.error('No UI Widgets are specified in the Ecosystem.')
            process.exit(2)
        }
        const { disabled = [], enabled = [] } = load('ui');

        const f = { ...argv }
        delete f._;
        delete f.$0;

        const flags = []
        const [ , , ...args ] = a
        for (const [flag, value] of Object.entries(f)) {
            if (flag.length > 1) {
                flags.push(`--${flag}`)
            }
            else {
                flags.push(`-${flag}`)
            }

            if (value !== true) {
                flags.push(value)
            }
        }

        // Run processes
        const processes = Object.entries(eco)
        .filter(([ key, Process ]) => (
            (isOnlyEco && onlyEcos.includes(key))
            || (!isOnlyEco && Process.isEnabled && !disabled.includes(key))
            || (!isOnlyEco && !Process.isEnabled && enabled.includes(key))
        ))
        .sort(([ , { order: ao = 0 } ], [ , { order: bo = 0 } ]) => ao - bo) // static order
        .reduce((o, [ name, Process ]) => {
            o[ name ] = new Process({ args, flags })
            return o
        }, {})
        // Init magic
        const render = require('./ui').default
        render(processes)
        break
    }
	default:
	case 'run': {// mhy webpack
        const load = require('@mhy/config').load
        const eco = load('ecosystem')
        if (task !== 'run' && !(task in eco)) {
            console.error(`No such task: ${task}`)
            process.exit(2)
        }
        process.MHY_ENV = 'cli'
        let proc, args
        if (task === 'run') {
            [ , proc, ...args ] = a
        }
        else {
            [ proc, ...args ] = a
        }
        const Process = eco[ proc ]
        if (!Process) {
            console.error(`No such process: ${proc}`)
            process.exit(2)
        }
        const f = { ...argv }
        delete f._;
        delete f.$0;

        const flags = []
        for (const [flag, value] of Object.entries(f)) {
            if (flag.length > 1) {
                flags.push(`--${flag}`)
            }
            else {
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

        ;(new Process({ args, flags }))
            .on('data', l => console.log(l))
        break
    }
}