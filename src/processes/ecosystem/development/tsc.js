import path from 'path'
import fs from 'fs'
import stream from 'stream'
import Process from '@/processes'
import _mhyConfig from '@/configs/mhy'

const getCmdTscCLI = flags => [
    'node',
    require.resolve('typescript/lib/tsc.js'),
    '--project',
    path.resolve(process.cwd(), 'tsconfig.json'),
    ...flags
]

const tsconfigPath = path.resolve(process.cwd(), 'tsconfig.json')

class Tsc extends Process {
    constructor(args) {
        if (!fs.existsSync(tsconfigPath) || !require(tsconfigPath).outDir) {
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

        this.spawn(name, getCmdTscCLI(flags), undefined, false).on('exit', async () => {
            const mhyConfig = await _mhyConfig
            // use a Writable stream
            const customStream = new stream.Writable()
            customStream._write = function(data) {
                console.log('its data', data.toString())
            }

            // Fix tsc paths
            const p = this.spawn(
                name,
                [
                    'node',
                    require.resolve('tscpaths/cjs/index.js'),
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
