module.exports.default = rules => [
	{
		enforce : 'pre',
		test    : /\.js$/,
		use     : 'webpack-strip-block',
		exclude : /node_modules/
	},
	...rules
]