import { loadConfig } from '@/utils'

const tsConfig = loadConfig('typescript')

const swcConfig = loadConfig('swc', {
    jsc: {
        parser: {
            syntax: 'typescript',
            tsx: true,
            dynamicImport: true,
            decorators: true
        },
        paths: tsConfig.paths,
        baseUrl: tsConfig.baseUrl,
        transform: null,
        target: 'es2021',
        loose: false,
        externalHelpers: false,
        // Requires v1.2.50 or upper and requires target to be es2016 or upper.
        keepClassNames: false
    },
    test: ['es6', 'es', 'jsx', 'js', 'mjs', 'ts', 'tsx', 'esm'].map(ext => `.*.${ext}$`)
})

export default swcConfig
