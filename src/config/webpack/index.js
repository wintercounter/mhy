import { load } from '../'

import writeWebpack from '../_utils/webpack'

process.env.WEBPACK_DEV_SERVER = process.argv.find(v =>
    v.includes('webpack-dev-server')
)

const webpackConfig = load('webpack', {})

writeWebpack(__dirname, webpackConfig)

export default webpackConfig
