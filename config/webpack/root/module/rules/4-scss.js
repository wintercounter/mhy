module.exports.default = rules => [
	...rules,
	{
		test: /\.s?css$/,
		use: [
			{
				loader: require.resolve('style-loader')
			},
			{
				loader: require.resolve('css-loader'),
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
				loader: require.resolve('sass-loader'),
				options: {
					sourceMap: true
				}
			},
			{
				loader: require.resolve('postcss-loader'),
				options: {
					sourceMap: true,
					plugins: [
						require('postcss-import')(),
						require('postcss-cssnext')()
					]
				}
			}
		]
	}
]