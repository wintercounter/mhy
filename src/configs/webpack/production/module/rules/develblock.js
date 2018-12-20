export default rules => [
    {
        enforce: 'pre',
        test: /\.(t|j)sx?$/,
        use: require.resolve('webpack-strip-block'),
        exclude: /node_modules/
    },
    ...rules
]
