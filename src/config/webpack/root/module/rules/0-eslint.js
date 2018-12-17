const path = require('path')
const fs = require('fs')
const { moduleHome } = require('../../../../')

let configFile = path.resolve(moduleHome, '.eslintrc')
configFile = fs.existsSync(configFile)
    ? configFile
    : path.resolve(moduleHome, '../', '.eslintrc')

module.exports.default = rules => [
    ...rules,
    {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: require.resolve('eslint-loader'),
        include: /src/,
        exclude: /node_modules|dist|build/,
        options: { configFile }
    }
]
