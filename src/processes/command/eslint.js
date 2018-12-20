import yargs from 'yargs'

import { loadProcess, buildMhyArgv } from '@/processes'

const commandHandler = argv => {
    const Eslint = loadProcess('eslint')()
    new Eslint(buildMhyArgv(argv))
}

export default () => {
    yargs
        .command(
            'eslint',
            'run eslint once for all files',
            () => {},
            commandHandler
        )
        .command(
            'eslint [...pattern]',
            'run eslint once for files with matching pattern',
            yargs => {
                yargs.positional('pattern', {
                    describe: 'eslint file pattern',
                    type: 'string'
                })
            },
            commandHandler
        )
}
