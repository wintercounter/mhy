const loaders = ['css-loader', 'sass-loader', 'postcss-loader']

module.exports = rules => {
	rules.forEach(({use}) =>
		use.forEach((u, k) => {
			if (loaders.includes(u[k].loader)) {
				u[k].options.sourceMaps = false
			}
		})
	)
	return rules
}