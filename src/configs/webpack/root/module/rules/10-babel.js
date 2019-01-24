import path from 'path'
import mhyConfig from '@/configs/mhy'

export default rules => [
    ...rules,
    {
        test: /\.[jt]sx?$/,
        include: path.join(process.cwd(), mhyConfig.srcFolder),
        exclude: /node_modules/,
        use: [
            {
                loader: require.resolve('babel-loader'),
                options: require('@/configs/babel')
            }
        ]
    }
]
