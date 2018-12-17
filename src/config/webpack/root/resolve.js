import path from 'path'

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
            path.resolve(__dirname, '../../../node_modules'),
            path.resolve(process.cwd(), 'node_modules')
        ])
    ),
    alias: {
        '@assets': path.resolve(process.cwd(), 'src/assets/'),
        '@components': path.resolve(process.cwd(), 'src/components/'),
        '@configs': path.resolve(process.cwd(), 'src/configs/'),
        '@constants': path.resolve(process.cwd(), 'src/constants/'),
        '@core': path.resolve(process.cwd(), 'src/core/'),
        '@entities': path.resolve(process.cwd(), 'src/entities/'),
        '@fields': path.resolve(process.cwd(), 'src/fields/'),
        '@forms': path.resolve(process.cwd(), 'src/forms/'),
        '@layouts': path.resolve(process.cwd(), 'src/layouts/'),
        '@overlays': path.resolve(process.cwd(), 'src/overlays/'),
        '@pages': path.resolve(process.cwd(), 'src/pages/'),
        '@resources': path.resolve(process.cwd(), 'src/resources/'),
        '@services': path.resolve(process.cwd(), 'src/services/'),
        '@styles': path.resolve(process.cwd(), 'src/styles/'),
        '@utils': path.resolve(process.cwd(), 'src/utils/'),
        '@validators': path.resolve(process.cwd(), 'src/validators/')
    }
})
