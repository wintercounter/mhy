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
            sourceMap: true,
            modules: !isModules
                ? false
                : {
                      localIdentName: '[local]__[hash:base64:5]',
                      exportLocalsConvention: 'camelCase'
                  }
        }
    },
    {
        loader: require.resolve('postcss-loader'),
        options: {
            sourceMap: true,
            plugins: [
                require('postcss-import')(),
                require('postcss-preset-env')({
                    browsers: 'last 2 versions',
                    autoprefixer: false
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
                        path.resolve(process.cwd(), mhyConfig.srcFolder)
                    ])
                )
            }
        }
    }
]

const includeExclude = {
    include: () => true,
    exclude: () => false
}

export default rules => [
    ...rules,
    {
        test: /(?<!module)\.s?css$/,
        use: getUse(false),
        ...includeExclude
    },
    {
        test: /\.module\.s?css$/,
        use: getUse(true),
        ...includeExclude
    }
]
