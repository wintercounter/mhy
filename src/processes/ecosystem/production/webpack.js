import Process from '@/processes'

const CmdWebpackCLI = [
    'node',
    require.resolve('webpack-cli/bin/cli.js'),
    '--config',
    require.resolve('@/configs/webpack')
]

class Webpack extends Process {
    static isDefault = true

    constructor(args) {
        const { props: { defaultAction = 'start' } = {}, ...rest } = args
        super(args)
        this.run(defaultAction, { ...rest })
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
