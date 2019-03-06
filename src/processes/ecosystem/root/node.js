import path from 'path'
import Process from '@/processes'

const getCmdNodeCLI = ({ mhyArgv: { _ }, flags }) => {
    const script = _[1] || 'src'
    return ['node', path.resolve(__dirname, '../../../resources/nodeProcessSetup'), '--mhy-script', script, ...flags]
}

class Node extends Process {
    constructor(args) {
        const { props: { defaultAction = 'start' } = {}, ...rest } = args
        super(args)
        this.run(defaultAction, { ...rest })
    }

    onStart = ({ name }, argv) => {
        this.spawn(name, getCmdNodeCLI(argv), 'pipe')
    }

    actions = [
        {
            name: 'start',
            enabled: true,
            onRun: this.onStart
        }
    ]
}

const getNode = () => Node
export default getNode
