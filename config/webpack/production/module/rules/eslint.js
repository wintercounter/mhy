module.exports = rules => {
	rules.find(({use}) => use[0].loader === 'eslint-loader')
		.use[0]
		.options = {
			failOnWarning: true,
			failOnError: true
		}
	return rules
}

