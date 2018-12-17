module.exports.default = rules => [
    {
        enforce: 'pre',
        test: /\.js$/,
        use: require.resolve('webpack-strip-block'),
        exclude: /node_modules/
    },
    ...rules
]
