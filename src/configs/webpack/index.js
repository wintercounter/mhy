import { loadConfig } from '@/utils'

if (process.argv.find(v => v === 'serve')) {
    process.env.WEBPACK_DEV_SERVER = 'yes'
}

let webpackConfig = loadConfig('webpack', {})

if (process.env.MHY_DEBUG) {
    const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
    const smp = new SpeedMeasurePlugin()

    webpackConfig = smp.wrap(webpackConfig)
}

export default webpackConfig
