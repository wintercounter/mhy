const path = require('path')
const fs = require('fs')
const { moduleHome } = require('../../../../')

let configFile = path.resolve(moduleHome, '.eslintrc')
configFile = fs.existsSync(configFile)
	? configFile
	:  path.resolve(moduleHome, '../', '.eslintrc')

module.exports.default = (rules) => [
	...rules,
	{
		enforce: 'pre',
		test: /\.js$/,
		loader: require.resolve('eslint-loader'),
		exclude: /node_modules/,
		options: { configFile }
	}
]