import mhyConfig from '@/configs/mhy'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default (plugins = []) => {
    plugins = [
        new HtmlWebpackPlugin({
            inject: true,
            template: mhyConfig.indexHtml
        })
    ].concat(plugins)

    return plugins
}
