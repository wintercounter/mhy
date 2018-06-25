const path = require('path')
const { moduleHome } = require('../../../../')

module.exports = (rules) => [
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
						'syntax-dynamic-import',
						'transform-remove-strict-mode',
						'transform-class-properties',
						'transform-object-assign',
						'syntax-decorators',
						'transform-decorators-legacy',
						'syntax-async-functions',
						'transform-regenerator',
						'transform-function-bind'
					],
					presets: [
						[ 'env', {
							targets: {
								browsers: [
									'last 2 versions',
									'safari >= 7'
								],
								modules: false
							}
						} ],
						'stage-0'
					]
				}
			}
		]
	}
]