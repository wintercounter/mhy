export default rules => [
    ...rules,
    {
        test: /\.mdx$/,
        use: [
            {
                loader: 'babel-loader'
            },
            {
                loader: '@mdx-js/loader'
            }
        ]
    }
]
