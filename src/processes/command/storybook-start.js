import yargs from 'yargs'

import { loadProcess, buildMhyArgv } from '@/processes'

const commandHandler = argv => {
    const Storybook = loadProcess('storybook-start')()
    new Storybook(buildMhyArgv(argv))
}

export default () => {
    yargs.command(
        'storybook-start',
        'run storybook server',
        () => {},
        commandHandler
    )
}
