export default rules => [
    ...rules,
    {
        test: /^(?:.+\.)?worker\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: require.resolve('swc-loader')
            },
            {
                loader: require.resolve('worker-loader')
            }
        ]
    }
]
