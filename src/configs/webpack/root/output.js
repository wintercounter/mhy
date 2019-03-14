import path from 'path'
import mhyConfig from '@/configs/mhy'

export default () => ({
    path: path.resolve(process.cwd(), mhyConfig.buildFolder),
    filename: '[name].[hash:5].js',
    publicPath: '/',
    chunkFilename: 'app.chunk[id].[chunkhash].js?v=[hash]'
})
