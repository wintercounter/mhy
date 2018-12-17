module.exports.default = rules => [
    ...rules,
    {
        test: /^(?:.+\.)?worker\.jsx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: require.resolve('babel-loader')
            },
            {
                loader: require.resolve('worker-loader')
            }
        ]
    }
]
