import path from 'path'
import mhyConfig from '@/configs/mhy'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default rules => [
    ...rules,
    {
        test: /\.(css|scss|sass)$/i,
        use: [
            {
                loader: MiniCssExtractPlugin.loader
            },
            {
                loader: require.resolve('css-loader'),
                options: {
                    importLoaders: 2,
                    sourceMap: true,
                    modules: {
                        localIdentName: '[local]__[contenthash:base64:5]',
                        auto: true,
                        exportLocalsConvention: 'camelCase'
                    }
                }
            },
            {
                loader: require.resolve('sass-loader'),
                options: {
                    sourceMap: true,
                    implementation: require('node-sass'),
                    sassOptions: {
                        sourceMap: true,
                        includePaths: Array.from(
                            new Set([
                                path.resolve(__dirname, '../../../../../../node_modules'),
                                path.resolve(process.cwd(), 'node_modules'),
                                path.resolve(process.cwd(), mhyConfig.srcFolder)
                            ])
                        )
                    }
                }
            }
        ],
        include: () => true,
        exclude: () => false
    }
]
