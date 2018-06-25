module.exports = rules => [
	...rules,
	{
		test: /\.svg$/,
		use: 'url-loader?limit=65000&mimetype=image/svg+xml&name=[name].[ext]'
	},
	{
		test: /\.woff$/,
		use: 'url-loader?limit=65000&mimetype=application/font-woff&name=[name].[ext]'
	},
	{
		test: /\.woff2$/,
		use: 'url-loader?limit=65000&mimetype=application/font-woff2&name=[name].[ext]'
	},
	{
		test: /\.[ot]tf$/,
		use: 'url-loader?limit=65000&mimetype=application/octet-stream&name=[name].[ext]'
	},
	{
		test: /\.eot$/,
		use: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=[name].[ext]'
	}
]