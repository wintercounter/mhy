const path = require('path')
const { moduleHome } = require('../../index')
const Process = require('../../../lib/Process')


const onlyChangedFlag = '--onlyChanged'
const getJestCLICmd = (flags = []) => [
	'node',
	require.resolve('jest-cli/bin/jest.js'),
	'--passWithNoTests',
	`--config=${path.resolve(moduleHome, 'config/jest/index.js')}`,
	...flags
]

const getJestServeCLICmd = (flags) => [
	'node',
	require.resolve('chokidar-cli/index.js'),
	`"src/**/*.js"`,
	'-c',
	`"${getJestCLICmd(flags).join(' ')}"`,
	'--initial',
	'--ignore',
	'"node_modules"'
]

class JestServe extends Process {
	constructor() {
		super()
		this.run('start', { flags : [onlyChangedFlag] })
	}

	onStart = ({name}, {flags}) => this.spawn(name, getJestServeCLICmd(flags))

	onRunAll = async () => {
		await this.kill('start')
		this.run('start')
	}

	onOnlyChanged = async () => {
		await this.kill('start')
		this.run('start', { flags : [onlyChangedFlag] })
	}

	// Feature test only
	processLine(d) {
		if (d.startsWith('change:')) {
			this.emit('action', 'clear')
		}
		return d
			.replace('PASS', '{green-bg} PASS {/green-bg}')
			.replace('FAIL', '{red-bg} FAIL {/red-bg}')
	}

	actions = [
		{
			name: 'start',
			enabled: true,
			onRun: this.onStart
		},
		{
			name: 'changed',
			label: 'Only Changed',
			shortcut: 'c',
			enabled: true,
			onRun: this.onOnlyChanged
		},
		{
			name: 'all',
			label: 'Run All',
			shortcut: 'a',
			enabled: true,
			onRun: this.onRunAll
		}
	]
}

module.exports.default = () => JestServe

