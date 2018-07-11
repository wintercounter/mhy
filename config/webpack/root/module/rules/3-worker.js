module.exports.default = rules => [
	...rules,
	{
		test: /^(?:.+\.)?worker\.jsx?$/,
		exclude: /node_modules/,
		use: [
			{
				loader: 'babel-loader'
			},
			{
				loader: 'worker-loader'
			}
		]
	}
]