import path from 'path'
import Process from '../../'

const CmdWebpackCLI = [
    'node',
    require.resolve('webpack-cli/bin/cli.js'),
    '--config',
    path.resolve(__dirname, '../../../config', 'webpack/index.js')
]

class Webpack extends Process {
    static isDefault = true

    constructor(args) {
        const {
            args: [defaultAction = 'start'],
            flags
        } = args
        super(args)
        this.run(defaultAction, { flags })
    }

    onStart = ({ name }) => this.spawn(name, CmdWebpackCLI)

    onRestart = async () => {
        await this.kill('start')
        this.run('start')
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

export default () => Webpack
