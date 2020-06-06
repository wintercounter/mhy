import path from 'path'
import mhyConfig from '@/configs/mhy'

const getUse = async (isModules = true) => [
    {
        loader: require.resolve('style-loader')
    },
    {
        loader: require.resolve('css-loader'),
        options: {
            importLoaders: 2,
            sourceMap: true,
            modules: !isModules
                ? false
                : {
                      localIdentName: '[local]__[hash:base64:5]'
                  },
            localsConvention: 'camelCase'
        }
    },
    {
        loader: require.resolve('postcss-loader'),
        options: {
            sourceMap: true,
            plugins: [
                require('postcss-import')(),
                require('postcss-preset-env')({
                    browsers: 'last 2 versions'
                })
            ]
        }
    },
    {
        loader: require.resolve('sass-loader'),
        options: {
            sourceMap: true,
            sassOptions: {
                sourceMap: true,
                includePaths: Array.from(
                    new Set([
                        path.resolve(__dirname, '../../../../../../node_modules'),
                        path.resolve(process.cwd(), 'node_modules'),
                        path.resolve(process.cwd(), (await mhyConfig).srcFolder)
                    ])
                )
            }
        }
    }
]

export default async rules => [
    ...rules,
    {
        test: /^((?!module).)*.s?css$/,
        use: await getUse(false)
    },
    {
        test: /\.module\.s?css$/,
        use: await getUse(true)
    }
]
