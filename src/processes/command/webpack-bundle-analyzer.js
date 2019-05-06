import yargs from 'yargs'

import { loadProcess, buildMhyArgv } from '@/processes'

const commandHandler = argv => {
    const WBA = loadProcess('webpack-bundle-analyzer')()
    new WBA(buildMhyArgv(argv))
}

export default () => {
    yargs.command(
        ['webpack-bundle-analyzer', 'wba'],
        'generate stats.json and run webpack-bundle-analyzer',
        () => {},
        commandHandler
    )
}
