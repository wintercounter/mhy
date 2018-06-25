module.exports = (rules) => [
	...rules,
	{
		enforce: 'pre',
		test: /\.js$/,
		use: 'eslint-loader',
		exclude: /node_modules|lib/
	}
]