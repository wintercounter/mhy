const path = require('path')
const { moduleHome } = require('../../../../')

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
                require('postcss-import')()
                //require('postcss-cssnext')() use preset-env
            ]
        }
    },
    {
        loader: require.resolve('sass-loader'),
        options: {
            sourceMap: true,
            includePaths: Array.from(
                new Set([
                    path.resolve(moduleHome, '../../../'),
                    path.resolve(process.cwd(), 'node_modules'),
                    path.resolve(process.cwd(), 'src'),
                    '../node_modules'
                ])
            )
        }
    }
]

module.exports.default = rules => [
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
