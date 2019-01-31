export default rules => {
    const rule = rules.find(({ loader = '' }) => loader.includes('eslint-loader'))
    rule.options = {
        ...rule.options,
        failOnWarning: true,
        failOnError: true
    }
    return rules
}
