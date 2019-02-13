import path from 'path'
import fse from 'fs-extra'
import yargs from 'yargs'

// mhy boot [technology:react|vue|...] [template:default|...] [-o,--output: output path]
const commandHandler = ({ technology, template, output }) => {
    const source = path.resolve(__dirname, '../../../', `templates/${technology}/${template}`)
    const destination = path.resolve(process.cwd(), output)

    fse.copy(source, destination, function(err) {
        if (err) {
            console.error(`mhy:boot:${technology}:${template}`)
            console.error(`An error occurred while copying the source to the destination: ${destination}`)
            console.error(err)
            return
        }
        console.log(`mhy:boot:${technology}:${template}`)
        console.log(`Completed successfully into: ${destination}`)
    })
}

export default () => {
    yargs.command('boot', 'initialize a new codebase from a template').command(
        'boot [technology] [template]',
        'init/print out specified configs only',
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
                    default: 'src',
                    description: 'Output directory',
                    type: 'string'
                })
        },
        commandHandler
    )
}
