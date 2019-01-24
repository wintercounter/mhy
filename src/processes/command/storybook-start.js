import fs from 'fs'
import path from 'path'
import yargs from 'yargs'

import { loadProcess, buildMhyArgv } from '@/processes'
import mhyConfig from '@/configs/mhy'

const setSrcFolder = () => {
    const data = fs
        .readFileSync(path.resolve(__dirname, '../../configs/storybook/', '_config.js'), 'utf8')
        .replace("'src'", JSON.stringify(path.resolve(process.cwd(), mhyConfig.srcFolder)))
    fs.writeFileSync(path.resolve(__dirname, '../../configs/storybook/.storybook', 'config.js'), data, 'utf8')
}

const commandHandler = argv => {
    // Whenever this config is being called, we will create a fresh webpack.config.js file with the correct
    // src folder name, because Webpack needs to be able to statically analyze it
    setSrcFolder()

    const Storybook = loadProcess('storybook-start')()
    new Storybook(buildMhyArgv(argv))
}

export default () => {
    yargs.command(['storybook-start', 'sb-start'], 'run storybook server', () => {}, commandHandler)
}
