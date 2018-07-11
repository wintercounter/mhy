const { moduleHome } = require('../../')
const path = require('path')

module.exports.default = () => ({
	modules: ['node_modules', path.resolve(moduleHome, 'node_modules')],
	extensions : ['.js', '.mjs', '.css', '.scss']
})