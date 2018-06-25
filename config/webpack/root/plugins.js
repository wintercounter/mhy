const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = (plugins = []) => {
	if (!process.env.WEBPACK_SERVE) {
		plugins.push(
			new ExtractTextPlugin({
				filename: `[name].[hash:5].css`,
				allChunks: true
			})
		)
	}
	return plugins.concat([
		new ManifestPlugin({
			fileName: './build/manifest.json',
		})
	])
}

