import path from 'path'
import fs from 'fs'
import { loadConfig, writeFile } from '../../util'
import copydir from 'copy-dir'

const _globalTypes = path.resolve(__dirname, '../../../node_modules', '@types')
const _cwdTypes = path.join(process.cwd(), 'node_modules', '@types')

// Get aliases
let aliases
try {
    aliases = require('../webpack').resolve.alias
} catch (e) {
    aliases = {}
}
aliases = Object.entries(aliases)

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
        baseUrl: path.resolve(process.cwd(), 'src'),
        paths: aliases.reduce(
            function(acc, [k]) {
                const folder = k.replace('@', ``)
                acc[k] = [`${folder}/index`]
                acc[`${k}/*`] = [`${folder}/*`]
                return acc
            },
            {
                '*': [path.resolve(_globalTypes, '*')]
            }
        )
    },
    include: [path.resolve(process.cwd(), 'src/**/*')],
    files: [path.resolve('./mhy.d.ts')]
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

// Generate fresh tsconfig.json on each run
writeFile(process.cwd(), 'tsconfig.json', tsconfig, writeFile.JSON)
