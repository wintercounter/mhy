import fs from 'fs'
import path from 'path'
import yargs from 'yargs'
import fse from 'fs-extra'
import { loadConfig } from '@/utils'

const commandHandler = () => {
    const args = loadConfig('subexports')
    const root = fse.readJsonSync('./package.json').name

    Object.entries(args)
        .filter(([pkg, options]) => {
            const isExists = fs.existsSync(path.resolve(process.cwd(), options.dist))
            !isExists && console.error(`could not find dist for ${pkg} package`)
            return isExists
        })
        .forEach(([pkg, options]) => {
            const pkgFolder = path.resolve(process.cwd(), pkg)
            const pkgSource = path.relative(pkgFolder, options.dist)

            const pkgExport = {
                private: true,
                main: pkgSource,
                name: `${root}/${pkg}`,
                module: pkgSource,
                'jsnext:main': pkgSource
            }

            fse.ensureDirSync(pkgFolder)
            fse.writeJsonSync(path.join(pkgFolder, './package.json'), pkgExport)
    })
}

export default () => {
    yargs
        .command('subexports', 'exporting optional sub packages', () => {}, commandHandler)
}