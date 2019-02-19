import path from 'path'
import fse from 'fs-extra'
import yargs from 'yargs'
import { merge } from 'lodash'

// mhy boot [technology:react|vue|...] [template:default|...] [-o,--output: output path]
const commandHandler = async ({ technology, template, output }) => {
    const source = path.resolve(__dirname, '../../../', `templates/${technology}/${template}`)
    const destination = path.resolve(process.cwd(), output)

    try {
        await fse.copy(source, destination, { overwrite: false })
        await fse.writeJson(
            './package.json',
            merge(require(path.resolve(source, 'package.json')), require(path.resolve(destination, 'package.json'))),
            {
                spaces: 2
            }
        )
    } catch (err) {
        console.error(`mhy:boot:${technology}:${template}`)
        console.error(`An error occurred while copying the source to the destination: ${destination}`)
        console.error(err)
        return
    }
    console.log(`Completed successfully into: ${destination}`)
}

export default () => {
    yargs.command('boot', 'initialize a new codebase from a template').command(
        'boot [technology] [template]',
        'initialize a template',
        yargs => {
            yargs
                .positional('technology', {
                    describe: 'technology to use eg. react, vue, etc.',
                    type: 'string',
                    default: 'react'
                })
                .positional('template', {
                    describe: 'template to use',
                    type: 'string',
                    default: 'default'
                })
                .option('output', {
                    alias: 'o',
                    default: '',
                    description: 'Output directory',
                    type: 'string'
                })
        },
        commandHandler
    )
}
