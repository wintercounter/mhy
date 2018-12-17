import path from 'path'
import Process from '../../'

const CmdWDSCLI = [
    'node',
    require.resolve('webpack-dev-server/bin/webpack-dev-server.js'),
    '--config',
    path.resolve(__dirname, '../../../config', 'webpack/index.js')
]

class WDS extends Process {
    static isDefault = true

    constructor(args) {
        const { props: { defaultAction = 'start' } = {}, flags } = args
        super(args)
        this.run(defaultAction, { flags })
    }

    onStart = ({ name }) => this.spawn(name, CmdWDSCLI)

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

export default () => WDS
