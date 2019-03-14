import { loadConfig } from '@/utils'

process.env.WEBPACK_DEV_SERVER = process.argv.find(v => v.includes('webpack-dev-server'))

let webpackConfig = loadConfig('webpack', {})

if (process.env.MHY_DEBUG) {
    const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
    const smp = new SpeedMeasurePlugin()

    webpackConfig = smp.wrap(webpackConfig)
}

export default webpackConfig
