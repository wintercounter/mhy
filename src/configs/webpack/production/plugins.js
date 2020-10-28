import mhyConfig from '@/configs/mhy'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')

export default (plugins = []) =>
    [
        new HtmlWebpackPlugin({
            inject: true,
            template: mhyConfig.indexHtml,
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
                minifyURLs: true,
                inlineSource: 'app\\.chunk[0|1]\\.|runtime|.css$'
            }
        }),
        new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin)
    ].concat(plugins)
