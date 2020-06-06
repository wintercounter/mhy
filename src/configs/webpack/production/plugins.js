import mhyConfig from '@/configs/mhy'
const HtmlWebpackPlugin = require('html-webpack-plugin')

export default async (plugins = []) =>
    [
        new HtmlWebpackPlugin({
            inject: true,
            template: (await mhyConfig).indexHtml,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        })
    ].concat(plugins)
