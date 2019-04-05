import yargs from 'yargs'

import { loadProcess, buildMhyArgv } from '@/processes'

const commandHandler = argv => {
    const Nodemon = loadProcess('nodemon')()
    new Nodemon(buildMhyArgv(argv))
}

export default () => {
    yargs.command(['nodemon'], 'run Node.JS script inside nodemon', () => {}, commandHandler)
}
