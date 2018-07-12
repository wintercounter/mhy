module.exports.default = rules => {
	rules.find(({use}) => use[0].loader.includes('eslint-loader'))
		.use[0]
		.options = {
			failOnWarning: true,
			failOnError: true
		}
	return rules
}

