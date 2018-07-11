const HtmlWebpackPlugin = require('html-webpack-plugin')
const { indexTemplate } = require('../../')

module.exports.default = (plugins = []) => plugins.concat([
	new HtmlWebpackPlugin({
		inject: true,
		template: indexTemplate,
		minify: {
			removeComments: true,
			collapseWhitespace: true,
			removeRedundantAttributes: true,
			useShortDoctype: true,
			removeEmptyAttributes: true,
			removeStyleLinkTypeAttributes: true,
			keepClosingSlash: true,
			minifyJS: true,
			minifyCSS: true,
			minifyURLs: true
		}
	})
])