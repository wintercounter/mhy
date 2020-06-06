import FileTypes from '@/utils/fileTypes'
import { writeFile } from '@/utils'
import webpackConfig from '@/configs/webpack'

const writeConfig = async (dir = process.cwd(), format = FileTypes.JS, overwrite) => {
    return writeFile(dir, 'webpack.config', await webpackConfig, format, overwrite)
}

export default writeConfig
