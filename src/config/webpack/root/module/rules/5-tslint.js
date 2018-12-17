const path = require('path')
const fs = require('fs')
const { moduleHome } = require('../../../../')

let configFile = path.resolve(moduleHome, 'tslint.json')
configFile = fs.existsSync(configFile)
    ? configFile
    : path.resolve(moduleHome, '../', 'tslint.json')

module.exports.default = rules => [
    ...rules,
    {
        enforce: 'pre',
        test: /\.tsx?$/,
        loader: require.resolve('tslint-loader'),
        include: /src/,
        exclude: /node_modules|dist|build/,
        options: { configFile }
    }
]
