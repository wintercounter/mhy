import { loadConfig } from '../../util'

process.env.WEBPACK_DEV_SERVER = process.argv.find(v =>
    v.includes('webpack-dev-server')
)

const webpackConfig = loadConfig('webpack', {})

export default webpackConfig
