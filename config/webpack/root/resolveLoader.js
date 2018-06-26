const { moduleHome } = require('../../')
const path = require('path')

module.exports = () => ({
	modules: ['node_modules', path.resolve(moduleHome, 'node_modules')],
	extensions : ['.js', '.mjs', '.css', '.scss']
})