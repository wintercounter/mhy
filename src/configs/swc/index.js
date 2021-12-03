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
        target: 'es2016',
        loose: false,
        externalHelpers: false,
        // Requires v1.2.50 or upper and requires target to be es2016 or upper.
        keepClassNames: false
    }
})

export default swcConfig
