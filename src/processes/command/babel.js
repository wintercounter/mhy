import yargs from 'yargs'

import { loadProcess, buildMhyArgv } from '@/processes'

const commandHandler = argv => {
    const Babel = loadProcess('babel')()
    new Babel(buildMhyArgv(argv))
}

export default () => {
    yargs.command('babel', 'compile src using Babel', () => {}, commandHandler)
}
