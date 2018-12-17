import { loadConfig, writeFile } from '../../util'
import path from 'path'
import fs from 'fs'
import babelConfig from '../babel'

// Generate fresh babelrc on each run
writeFile(__dirname, '.babelrc', babelConfig, writeFile.JSON)

// Add valid CWD_SRC for require.context (needs to be literal)
const configPath = path.resolve(__dirname, './.storybook/config.js')
fs.readFile(configPath, 'utf8', function(err, data) {
    if (err) {
        return console.log(err)
    }
    const result = data.replace(/require\.context\('(.*?)'/g, function(
        match,
        param
    ) {
        return match.replace(
            param,
            path.resolve(process.cwd(), 'src').replace(/\\/g, '/')
        )
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

/*
Usage: start-storybook [options]

Options:

-h, --help                    output usage information
-V, --version                 output the version number
-p, --port [number]           Port to run Storybook (Required)
-h, --host [string]           Host to run Storybook
-s, --static-dir <dir-names>  Directory where to load static files from, comma-separated list
-c, --config-dir [dir-name]   Directory where to load Storybook configurations from
--quiet                       Suppress verbose build output
For build-storybook
Usage: build-storybook [options]

Options:

    -h, --help                    output usage information
-V, --version                 output the version number
-s, --static-dir <dir-names>  Directory where to load static files from, comma-separated list
-o, --output-dir [dir-name]   Directory where to store built files
-c, --config-dir [dir-name]   Directory where to load Storybook configurations from
-w, --watch                   Enable watch mode*/
