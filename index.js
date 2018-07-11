#!/usr/bin/env node

import { argv } from 'yargs'
import path from 'path'

import render from './ui'

const ecoPath = path.resolve(__dirname, 'config/ecosystem/')
const eco = require(ecoPath).default
const task = argv._[0]

switch (task) {
	case 'ui':
	case undefined:
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
		console.error(`No such task: ${task}`)
}