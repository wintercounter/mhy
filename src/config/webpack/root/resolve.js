const { moduleHome } = require('../../')
const path = require('path')

module.exports.default = () => ({
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
            path.resolve(moduleHome, '../../../'),
            path.resolve(process.cwd(), 'node_modules'),
            path.resolve(moduleHome, '../node_modules'),
            '../node_modules'
        ])
    ),
    alias: {
        '@components': path.resolve(process.cwd(), 'src/components/'),
        '@constants': path.resolve(process.cwd(), 'src/constants/'),
        '@core': path.resolve(process.cwd(), 'src/core/'),
        '@entities': path.resolve(process.cwd(), 'src/entities/'),
        '@fields': path.resolve(process.cwd(), 'src/fields/'),
        '@forms': path.resolve(process.cwd(), 'src/forms/'),
        '@layouts': path.resolve(process.cwd(), 'src/layouts/'),
        '@overlays': path.resolve(process.cwd(), 'src/overlays/'),
        '@pages': path.resolve(process.cwd(), 'src/pages/'),
        '@services': path.resolve(process.cwd(), 'src/services/'),
        '@validators': path.resolve(process.cwd(), 'src/validators/')
    }
})
