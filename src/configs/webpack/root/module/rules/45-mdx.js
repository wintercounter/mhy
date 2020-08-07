export default rules => [
    ...rules,
    {
        test: /\.mdx$/,
        use: [
            {
                loader: require.resolve('babel-loader'),
                options: require('@/configs/babel')
            },
            {
                loader: require.resolve('@mdx-js/loader')
            }
        ]
    }
]
