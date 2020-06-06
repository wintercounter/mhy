import path from 'path'
import mhyConfig from '@/configs/mhy'

export default async () => ({
    path: path.resolve(process.cwd(), (await mhyConfig).buildFolder),
    filename: '[name].[hash:5].js',
    publicPath: '/',
    chunkFilename: 'app.chunk[id].[chunkhash].js?v=[hash]'
})
