import Process from '@/processes'

const getCmdSVCLI = flags => ['node', require.resolve('standard-version/bin/cli.js'), ...flags]

class SV extends Process {
    constructor(args) {
        const { props: { defaultAction = 'start' } = {}, flags } = args
        super(args)
        this.run(defaultAction, { flags })
    }

    onStart = ({ name }, { flags = [] }) => {
        this.spawn(name, getCmdSVCLI(flags))
    }

    actions = [
        {
            name: 'start',
            enabled: true,
            onRun: this.onStart
        }
    ]
}

export default () => SV
