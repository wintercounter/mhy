import EventEmitter from 'events'
import { spawn } from 'child_process'
import tk from 'tree-kill'

const _onData = Symbol()
const instances = new Set()

module.exports = class Process extends EventEmitter {
	processes = new Map()

	constructor() {
		super()
		instances.add(this)
	}

	spawn(id, [bin, ...cmd]) {
		const p = spawn(bin, [...cmd, '--color=always'], { shell : true })
		this.processes.set(id, p)
		p.stdout.on('data', this[_onData])
		p.stderr.on('data', this[_onData])
		return p
	}

	[_onData] = line => this.log(line.toString('utf8').trim())

	log(d) {
		this.emit('data', this.processLine(d))
	}

	processLine(d) {
		return d
	}

	run(name, props = {}) {
		const action = this.actions.find(({name:n}) => n === name)
		this.emit('action', 'clear')
		this.log(`{blue-fg}Running action ${name}{/blue-fg}`)
		action.onRun(action, props)
	}

	async kill(name) {
		const { pid } = this.processes.get(name)
		this.log(`{red-fg}Killing process ${name}{/red-fg}`)
		await new Promise(resolve => tk(pid, resolve))
		this.log(`{green-fg}Action ${name} killed successfully{/green-fg}`)
	}

	async clean() {
		this.log('Cleaning up, please wait...')
		for (const [, {pid}] of this.processes) {
			await new Promise(resolve => tk(pid, resolve))
		}
	}
}

// Cleanup handling (in case UI is used, it'll be caught there)
const exit = async () => {
	process.stdin.resume()
	for (const proc of instances) {
		await proc.clean()
	}
	process.exit()
}

//do something when app is closing
process.on('exit', exit)

//catches ctrl+c event
process.on('SIGINT', exit)
process.on('SIGTERM', exit)

// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exit)
process.on('SIGUSR2', exit)

//catches uncaught exceptions
process.on('uncaughtException', exit)

