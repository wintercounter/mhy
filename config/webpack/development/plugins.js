const { HotModuleReplacementPlugin, NamedModulesPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { indexTemplate } =  require('../../')

module.exports = (plugins = []) => plugins.concat([
	new HotModuleReplacementPlugin(),
	new NamedModulesPlugin(),
	new HtmlWebpackPlugin({
		inject: true,
		template : indexTemplate
	})
])