export default rules => [
    ...rules,
    {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
    }
]
