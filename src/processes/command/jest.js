import yargs from 'yargs'

import { loadProcess, buildMhyArgv } from '@/processes'

const commandHandler = argv => {
    const Jest = loadProcess('jest')()
    new Jest(buildMhyArgv(argv))
}

export default () => {
    yargs.command('jest', 'run jest', () => {}, commandHandler)
}
