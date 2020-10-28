import path from 'path'
import mhyConfig from '@/configs/mhy'

export default () => ({
    path: path.resolve(process.cwd(), mhyConfig.buildFolder),
    filename: '[name].[contenthash:5].js',
    publicPath: '/',
    chunkFilename: 'app.chunk[id].[chunkhash].js?v=[contenthash]'
})
