const { NamedModulesPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { indexTemplate } =  require('../../')

module.exports.default = (plugins = []) => plugins.concat([
	new NamedModulesPlugin(),
	new HtmlWebpackPlugin({
		inject: true,
		template : indexTemplate
	})
])