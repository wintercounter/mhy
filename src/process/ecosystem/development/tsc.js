import path from 'path'
import Process from '../../'

const CmdTscCLI = [
    'node',
    require.resolve('typescript/lib/tsc.js'),
    process.env.MHY_ENV === 'ui' ? '-w' : '',
    '--project',
    path.resolve(process.cwd(), 'tsconfig.json')
]

class Tsc extends Process {
    static isDefault = true

    constructor(args) {
        const { props: { defaultAction = 'start' } = {}, flags } = args
        super(args)
        this.run(defaultAction, { flags })
    }

    onStart = ({ name }) => {
        // Just initiate tsconfig.json creation
        require(path.resolve(
            __dirname,
            '../../../config',
            'typescript/index.js'
        ))

        // Ensure file is being written
        setTimeout(() => this.spawn(name, CmdTscCLI), 200)
    }

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

export default () => Tsc
