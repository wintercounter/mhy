export default rules => [
    ...rules,
    {
        test: /\.svg$/,
        use: {
            loader: require.resolve('url-loader'),
            options: {
                limit: 65000,
                mimetype: 'image/svg+xml',
                name: '[name].[ext]',
                esModule: false
            }
        }
    },
    {
        test: /\.woff$/,
        use: {
            loader: require.resolve('url-loader'),
            options: {
                limit: 65000,
                mimetype: 'application/font-woff',
                name: '[name].[ext]',
                esModule: false
            }
        }
    },
    {
        test: /\.woff2$/,
        use: {
            loader: require.resolve('url-loader'),
            options: {
                limit: 65000,
                mimetype: 'application/font-woff2',
                name: '[name].[ext]',
                esModule: false
            }
        }
    },
    {
        test: /\.[ot]tf$/,
        use: {
            loader: require.resolve('url-loader'),
            options: {
                limit: 65000,
                mimetype: 'application/octet-stream',
                name: '[name].[ext]',
                esModule: false
            }
        }
    },
    {
        test: /\.eot$/,
        use: {
            loader: require.resolve('url-loader'),
            options: {
                limit: 65000,
                mimetype: 'application/vnd.ms-fontobject',
                name: '[name].[ext]',
                esModule: false
            }
        }
    }
]
