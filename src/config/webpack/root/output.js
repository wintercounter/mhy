const path = require('path')

module.exports.default = () => ({
    path: path.resolve(process.cwd(), 'build'),
    filename: '[name].[hash:5].js',
    publicPath: '',
    chunkFilename: 'app.chunk[id].[chunkhash].js?v=[hash]'
})
