import mhyConfig from '@/configs/mhy'
const { HotModuleReplacementPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

export default (plugins = []) => {
    plugins = [
        new HtmlWebpackPlugin({
            inject: true,
            template: mhyConfig.indexHtml
        })
    ].concat(plugins)
    if (process.env.WEBPACK_DEV_SERVER) {
        plugins.push(new HotModuleReplacementPlugin())
    }
    return plugins
}
