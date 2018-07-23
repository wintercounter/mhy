#!/usr/bin/env node

import { argv } from 'yargs'
import path from 'path'

import render from './ui'

const ecoPath = path.resolve(__dirname, 'config/ecosystem/')
const eco = require(ecoPath).default
const a = argv._
const task = a[0]

switch (task) {
	case 'ui':
	case undefined:
		process.MHY_ENV = 'ui'
		if (!Object.keys(eco).length) {
			console.error('No UI Widgets are specified in the Ecosystem.')
			process.exit(2)
		}
		// Run processes
		const processes = Object.entries(eco)
		.sort(([,{ order: ao = 0 }], [,{ order: bo = 0 }]) => ao - bo) // static order
		.reduce((o, [name, Process]) => {
			o[name] = new Process()
			return o
		}, {})
		// Init magic
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