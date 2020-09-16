import Process from '@/processes'

const getCmdWDSCLI = (flags = []) => [
    'node',
    require.resolve('webpack-dev-server/bin/webpack-dev-server.js'),
    '--config',
    require.resolve('@/configs/webpack'),
    ...flags
]

class WDS extends Process {
    constructor(args) {
        const { props: { defaultAction = 'start' } = {}, flags } = args
        super(args)
        this.run(defaultAction, { flags })
    }

    onStart = ({ name }, { flags }) => {
        return this.spawn(name, getCmdWDSCLI(flags))
    }

    actions = [
        {
            name: 'start',
            enabled: true,
            onRun: this.onStart
        }
    ]
}

export default () => WDS
