export default rules => {
    const swc = require('@/configs/swc')
    return [
        ...rules,
        {
            test: /\.mdx$/,
            use: [
                {
                    loader: require.resolve('swc-loader'),
                    options: swc.default || swc
                },
                {
                    loader: require.resolve('@mdx-js/loader')
                }
            ]
        }
    ]
}
