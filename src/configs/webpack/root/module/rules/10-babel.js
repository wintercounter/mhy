import path from 'path'
import mhyConfig from '@/configs/mhy'

export default rules => {
    const options = require('@/configs/babel')
    if (process.env.WEBPACK_DEV_SERVER) {
        options.plugins.push(require.resolve('react-refresh/babel'))
    }

    return [
        ...rules,
        {
            test: /\.[jt]sx?$/,
            include: path.join(process.cwd(), mhyConfig.srcFolder),
            exclude: /node_modules/,
            use: [
                {
                    loader: require.resolve('babel-loader'),
                    options
                }
            ]
        }
    ]
}
