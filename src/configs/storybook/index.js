import path from 'path'
import fs from 'fs'

import { loadConfig } from '@/utils'
import mhyConfig from '@/configs/mhy'

const setSrcFolder = async () => {
    const data = fs
        .readFileSync(path.resolve(__dirname, '_config.js'), 'utf8')
        .replace(/'src'/g, JSON.stringify(path.resolve(process.cwd(), (await mhyConfig).srcFolder)))
    fs.writeFileSync(path.resolve(__dirname, '.storybook', 'config.js'), data, 'utf8')
}

export default loadConfig('storybook', async () => {
    // Whenever this config is being called, we will create a fresh config.js file with the correct
    // src folder name, because Webpack needs to be able to statically analyze it

    await setSrcFolder()
    return {
        start: {
            port: 9000,
            host: 'localhost',
            'static-dir': null,
            'config-dir': path.resolve(__dirname, '.storybook')
        },
        build: {
            'static-dir': null,
            'config-dir': path.resolve(__dirname, '.storybook'),
            'output-dir': path.resolve(process.cwd(), '.sb')
        }
    }
})
