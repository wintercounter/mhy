const path = require('path')
const { moduleHome } = require('../../index')
const Process = require('../../../lib/Process')

const CmdServeCLI = [
	'node',
	path.resolve(moduleHome, 'node_modules/webpack-serve/cli.js'),
	'--config',
	path.resolve(moduleHome, 'config/webpack/index.js')
]

class Serve extends Process {
	constructor() {
		super()
		this.run('start')
	}

	onStart = ({name}) => this.spawn(name, CmdServeCLI)

	onRestart = async () => {
		await this.kill('start')
		this.run('start')
	}

	actions = [
		{
			name: 'start',
			enabled: true,
			onRun: this.onStart
		},
		{
			name: 'restart',
			label: 'Restart',
			shortcut: 'r',
			enabled: true,
			onRun: this.onRestart
		}
	]
}

module.exports.default = () => Serve
