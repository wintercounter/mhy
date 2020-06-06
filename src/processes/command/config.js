import path from 'path'
import yargs from 'yargs'
import formatSource from '@/utils/formatSource'
import FileTypes from '@/utils/fileTypes'
import figures from 'figures'
import chalk from 'chalk'

const commandHandler = args => {
    const { config, init } = args
    if (
        !config.length || // default init
        config.length > 1 || // specified init
        init // forced init
    ) {
        handleWrite(args)
    } else {
        handlePrint(args)
    }
}

const handleWrite = async ({ config, dir, format, overwrite }) => {
    const m = fetchWriters(config)
    const modules = await Promise.all(m.map((module, i) => {
        process.stdout.write(`\rLoading configs ${i + 1}/${m.length}`)
        return require(module)
    }))

    const results = []

    for (const writeConfig of modules) {
        process.stdout.write(`\r Writing configs ${results.length + 1}/${modules.length}`)
        results.push(writeConfig(dir, format, overwrite))
    }
    try {
        process.stdout.clearLine()
        process.stdout.cursorTo(0)
    } catch {}

    const existed = results.filter(({ isExisted }) => isExisted)
    const overwritten = results.filter(({ isOverwritten }) => isOverwritten)
    const cleanlyInitialized = results.filter(({ isExisted, isOverwritten }) => !isOverwritten && !isExisted)

    if (cleanlyInitialized.length || overwritten.length) {
        console.log(`\nInitialized ${cleanlyInitialized.length + overwritten.length} config(s) successfully:\n`)
        for (const { filename, isOverwritten } of [...cleanlyInitialized, ...overwritten]) {
            console.log(
                `    ${chalk.green(figures.tick)} ${filename}${
                    isOverwritten ? ` ${chalk.yellow(`${figures.warning} overwritten`)}` : ''
                }`
            )
        }
    }

    if (!overwrite && existed.length) {
        console.log('\n')
        process.stdout.write(`\rSkipped ${existed.length} already existing config(s):\n`)
        for (const { filename } of existed) {
            console.log(`    ${chalk.blue(figures.line)} ${filename}`)
        }
        console.log('\nUse -o/--overwrite to force re-initialization of an already existing file.')
    }
}

const applyPath = (path, configObj) => {
    if (!path) return configObj
    return path.split('.').reduce((acc, p) => acc[p], configObj)
}

const handlePrint = async ({ config, format, path }) => {
    const module = await require(fetchConfigs(config)[0])
    const configObj = applyPath(path, module.default || module)
    let formatted = formatSource(configObj, format)
    if (format === FileTypes.JSON) {
        formatted = require('json-colorizer')(formatted)
    }
    console.log(formatted)
}

const fetchConfigs = (config = []) => {
    const glob = require('glob')
    const globStr = config.length ? `*(${config.join('|')})` : '*'
    return glob.sync(path.resolve(__dirname, '../../configs/', globStr) + path.sep)
}

const fetchWriters = (config = []) => {
    const glob = require('glob')
    const globStr = config.length ? `*(${config.join('|')})/write.js` : '*/write.js'
    return glob.sync(path.resolve(__dirname, '../../configs/', globStr))
}

export default () => {
    yargs.command(['config', 'c'], 'write out to cwd all available configs (shorthand to --init)').command(
        ['config [config...]', 'c [config...]'],
        'init/print out specified configs only',
        yargs => {
            yargs
                .positional('config', {
                    describe: 'config file to load',
                    type: 'string'
                })
                .option('dir', {
                    alias: 'd',
                    default: process.cwd(),
                    description: 'Output directory'
                })
                .option('init', {
                    alias: 'i',
                    default: false,
                    description: 'Initialize (create) config file',
                    choices: [false, true],
                    type: 'boolean'
                })
                .option('overwrite', {
                    alias: 'o',
                    default: false,
                    description: 'Overwrite existing files',
                    choices: [false, true],
                    type: 'boolean'
                })
                .option('format', {
                    alias: 'f',
                    default: undefined,
                    description: 'Output format',
                    choices: Object.values(FileTypes)
                })
                .option('path', {
                    alias: 'p',
                    default: undefined,
                    description:
                        'You can narrow down the output to a given path. This only works while printing the output the console. Eg: loaders.0.use',
                    type: 'string'
                })
        },
        commandHandler
    )
}
