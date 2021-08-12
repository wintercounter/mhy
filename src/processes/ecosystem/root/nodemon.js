import Process from '@/processes'

const getCmdNodemonCLI = ({ mhyArgv: { _ }, flags }) => {
    const script = _[1] || './src'
    return [
        'node',
        require.resolve('nodemon/bin/nodemon'),
        '--exec',
        `mhy node`,
        '-e',
        'js,jsx,ts,tsx,json,md',
        ...flags
    ]
}

class Nodemon extends Process {
    constructor(args) {
        const { props: { defaultAction = 'start' } = {}, ...rest } = args
        super(args)
        this.run(defaultAction, { ...rest })
    }

    onStart = ({ name }, argv) => {
        this.spawn(name, getCmdNodemonCLI(argv))
    }

    actions = [
        {
            name: 'start',
            enabled: true,
            onRun: this.onStart
        }
    ]
}

const getNodemon = () => Nodemon
export default getNodemon
