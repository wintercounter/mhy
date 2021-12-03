import path from 'path'
import mhyConfig from '@/configs/mhy'

export default rules => {
    const { merge } = require('lodash')
    const isDevelopment = process.env.NODE_ENV !== 'production'
    const options = merge(require('@/configs/swc'), {
        jsc: {
            transform: {
                react: {
                    development: isDevelopment,
                    refresh: isDevelopment
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
