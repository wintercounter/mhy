const { moduleHome } = require('../../')
const path = require('path')

module.exports = () => ({
	extensions : ['.js', '.mjs', '.css', '.scss'],
	modules: ['node_modules', path.resolve(moduleHome, 'node_modules')]
})