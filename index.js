#!/usr/bin/env node

const pm2 = require('pm2')
const argv = require('yargs').argv
const path = require('path')
const kill = require('tree-kill');

const pm2BinPath = path.resolve(__dirname, 'node_modules/pm2/bin/pm2')
const pm2EcoPath = path.resolve(__dirname, 'config/ecosystem/ecosystem.config.js')

const task = argv._[0]

switch (task) {
	case 'dev':
		const spawn = require('child_process').spawn
		const cmd = spawn('node', [
			pm2BinPath,
			'start',
			pm2EcoPath,
		])
		cmd.on('exit', () => {
			const cmd2 = spawn('node', [
				pm2BinPath,
				'monit'
			], { shell: true, stdio: 'inherit' })
			cmd2.on('data', data => console.log(data))
			cmd2.on('exit', () => {
				console.log('Shutting down...')
				const promises = []
				require(pm2EcoPath).apps.forEach(({name}) => {
					const cmd = spawn('node', [
						pm2BinPath,
						'stop',
						name
					])
					promises.push(new Promise(resolve => {
						cmd.on('exit', resolve)
					}))
				})
				Promise.all(promises).then(() => {
					console.clear()
					process.exit(2)
				})
			})
		})
		break
	case undefined:
		console.error('No task specified'); break
	default:
		console.error(`No such task: ${task}`)
}