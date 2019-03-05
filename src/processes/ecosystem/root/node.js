import path from 'path'
import Process from '@/processes'

const getCmdNodeCLI = ({ mhyArgv: { _ }, flags }) => {
    if (_.length < 2) {
        flags.push(path.resolve(__dirname, '../../../resources/nodeProcessSetup'))
    }
    return ['node', ...flags]
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
