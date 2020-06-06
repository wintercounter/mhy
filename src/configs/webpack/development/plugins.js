import mhyConfig from '@/configs/mhy'
const { HotModuleReplacementPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

export default async (plugins = []) => {
    plugins = [
        new HtmlWebpackPlugin({
            inject: true,
            template: (await mhyConfig).indexHtml
        })
    ].concat(plugins)
    if (process.env.WEBPACK_DEV_SERVER) {
        plugins.push(new HotModuleReplacementPlugin())
    }
    return plugins
}
