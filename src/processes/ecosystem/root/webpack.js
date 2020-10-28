import Process from '@/processes'

const getCmdWebpackCLI = _flags => {
    const [tools, flags] = _flags.reduce((acc, flag) => {
        acc[flag.startsWith('-') ? 1 : 0].push(flag)
        return acc
    } , [[], []])
    return [
        'node',
        require.resolve('webpack-cli/bin/cli.js'),
        ...tools,
        '--config',
        require.resolve('@/configs/webpack'),
        ...flags
    ]
}

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
