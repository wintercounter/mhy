const path = require('path')
const { moduleHome } = require('../../../../')

module.exports.default = (rules) => [
	...rules,
	{
		test: /\.jsx?$/,
		include: Array.from(new Set([ // Make items unique
			path.join(moduleHome, 'src'),
			path.join(process.cwd(), 'src'),
		])),
		exclude: /node_modules/,
		use: [
			{
				loader: require.resolve('babel-loader'),
				options: {
					plugins: [
						require.resolve('@babel/plugin-syntax-dynamic-import'),
						require.resolve('babel-plugin-transform-remove-strict-mode'),
						require.resolve('@babel/plugin-proposal-class-properties'),
						require.resolve('@babel/plugin-transform-object-assign'),
						[require.resolve('@babel/plugin-syntax-decorators'), {
							legacy: true
						}],
						require.resolve('babel-plugin-syntax-async-functions'),
						require.resolve('@babel/plugin-transform-regenerator'),
						require.resolve('babel-plugin-transform-function-bind')
					],
					presets: [
						[ require.resolve('@babel/preset-env'), {
							targets: {
								browsers: [
									'last 2 versions',
									'safari >= 7'
								],
								esmodules: false,
							},
							modules: false
						} ],
						require.resolve('@babel/preset-react')
					]
				}
			}
		]
	}
]