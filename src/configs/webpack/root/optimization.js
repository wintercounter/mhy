import CSSMinimizerWebpackPlugin from 'css-minimizer-webpack-plugin'

export default () => ({
    // Temporarily disabled due to https://github.com/webpack-contrib/mini-css-extract-plugin/issues/610
    //runtimeChunk: 'single',
    minimize: true,
    minimizer: [
        new CSSMinimizerWebpackPlugin({
            sourceMap: true,
            test: /\.css$/g,
            minify: data => {
                const [[filename, input]] = Object.entries(data)
                // cssnano will remove duplicates
                return (
                    require('cssnano')({
                        preset: ['default', { discardComments: { removeAll: true } }],
                    })
                        .process(input, {
                            from: filename
                        })
                        // mqpacker will merge media queries and moves to the end
                        .then(function (cssnanoResult) {
                            return require('mqpacker').process(cssnanoResult, {
                                sort: true,
                                from: filename
                            })
                        })
                        .then(result => {
                            return {
                                css: result.css,
                                map: result.map,
                                warnings: result.warnings()
                            }
                        })
                )
            }
        })
    ],
    splitChunks: {
        maxAsyncRequests: 25,
        maxInitialRequests: 25,
        automaticNameDelimiter: '~',
        maxSize: 800000,
        cacheGroups: {
            commons: {
                chunks: 'all',
                test: /node_modules/,
                priority: -10,
                minSize: 100000
            },
            styles: {
                name: 'styles',
                test: /\.s?css$/,
                chunks: 'all',
                enforce: true,
                reuseExistingChunk: true
            }
        }
    }
})
