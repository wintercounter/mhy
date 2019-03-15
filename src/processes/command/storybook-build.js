import yargs from 'yargs'

import { loadProcess, buildMhyArgv } from '@/processes'

const commandHandler = async argv => {
    const Storybook = loadProcess('storybook-build')()
    new Storybook(buildMhyArgv(argv))
}

export default () => {
    yargs.command(['storybook-build', 'sb-build'], 'build standalone storybook', () => {}, commandHandler)
}
