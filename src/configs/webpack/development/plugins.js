import mhyConfig from '@/configs/mhy'
const { HotModuleReplacementPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const h = new HtmlWebpackPlugin({
    inject: true,
    template: mhyConfig.indexHtml
})

console.log(typeof h, h)

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
