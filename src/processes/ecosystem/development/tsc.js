import path from 'path'
import Process from '@/processes'
import fs from 'fs'

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
        if (!fs.existsSync(path.resolve(process.cwd(), 'tsconfig.json'))) {
            require('@/configs/typescript').writeConfig()
        }

        const { props: { defaultAction = 'start' } = {}, flags } = args
        super(args)
        this.run(defaultAction, { flags })
    }

    onStart = ({ name }) => this.spawn(name, CmdTscCLI)

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
