import path from 'path'
import fs from 'fs'
import copydir from 'copy-dir'

import { loadConfig } from '@/utils'
import mhyConfig from '@/configs/mhy'

const _globalTypes = path.resolve(__dirname, '../../../node_modules', '@types')
const _cwdTypes = path.join(process.cwd(), 'node_modules', '@types')

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
        paths: Object.entries(mhyConfig.defaultAliases).reduce(
            function(acc, [k]) {
                const folder = k.replace('@', ``)
                acc[k] = [`${folder}/index`]
                acc[`${k}/*`] = [`${folder}/*`]
                return acc
            },
            {
                '*': [
                    path.resolve(_globalTypes, '../', '*'),
                    path.resolve(process.cwd(), 'node_modules', '*')
                ]
            }
        )
    },
    include: [path.resolve(process.cwd(), `${mhyConfig.srcFolder}/**/*`)],
    files: [path.resolve(__dirname, './mhy.d.ts')]
})

// Setup @types
// Local exists
if (fs.existsSync(_cwdTypes)) {
    const isDirectory = source =>
        fs.lstatSync(path.join(_globalTypes, source)).isDirectory()
    const getDirectories = source => fs.readdirSync(source).filter(isDirectory)

    getDirectories(_globalTypes).forEach(dir => {
        // If dir not exists local
        const dirPath = path.resolve(_cwdTypes, dir)
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath)
            copydir.sync(
                path.resolve(_globalTypes, dir),
                path.resolve(_cwdTypes, dir)
            )
        }
    })
    tsconfig.compilerOptions.typeRoots = [_cwdTypes]
}
// Use mhy's if not types in local node_modules/@types yet
else {
    tsconfig.compilerOptions.typeRoots = [_globalTypes]
}

export default tsconfig
