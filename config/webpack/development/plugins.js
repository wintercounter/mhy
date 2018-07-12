const { NamedModulesPlugin, HotModuleReplacementPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { indexTemplate } =  require('../../')

module.exports.default = (plugins = []) => {
	plugins = plugins.concat([
		new NamedModulesPlugin(),
		new HtmlWebpackPlugin({
			inject: true,
			template : indexTemplate
		})
	])
	if (process.env.WEBPACK_SERVE) {
		plugins.push(new HotModuleReplacementPlugin())
	}
	return plugins
}