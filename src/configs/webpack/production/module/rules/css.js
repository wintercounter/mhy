export default rules => {
    rules.forEach(({ use }) => {
        Array.isArray(use) &&
            use.forEach(u => {
                if (u.loader && u.loader.includes('css-loader')) {
                    u.options.sourceMap = false
                }
            })
    })
    return rules
}
