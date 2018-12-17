import yargs from 'yargs'

import { loadEcosystem, buildMhyArgv, loadProcess } from '../'

const commandHandler = argv => {
    process.env.MHY_ENV = 'ui'
    argv.process = argv.process || []

    const renderProcesses = require('../ui')
    let processes = {}

    if (!argv.process.length) {
        processes = {
            ...loadEcosystem('root'),
            ...loadEcosystem(process.env.NODE_ENV)
        }
        for (const [name, { isDefault }] of Object.entries(processes)) {
            !isDefault && delete processes[name]
        }
    } else {
        argv.process.reduce((acc, p) => {
            acc[p] = loadProcess(p)()
            return acc
        }, processes)
    }

    for (const [name, process] of Object.entries(processes)) {
        processes[name] = new process(buildMhyArgv(argv))
    }

    renderProcesses(processes)
}

export default () => {
    yargs
        .command('$0', 'alias to `ui`', ({ argv }) => commandHandler(argv))
        .command(
            'ui',
            'start all default proceesses with-in UI using current NODE_ENV',
            commandHandler
        )
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
