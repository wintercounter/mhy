import path from 'path'
import yargs from 'yargs'
import fse from 'fs-extra'

const commandHandler = (args) => {
    const config = require('@/configs/subexports')
    const root = require(path.join(process.cwd(), './package.json')).name

    Object.entries(config)
        .filter(([pkg, options]) => {
            if (args.force) return true

            const isExists = fse.existsSync(path.resolve(process.cwd(), pkg, options.main))
            !isExists && console.error(`Could not find dist for ${pkg} package`)
            process.exit(1)
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
        .command(['subexports', 'se'], 'exporting optional sub packages', (y) => {
            return y.option('f', {
                alias: 'force',
                default: false,
                describe: 'Forcing will skipp checking if dist file exists or not.',
                type: 'boolean'
            })
        }, commandHandler)
}