import path from 'path'
import fs from 'fs'

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
                    path.resolve(process.cwd(), 'node_modules', '*'),
                    path.resolve(_globalTypes, '../', '*')
                ]
            }
        )
    },
    include: [path.resolve(process.cwd(), `${mhyConfig.srcFolder}/**/*`)],
    files: [path.resolve(__dirname, './mhy.d.ts')]
})

// Setup @types
const isDirectory = source => dir =>
    fs.lstatSync(path.join(source, dir)).isDirectory()
const getDirectories = source =>
    fs.readdirSync(source).filter(isDirectory(source))

// Set fixed types from mhy
getDirectories(_globalTypes).forEach(dir => {
    tsconfig.compilerOptions.paths[dir] = [path.resolve(_globalTypes, dir)]
})

// Local @types exists
if (fs.existsSync(_cwdTypes)) {
    // Set local types
    getDirectories(_cwdTypes).forEach(dir => {
        tsconfig.compilerOptions.paths[dir] = [path.resolve(_cwdTypes, dir)]
    })

    // Set local as typeRoots
    tsconfig.compilerOptions.typeRoots = [_cwdTypes]
}

export default tsconfig
