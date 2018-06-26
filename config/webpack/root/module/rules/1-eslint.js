const path = require('path')
const { moduleHome } = require('../../../../')

module.exports = (rules) => [
	...rules,
	{
		enforce: 'pre',
		test: /\.js$/,
		loader: 'eslint-loader',
		exclude: /node_modules/,
		options: {
			configFile: path.resolve(moduleHome, '.eslintrc')
		}
	}
]