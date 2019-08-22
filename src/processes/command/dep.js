import path from 'path'
import yargs from 'yargs'
import { buildMhyArgv, loadProcess } from '@/processes'

const filterDeps = d => !d.includes('eslint') && !d.includes('!')
const printDependencyList = (list, emptyMsg = 'No results!') => {
    const longest = list.reduce((acc, [{ length }]) => (length > acc ? length : acc), 0)
    if (longest > 0) {
        console.log() // empty line
        list.sort(([a], [b]) => (a > b ? 1 : -1)).forEach(([name, version]) =>
            console.log('  ', name.padEnd(longest + 3), version)
        )
    } else {
        console.log(emptyMsg)
    }
}

const commandHandler = async ({ tool, prop, ...argv }) => {
    switch (tool) {
        case 'collect': {
            const { dependencies: _dependencies } = require(path.resolve(__dirname, '../../../package.json'))
            const packageJSON = require(path.resolve(process.cwd(), 'package.json'))
            const { dependencies = {} } = packageJSON
            const { defaultIgnoreList, buildFolder, distFolder } = require('@/configs/mhy')
            const options = {
                ignoreDirs: [...defaultIgnoreList, buildFolder, distFolder]
            }

            const mhyDependencies = {}
            require('depcheck')(process.cwd(), options, async ({ missing, using }) => {
                const deps = new Set([
                    ...Object.keys(missing).filter(filterDeps),
                    ...Object.keys(using).filter(filterDeps)
                ])
                for (const dep of deps) {
                    if (!dependencies[dep] && _dependencies[dep]) {
                        mhyDependencies[dep] = _dependencies[dep]
                    }
                }
                printDependencyList(Object.entries(mhyDependencies))

                if (prop === 'write') {
                    await require('write-pkg')(process.cwd(), { ...packageJSON, mhyDependencies })
                } else if (prop === 'write-peer') {
                    await require('write-pkg')(process.cwd(), { ...packageJSON, peerDependencies: mhyDependencies })
                } else if (prop === 'write-both') {
                    await require('write-pkg')(process.cwd(), {
                        ...packageJSON,
                        peerDependencies: mhyDependencies,
                        mhyDependencies
                    })
                }

                prop.includes('write') &&
                    console.log('\n   Dependencies have been written into package.json successfully!')
            })

            break
        }
        case 'install': {
            const Install = loadProcess('install')()
            new Install(prop)
            break
        }
        case 'search':
        default: {
            const all = require(path.resolve(__dirname, '../../../package.json')).dependencies
            const entries = Object.entries(all)
            const filtered = entries.filter(([name]) => !prop.length || name.includes(prop))
            printDependencyList(filtered)
        }
    }
}

export default () => {
    yargs.command(
        'dep [tool] [prop]',
        'dependency management tool',
        y => {
            y.positional('tool', {
                describe: 'Which task of the tool you want to run?',
                type: 'string',
                default: 'search',
                choices: ['search', 'collect', 'install']
            }).positional('prop', {
                describe: `search [search-string: ''] | collect [''|write|write-peer|write-both]`,
                type: 'string',
                default: ''
            })
        },
        commandHandler
    )
}
