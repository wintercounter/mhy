const { NamedModulesPlugin, HotModuleReplacementPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
import mhyConfig from '../../mhy'

export default (plugins = []) => {
    plugins = [
        new NamedModulesPlugin(),
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
