const path = require('path')
const { moduleHome } = require('../../../../')

module.exports.default = (rules) => [
	...rules,
	{
		test: /\.js$/,
		include: path.join(moduleHome, 'src'),
		exclude: /node_modules/,
		use: [
			{
				loader: 'babel-loader',
				options: {
					plugins: [
						'@babel/plugin-syntax-dynamic-import',
						'transform-remove-strict-mode',
						'@babel/plugin-proposal-class-properties',
						'@babel/plugin-transform-object-assign',
						['@babel/plugin-syntax-decorators', {
							legacy: true
						}],
						'syntax-async-functions',
						'@babel/plugin-transform-regenerator',
						'transform-function-bind'
					],
					presets: [
						[ '@babel/preset-env', {
							targets: {
								browsers: [
									'last 2 versions',
									'safari >= 7'
								],
								esmodules: false
							}
						} ]
					]
				}
			}
		]
	}
]