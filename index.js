#!/usr/bin/env node

import { argv } from 'yargs'
import eco from '@mhy/config/dist/ecosystem'
import { load } from '@mhy/config/dist'
import boot from '@mhy/boot'

const a = argv._
const task = a[0]

switch (task) {
	case 'boot': {
		boot(a[1])
		break
	}
    case 'config': {
    	const config = a[1]
		const format = argv.f || argv.format || 'js'
        if (!config) {
			console.error('No config specified!')
			process.exit(2)
        }
        let result = JSON.stringify(load(config), null, 2)
		if (format === 'js') {
			result = `module.exports = module.exports.default = ${result}`
		}
        process.stdout.write(result)
        process.exit(0)
		break
    }
	case 'ui':
	case undefined:
		process.MHY_ENV = 'ui'
		if (!Object.keys(eco).length) {
			console.error('No UI Widgets are specified in the Ecosystem.')
			process.exit(2)
		}
		const { disabled = [] } = load('ui');
		// Run processes
		const processes = Object.entries(eco)
		.filter(([key]) => !disabled.includes(key))
		.sort(([,{ order: ao = 0 }], [,{ order: bo = 0 }]) => ao - bo) // static order
		.reduce((o, [name, Process]) => {
			o[name] = new Process()
			return o
		}, {})
		// Init magic
		const render = require('./ui').default
		render(processes)
		break
	default:
	case 'run': // mhy webpack
		if (task !== 'run' && !(task in eco)) {
			console.error(`No such task: ${task}`)
			process.exit(2)
		}
		process.MHY_ENV = 'cli'
		let proc, args
		if (task === 'run') {
			[, proc, ...args ] = a
		}
		else {
			[proc, ...args ] = a
		}
		const Process = eco[proc]
		if (!Process) {
			console.error(`No such process: ${proc}`)
			process.exit(2)
		}
		(new Process(...args)).on('data', l => console.log(l))
		break
}