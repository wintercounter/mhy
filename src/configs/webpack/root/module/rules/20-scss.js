import path from 'path'
import mhyConfig from '@/configs/mhy'

const getUse = (isModules = true) => [
    {
        loader: require.resolve('style-loader')
    },
    {
        loader: require.resolve('css-loader'),
        options: {
            importLoaders: 2,
            localIdentName: '[local]__[hash:base64:5]',
            sourceMap: true,
            modules: isModules,
            camelCase: true
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
            includePaths: Array.from(
                new Set([
                    path.resolve(__dirname, '../../../../../../node_modules'),
                    path.resolve(process.cwd(), 'node_modules'),
                    path.resolve(process.cwd(), mhyConfig.srcFolder)
                ])
            )
        }
    }
]

export default rules => [
    ...rules,
    {
        test: /^((?!global).)*.s?css$/,
        use: getUse()
    },
    {
        test: /\.global\.s?css$/,
        use: getUse(false)
    }
]
