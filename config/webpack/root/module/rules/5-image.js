module.exports.default = rules => [
	...rules,
	{
		test: /\.(gif|png|jpe?g)$/i,
		loaders: [
			'file-loader?hash=sha512&digest=hex&name=[name].[hash].[ext]',
			{
				loader: 'image-webpack-loader',
				options: {
					bypassOnDebug: true,
					mozjpeg: {
						progressive: false,
						quality: 80
					}
				}
			}
		]
	}
]