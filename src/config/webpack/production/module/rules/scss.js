const loader = ['css-loader']
const loaders = ['sass-loader', 'postcss-loader']

module.exports.default = rules => {
    rules.forEach(({ use }) => {
        Array.isArray(use) &&
            use.forEach(u => {
                loaders.forEach(l => {
                    if (u.loader.includes(l)) {
                        u.options.sourceMaps = false
                    }
                })
                loader.forEach(l => {
                    if (u.loader.includes(l)) {
                        u.options.sourceMap = false
                    }
                })
            })
    })
    return rules
}
