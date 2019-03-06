import yargs from 'yargs'

import { loadProcess, buildMhyArgv } from 'src/processes'

const commandHandler = argv => {
    const WP = loadProcess('webpack')()
    new WP(buildMhyArgv(argv))
}

export default () => {
    yargs.command(['webpack', 'wp'], 'compile src using Webpack', () => {}, commandHandler)
}
