import path from 'path'

import mhyConfig from '@/configs/mhy'

export default () => ({
    extensions: [
        '.js',
        '.mjs',
        '.jsx',
        '.css',
        '.scss',
        '.ts',
        '.tsx',
        '.json'
    ],
    modules: Array.from(
        new Set([
            path.resolve(__dirname, '../../../../node_modules'),
            path.resolve(process.cwd(), 'node_modules')
        ])
    ),
    alias: mhyConfig.defaultAliases
})
