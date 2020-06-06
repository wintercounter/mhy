import path from 'path'
import mhyConfig from '@/configs/mhy'

export default async rules => {
    const options = await require('@/configs/babel')
    if (process.env.WEBPACK_DEV_SERVER) {
        options.plugins.push(require.resolve('react-hot-loader/babel'))
    }
    return [
        ...rules,
        {
            test: /\.[jt]sx?$/,
            include: path.join(process.cwd(), (await mhyConfig).srcFolder),
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
