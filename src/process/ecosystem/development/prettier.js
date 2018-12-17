import path from 'path'
import Process from '../../'

const getPrettierCLICmd = (flags = [], fileName) => {
    // It's a file/path, use that
    const file = flags[flags.length - 1]
    if (!file) {
        flags.push(
            fileName ||
                `"${path.resolve(process.cwd(), 'src/**/*.{js,jsx,ts,tsx}')}"`
        )
    }
    return [
        'node',
        require.resolve('prettier/bin-prettier.js'),
        `--config=${path.resolve(
            __dirname,
            '../../../config',
            'prettier/index.js'
        )}`,
        '--write',
        ...flags
    ]
}

const getPrettierServeCLICmd = flags => [
    'node',
    require.resolve('chokidar-cli/index.js'),
    `"src/**/*.js"`,
    `"src/**/*.jsx"`,
    `"src/**/*.ts"`,
    `"src/**/*.tsx"`,
    '-c',
    `"${getPrettierCLICmd(flags, '{path}').join(' ')}"`,
    '--initial',
    '--ignore',
    '"node_modules"'
]

class Prettier extends Process {
    static isDefault = false

    get commandToUse() {
        return process.env.MHY_ENV === 'ui'
            ? getPrettierServeCLICmd
            : getPrettierCLICmd
    }

    constructor(args) {
        const {
            args: [defaultAction = 'start'],
            flags
        } = args
        super(args)
        this.run(defaultAction, { flags })
    }

    onStart = ({ name }, { flags = [] }) =>
        this.spawn(name, this.commandToUse(flags))

    onRestart = async () => {
        await this.kill('start')
        this.run('start')
    }

    // Feature test only
    processLine(d) {
        if (d.startsWith('change:')) {
            this.emit('action', 'clear')
        }
        return d
            .replace('PASS', '{green-bg} PASS {/green-bg}')
            .replace('FAIL', '{red-bg} FAIL {/red-bg}')
    }

    actions = [
        {
            name: 'start',
            enabled: true,
            onRun: this.onStart
        },
        {
            name: 'restart',
            label: 'Restart',
            shortcut: 'r',
            enabled: true,
            onRun: this.onRestart
        }
    ]
}

export default () => Prettier
