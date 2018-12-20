import Process from '@/processes'

const CmdWDSCLI = [
    'node',
    require.resolve('webpack-dev-server/bin/webpack-dev-server.js'),
    '--config',
    require.resolve('@/configs/webpack')
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
