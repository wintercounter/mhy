import path from 'path'
import mhyConfig from '@/configs/mhy'
import fn from '../../../index'

export default rules => {
    const { merge } = require('lodash')
    const isDevelopment = process.env.NODE_ENV !== 'production'
    const obj = require('@/configs/swc')
    const options = merge(obj.default || obj, {
        jsc: {
            transform: {
                react: {
                    development: isDevelopment,
                    refresh: !!process.env.WEBPACK_DEV_SERVER
                }
            }
        }
    })

    return [
        ...rules,
        {
            test: /\.[jt]sx?$/,
            include: path.join(process.cwd(), mhyConfig.srcFolder),
            exclude: /node_modules/,
            use: [
                {
                    loader: require.resolve('swc-loader'),
                    options
                }
            ]
        }
    ]
}
