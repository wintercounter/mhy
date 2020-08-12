export default rules => [
    ...rules,
    {
        test: /\.(gif|png|jpe?g)$/i,
        loaders: [
            {
                loader: require.resolve('file-loader'),
                options: {
                    hash: 'sha512',
                    digest: 'hex',
                    name: '[name].[hash].[ext]',
                    esModule: false
                }
            },
            {
                loader: require.resolve('image-webpack-loader'),
                options: {
                    bypassOnDebug: true,
                    mozjpeg: {
                        progressive: false,
                        quality: 80
                    }
                }
            }
        ]
    },
    {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: {
            test: /\.[jt]sx?$/
        },
        use: [require.resolve('babel-loader'), require.resolve('@svgr/webpack'), require.resolve('url-loader')]
    },
]
