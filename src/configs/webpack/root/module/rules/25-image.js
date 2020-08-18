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
    // Don't add issuer to this rule. Require.context will not work for this reason https://github.com/webpack/webpack/issues/9309
    {
        test: /\.svg$/,
        use: [
            {
                loader: require.resolve('@svgr/webpack'),
                options: {
                    svgo: false, // Super important for sprites!
                    icon: true // Replace SVG "width" and "height" value by "1em" to make SVG size inherits from text size.
                }
            },
            {
                loader: require.resolve('url-loader'),
                options: {
                    limit: 65000,	
                    mimetype: 'image/svg+xml',	
                    name: '[name].[ext]',	
                    esModule: false
                }
            },
        ]
    },
]
