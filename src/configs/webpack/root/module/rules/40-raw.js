export default rules => [
    ...rules,
    {
        test: /\.raw\.[a-zA-Z]*$/,
        use: {
            loader: require.resolve('raw-loader')
        }
    }
]
