import yargs from 'yargs'

import { loadProcess, buildMhyArgv } from '@/processes'

const commandHandler = argv => {
    const SWC = loadProcess('swc')()
    new SWC(buildMhyArgv(argv))
}

export default () => {
    yargs.command(['swc'], 'compile src using SWC', () => {}, commandHandler)
}
