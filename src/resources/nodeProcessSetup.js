import path from 'path'
import { addPath } from 'module-alias'
import babelConfig from '@/configs/babel'
import register from '@babel/register'

babelConfig.presets.find(p => p[0].includes('preset-env'))[1] = {
    modules: 'commonjs',
    targets: {
        node: true,
        browsers: false,
        esmodules: true
    }
}
babelConfig.extensions = ['.es6', '.es', '.jsx', '.js', '.mjs', '.ts', '.tsx']
babelConfig.cache = false

register(babelConfig)
addPath(path.resolve(process.cwd(), 'node_modules'))
addPath(path.resolve(__dirname, '../../node_modules'))

const scriptIndex = process.argv.findIndex(v => v === '--mhy-script')

require(path.resolve(process.cwd(), process.argv[scriptIndex + 1]))
