const yargs = require('yargs')

yargs.command('$0', 'start ui with all default panels', () => {
    console.log('can start')
})

require('yargs').command(
    'wow [file]',
    'start the server',
    ys => {
        ys.positional('file', {
            describe: 'file to bind on',
            default: 5000
        })
    },
    argv => {
        console.log(argv)
        if (argv.verbose) console.info(`start server on :${argv.port}`)
    }
)

yargs.help('mhy-help')

console.log(
    require('yargs').option('verbose', {
        alias: 'v',
        default: false
    }).argv
)
