import yargs from 'yargs'

import { loadProcess, buildMhyArgv } from '@/processes'

const commandHandler = argv => {
    const Jest = loadProcess('jest')()
    new Jest(buildMhyArgv(argv))
}

export default () => {
    yargs
        .command(
            'jest',
            'run jest once for all tests',
            () => {},
            commandHandler
        )
        .command(
            'jest [...pattern]',
            'run jest once for tests with matching pattern',
            yargs => {
                yargs.positional('pattern', {
                    describe: 'jest file pattern',
                    type: 'string'
                })
            },
            commandHandler
        )
}
