import Process from '@/processes'

const getCmdWebpackCLI = flags => [
    'node',
    require.resolve('webpack-cli/bin/cli.js'),
    '--config',
    require.resolve('@/configs/webpack'),
    ...flags
]

class Webpack extends Process {
    constructor(args) {
        const { props: { defaultAction = 'start' } = {}, ...rest } = args
        super(args)
        this.run(defaultAction, { ...rest })
    }

    onStart = ({ name }, { flags = [] }) => this.spawn(name, getCmdWebpackCLI(flags))

    actions = [
        {
            name: 'start',
            enabled: true,
            onRun: this.onStart
        }
    ]
}

export default () => Webpack
