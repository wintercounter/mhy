import path from 'path'
import mhyConfig from '@/configs/mhy'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default rules => [
    ...rules,
    {
        test: /\.(css)$/i,
        use: [
            {
                loader: MiniCssExtractPlugin.loader
            },
            {
                loader: require.resolve('css-loader'),
                options: {
                    sourceMap: true,
                    modules: {
                        localIdentName: '[local]__[contenthash:base64:5]',
                        auto: true,
                        exportLocalsConvention: 'camelCase'
                    }
                }
            }
        ],
        include: () => true,
        exclude: () => false
    }
]
