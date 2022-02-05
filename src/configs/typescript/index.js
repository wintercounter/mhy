import fs from 'fs'
import path from 'path'

import { loadConfig } from '@/utils'
import mhyConfig from '@/configs/mhy'

const _globalTypes = path.resolve(__dirname, '../../../node_modules', '@types')
const _cwdTypes = path.join(process.cwd(), 'node_modules', '@types')

const tryResolve = (...m) => {
    try {
        return require.resolve(...m)
    } catch (e) {
        return null
    }
}

const tsconfig = loadConfig('typescript', {
    compilerOptions: {
        module: 'esNext',
        target: 'esnext',
        moduleResolution: 'node',
        allowJs: false,
        emitDeclarationOnly: true,
        strict: true,
        jsx: 'preserve',
        resolveJsonModule: true,
        esModuleInterop: true,
        noImplicitAny: false,
        declaration: true,
        baseUrl: path.resolve(process.cwd(), mhyConfig.srcFolder),
        skipLibCheck: true,
        incremental: true,
        outDir: mhyConfig.srcFolder,
        paths: Object.entries(mhyConfig.defaultAliases).reduce(
            function (acc, [k, p]) {
                // eslint-disable-next-line wrap-regex
                const isModule = !/[/\\.]/.test(p)
                if (isModule && tryResolve(p)) {
                    p = tryResolve(p)
                } else if (isModule && tryResolve(process.cwd(), 'node_modules', p)) {
                    p = tryResolve(process.cwd(), 'node_modules', p)
                }
                // It's already a path
                else if (!fs.existsSync(p)) {
                    p = path.resolve(process.cwd(), p)
                } else {
                    // Make sure it's a resolved path indeed
                    p = path.resolve(p)
                }
                p = !!path.extname(p) ? path.dirname(p) : p
                acc[k] = [path.join(p, 'index')]
                acc[`${k}/*`] = [path.join(p, '*')]
                return acc
            },
            {
                '*': [path.resolve(process.cwd(), 'node_modules', '*'), path.resolve(_globalTypes, '../', '*')]
            }
        ),
        typeRoots: [_globalTypes, _cwdTypes]
    },
    include: [path.resolve(process.cwd(), `${mhyConfig.srcFolder}/**/*`)],
    exclude: ['node_modules'],
    files: [path.resolve(__dirname, './mhy.d.ts')]
})

export default tsconfig
