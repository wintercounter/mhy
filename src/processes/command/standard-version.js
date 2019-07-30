import yargs from 'yargs'

import { loadProcess, buildMhyArgv } from '@/processes'

const commandHandler = argv => {
    const SV = loadProcess('standard-version')()
    new SV(buildMhyArgv(argv))
}

export default () => {
    yargs.command(['standard-version', 'sv'], 'run standard-version to release new changes', () => {}, commandHandler)
}
