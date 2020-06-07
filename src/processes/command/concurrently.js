import yargs from 'yargs'

import { loadProcess, buildMhyArgv } from '@/processes'

const commandHandler = argv => {
    const Concurrently = loadProcess('common')()
    new Concurrently(buildMhyArgv(argv), 'concurrently/bin/concurrently.js')
}

export default () => {
    yargs
        .command('concurrently', 'simply run concurrently', () => {}, commandHandler)
        .command(
            'concurrently [args...]',
            'simply run concurrently',
            () => {},
            commandHandler
        )
}
