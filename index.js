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
		], { shell: true, stdio: 'inherit' })
		let cmd2

		cmd.on('exit', () => {
			cmd2 = spawn('node', [
				pm2BinPath,
				'monit'
			], { shell: true, stdio: 'inherit' })
			cmd2.on('data', data => console.log(data))
		})
		/**/
		cmd.on('data', data => console.log(data))
		//cmd2.on('data', data => console.log(data))
		process.on('SIGINT', () => {
			kill(cmd.pid)
			cmd2 && kill(cmd2.pid)
			require(pm2EcoPath).apps.forEach(({name}) => {
				pm2.delete(name)
			})
			pm2.killDaemon()
			setTimeout(()=>process.exit(2), 1000)
		})
		break
	case undefined:
		console.error('No task specified'); break
	default:
		console.error(`No such task: ${task}`)
}