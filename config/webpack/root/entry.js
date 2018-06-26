const { moduleHome } = require('../../')
const path = require('path')

module.exports = () => ({
	vendor: [
		path.resolve(moduleHome, 'node_modules', 'formdata-polyfill'),
		path.resolve(moduleHome, 'node_modules', 'babel-polyfill'),
		path.resolve(moduleHome, 'node_modules', 'whatwg-fetch'),
		path.resolve(moduleHome, 'node_modules', 'url-search-params-polyfill')
	],
	app : [
		'./src'
	]
})