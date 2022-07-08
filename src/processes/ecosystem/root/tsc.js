import path from 'path'
import fs from 'fs'
import stream from 'stream'
import Process from '@/processes'
import mhyConfig from '@/configs/mhy'

const getCmdTscCLI = flags => [
    'node',
    require.resolve('typescript/lib/tsc'),
    '--project',
    path.resolve(process.cwd(), 'tsconfig.json'),
    ...flags
]

const tsconfigPath = path.resolve(process.cwd(), 'tsconfig.json')

class Tsc extends Process {
    constructor(args) {
        const tsConfig_ = require(tsconfigPath)
        const tsConfig = tsConfig_.default || tsConfig_

        if (!fs.existsSync(tsconfigPath) || !tsConfig.outDir) {
            const fn = require('@/configs/typescript/write')
            ;(fn.default || fn)()
        }

        const { props: { defaultAction = 'start' } = {}, flags } = args
        super(args)
        this.run(defaultAction, { flags })
    }

    onStart = ({ name }, { flags = [] }) => {
        this.spawn(name, getCmdTscCLI(flags), undefined, false).on('exit', () => {
            // Fix tsc paths
            const p = this.spawn(
                name,
                [
                    'node',
                    require.resolve('tscpaths/cjs/index'),
                    '-p',
                    tsconfigPath,
                    '-s',
                    mhyConfig.srcFolder,
                    '-o',
                    mhyConfig.distFolder
                ],
                ['pipe', 'pipe', 'pipe']
            )

            this.on('data', line => {
                if (
                    !line.includes('could not replace') &&
                    !line.includes('tscpaths') &&
                    !line.includes('Replaced 0 paths')
                ) {
                    console.log(line)
                }
            })
        })
    }

    actions = [
        {
            name: 'start',
            enabled: true,
            onRun: this.onStart
        }
    ]
}

export default () => Tsc
