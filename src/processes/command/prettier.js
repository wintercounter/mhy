import yargs from 'yargs'

import { loadProcess, buildMhyArgv } from '@/processes'

const commandHandler = argv => {
    const Prettier = loadProcess('prettier')()
    new Prettier(buildMhyArgv(argv, ['pattern']))
}

export default () => {
    yargs
        .command('prettier', 'run prettier once for supported files', () => {}, commandHandler)
        .command(
            'prettier [pattern...]',
            'run prettier once for the matching pattern',
            yargs => {
                yargs.positional('pattern', {
                    describe: 'prettier file pattern',
                    type: 'string'
                })
            },
            commandHandler
        )
}
