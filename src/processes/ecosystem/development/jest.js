import fs from 'fs'
import path from 'path'
import Process from '@/processes'

const onlyChangedFlag = '--onlyChanged'
const watchFlag = '--watch'
const watchAllFlag = '--watchAll'
const getJestCLICmd = (flags = []) => [
    'node',
    require.resolve('jest-cli/bin/jest.js'),
    '--passWithNoTests',
    '--colors',
    `--config=${require.resolve('@/configs/jest')}`,
    ...flags
]

const getJestServeCLICmd = flags => [
    'node',
    require.resolve('chokidar-cli/index.js'),
    `"src/**/*.js"`,
    `"src/**/*.jsx"`,
    `"src/**/*.ts"`,
    `"src/**/*.tsx"`,
    '--command',
    `"${getJestCLICmd(flags).join(' ')}"`,
    '--initial',
    '--ignore',
    '"/node_modules|.d.ts|dist|build/"'
]

class Jest extends Process {
    static isDefault = true

    get commandToUse() {
        return process.env.MHY_ENV === 'ui' ? getJestServeCLICmd : getJestCLICmd
    }

    constructor(args) {
        if (!fs.existsSync(path.resolve(process.cwd(), '.babelrc'))) {
            require('@/configs/babel').writeConfig()
        }

        const { props: { defaultAction = 'start' } = {}, ...rest } = args
        super(args)
        this.run(defaultAction, { ...rest })
    }

    onStart = ({ name }, { flags = [] }) =>
        this.spawn(name, this.commandToUse(flags))

    onWatch = ({ name }, { flags = [] }) =>
        this.spawn(name, this.commandToUse([...flags, watchFlag]))

    onWatchAll = ({ name }, { flags = [] }) =>
        this.spawn(name, this.commandToUse([...flags, watchAllFlag]))

    onRunAll = async () => {
        await this.kill('start')
        this.run('start')
    }

    onOnlyChanged = async () => {
        await this.kill('start')
        this.run('start', { flags: [onlyChangedFlag] })
    }

    // Feature test only
    processLine(d) {
        if (d.startsWith('change:')) {
            this.emit('action', 'clear')
        }
        return d
    }

    actions = [
        {
            name: 'start',
            enabled: true,
            onRun: this.onStart
        },
        {
            name: 'changed',
            label: 'Only Changed',
            shortcut: 'c',
            enabled: true,
            onRun: this.onOnlyChanged
        },
        {
            name: 'all',
            label: 'Run All',
            shortcut: 'a',
            enabled: true,
            onRun: this.onRunAll
        },
        {
            name: 'watch',
            enabled: true,
            onRun: this.onWatch
        },
        {
            name: 'watch-all',
            enabled: true,
            onRun: this.onWatchAll
        }
    ]
}

export default () => Jest
