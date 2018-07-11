module.exports.default = rules => [
	...rules,
	{
		test: /\.s?css$/,
		use: [
			{
				loader: 'style-loader'
			},
			{
				loader: 'css-loader',
				options: {
					importLoaders: 2,
					localIdentName: '[local]__[hash:base64:5]',
					sourceMap: true,
					modules: true,
					minimize: true,
					camelCase: true
				}
			},
			{
				loader: 'sass-loader',
				options: {
					sourceMap: true
				}
			},
			{
				loader: 'postcss-loader',
				options: {
					sourceMap: true,
					plugins: [
						require('postcss-import')(),
						require('autoprefixer')(),
						require('postcss-cssnext')()
					]
				}
			}
		]
	}
]