import yargs from 'yargs'

import { loadProcess, buildMhyArgv } from '@/processes'

const commandHandler = argv => {
    const Tsc = loadProcess('tsc')()
    new Tsc(buildMhyArgv(argv))
}

export default () => {
    yargs.command(
        'tsc',
        'run TypeScript Compiler for type checking and generating d.ts files',
        () => {},
        commandHandler
    )
}
