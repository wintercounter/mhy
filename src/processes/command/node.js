import yargs from 'yargs'

import { loadProcess, buildMhyArgv } from '@/processes'

const commandHandler = argv => {
    const Node = loadProcess('node')()
    new Node(buildMhyArgv(argv))
}

export default () => {
    yargs.command(['node'], 'run Node.JS script', () => {}, commandHandler)
}
