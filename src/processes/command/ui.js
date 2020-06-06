import yargs from 'yargs'

import { loadEcosystem, buildMhyArgv, loadProcess } from '@/processes'
import mhyConfig from '@/configs/mhy'

const commandHandler = async argv => {
    process.env.MHY_ENV = 'ui'
    argv.process = argv.process || []

    if (!argv.process.length && argv._.length) {
        console.error(`Unknown process '${argv._[0]}' for the environment of '${process.env.NODE_ENV}'!`)
        process.exit(0)
    }

    const renderProcesses = require('@/processes/ui')
    let processes = {}

    if (!argv.process.length) {
        processes = {
            ...await loadEcosystem('root'),
            ...await loadEcosystem(process.env.NODE_ENV)
        }
        for (const name of Object.keys(processes)) {
            !mhyConfig.ecosystem.includes(name) && delete processes[name]
        }
    } else {
        argv.process.reduce((acc, p) => {
            acc[p] = loadProcess(p)()
            return acc
        }, processes)
    }

    for (const [name, process] of Object.entries(processes)) {
        processes[name] = new process(buildMhyArgv(argv, ['process']))
    }

    renderProcesses(processes)
}

export default () => {
    yargs
        .command('$0', 'alias to `ui`', f => f, commandHandler)
        .command('ui', 'start all default processes with-in UI using current NODE_ENV', commandHandler)
        .command(
            'ui [process...]',
            'run specific process(es) with-in UI',
            yargs => {
                yargs.positional('process', {
                    describe: 'name of the process',
                    type: 'string'
                })
            },
            commandHandler
        )
}
