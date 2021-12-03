export default rules => [
    ...rules,
    {
        test: /\.mdx$/,
        use: [
            {
                loader: require.resolve('swc-loader'),
                options: require('@/configs/swc')
            },
            {
                loader: require.resolve('@mdx-js/loader')
            }
        ]
    }
]
