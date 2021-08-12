import Process from '@/processes'

const getCmdStandardVersionCLI = flags => {
    return ['node', require.resolve('standard-version/bin/cli'), ...flags]
}

class StandardVersion extends Process {
    constructor(args) {
        const { props: { defaultAction = 'start' } = {}, flags } = args
        super(args)
        this.run(defaultAction, { flags })
    }

    onStart = ({ name }, { flags = [] }) => {
        this.spawn(name, getCmdStandardVersionCLI(flags))
    }

    actions = [
        {
            name: 'start',
            enabled: true,
            onRun: this.onStart
        }
    ]
}

export default () => StandardVersion
