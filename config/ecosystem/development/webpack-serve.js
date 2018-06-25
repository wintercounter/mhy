const path = require('path')
const { moduleHome } = require('../../')

module.exports = () => ({
	name: 'webpack-serve',
	script: path.resolve(moduleHome, 'node_modules/webpack-serve/cli.js'),
	args: `--config ${path.resolve(moduleHome, 'config/webpack/index.js')}`
})