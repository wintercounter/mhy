import yargs from 'yargs'

import { loadProcess, buildMhyArgv } from '@/processes'

const commandHandler = argv => {
    const WP = loadProcess('webpack')()
    new WP(buildMhyArgv(argv))
}

export default () => {
    yargs.command(
        'webpack',
        'compile src using Webpack',
        () => {},
        commandHandler
    )
}
