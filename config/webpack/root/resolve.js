const { moduleHome } = require('../../')
const path = require('path')
const fs = require('fs')

const mhyNodeModules = fs.existsSync(path.join(moduleHome, 'node_modules'))
	? path.resolve(moduleHome, 'node_modules')
	: path.resolve(moduleHome, '../', 'node_modules')

module.exports.default = () => ({
	extensions : ['.js', '.mjs', '.css', '.scss'],
	modules: Array.from(new Set([
		path.resolve(mhyNodeModules),
		path.resolve(process.cwd(), 'node_modules')
	]))
})