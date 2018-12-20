import yargs from 'yargs'

import { loadProcess, buildMhyArgv } from '@/processes'

const commandHandler = argv => {
    const WDS = loadProcess('webpack-dev-server')()
    new WDS(buildMhyArgv(argv))
}

export default () => {
    yargs.command(
        'webpack-dev-server',
        'run webpack-dev-server',
        () => {},
        commandHandler
    )
}
