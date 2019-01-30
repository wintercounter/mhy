import path from 'path'
import Process from '@/processes'
import fs from 'fs'

const getCmdTscCLI = flags => [
    'node',
    require.resolve('typescript/lib/tsc.js'),
    '--project',
    path.resolve(process.cwd(), 'tsconfig.json'),
    ...flags
]

class Tsc extends Process {
    constructor(args) {
        if (!fs.existsSync(path.resolve(process.cwd(), 'tsconfig.json'))) {
            require('@/configs/typescript/write')()
        }

        const { props: { defaultAction = 'start' } = {}, flags } = args
        super(args)
        this.run(defaultAction, { flags })
    }

    onStart = ({ name }, { flags = [] }) => {
        if (process.env.MHY_ENV === 'ui' && !flags.includes('-w') && !flags.includes('--watch')) {
            flags.push('-w')
        }
        this.spawn(name, getCmdTscCLI(flags))
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
