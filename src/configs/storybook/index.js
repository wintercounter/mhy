import path from 'path'
import fs from 'fs'

import { loadConfig } from '@/utils'
import mhyConfig from '@/configs/mhy'

// Add valid CWD_SRC for require.context (needs to be literal)
const configPath = path.resolve(__dirname, './.storybook/config.js')
fs.readFile(configPath, 'utf8', function(err, data) {
    if (err) {
        return console.log(err)
    }
    const result = data.replace(/require\.context\('(.*?)'/g, function(match, param) {
        return match.replace(param, path.resolve(process.cwd(), mhyConfig.srcFolder).replace(/\\/g, '/'))
    })

    fs.writeFile(configPath, result, 'utf8', function(err) {
        if (err) return console.log(err)
    })
})

export default loadConfig('storybook', {
    start: {
        port: 9000,
        host: 'localhost',
        'static-dir': null,
        'config-dir': path.resolve(__dirname, '.storybook')
    }
})
