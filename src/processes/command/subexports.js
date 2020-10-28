import path from 'path'
import yargs from 'yargs'
import fse from 'fs-extra'

const commandHandler = () => {
    const args = require('@/configs/subexports')
    const root = fse.readJsonSync('./package.json').name

    Object.entries(args)
        .filter(([pkg, options]) => {
            const isExists = fse.existsSync(path.resolve(process.cwd(), pkg, options.main))
            !isExists && console.error(`could not find dist for ${pkg} package`)
            return isExists
        })
        .forEach(([pkg, options]) => {
            const pkgFolder = path.resolve(process.cwd(), pkg)
            const pkgExport = { name: `${root}/${pkg}`, private: true, ...options }

            fse.ensureDirSync(pkgFolder)
            fse.writeJsonSync(path.join(pkgFolder, './package.json'), pkgExport)
    })
}

export default () => {
    yargs
        .command('subexports', 'exporting optional sub packages', () => {}, commandHandler)
}