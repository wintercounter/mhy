import yargs from 'yargs'

import { loadProcess, buildMhyArgv } from '@/processes'
import FileTypes from '@/utils/fileTypes'

const commandHandler = argv => {
    const Tsc = loadProcess('tsc')()

    // Write ts config if not exists
    require('@/configs/typescript/write')(process.cwd(), FileTypes.JSON, false)
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
