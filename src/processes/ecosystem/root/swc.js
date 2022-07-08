import path from 'path'
import fs from 'fs-extra'
import copyDir from 'copy-dir'
import FileTypes from '@/utils/fileTypes'
import Process from '@/processes'
import mhyConfig from '@/configs/mhy'

const SWCPath = path.resolve(__dirname, '.swcrc')

const getCmdSWCCLI = (flags = []) => [
    'node',
    require.resolve('@swc/cli'),
    path.resolve(process.cwd(), mhyConfig.srcFolder),
    '--out-dir',
    mhyConfig.distFolder,
    '--config-file',
    SWCPath,
    '--ignore',
    ['node_modules', 'test', 'tests', 'temp', 'tmp', '**/*.d.ts', mhyConfig.distFolder, mhyConfig.buildFolder].join(
        ','
    ),
    ...flags
]

class SWC extends Process {
    constructor(args) {
        try {
            fs.unlinkSync(path.resolve(process.cwd(), mhyConfig.distFolder))
        } catch {}
        const fn = require('@/configs/swc/write')

        ;(fn.default || fn)(__dirname, FileTypes.JSON_NO_EXT, true)

        const { props: { defaultAction = 'start' } = {}, ...rest } = args
        super(args)
        this.run(defaultAction, { ...rest })
    }

    onStart = ({ name }, { flags }) => {
        this.spawn(name, getCmdSWCCLI(flags), 'pipe', false)

        this.on('data', line => {
            if (!line.includes('Successfully')) return

            copyDir.sync(
                path.resolve(process.cwd(), mhyConfig.srcFolder),
                path.resolve(process.cwd(), mhyConfig.distFolder),
                {
                    cover: false,
                    mode: true,
                    filter: function (stat, filepath) {
                        if (stat === 'file') {
                            if (filepath.endsWith('.d.ts')) {
                                return true
                            }
                            if (
                                filepath.endsWith('ts') ||
                                filepath.endsWith('tsx') ||
                                filepath.endsWith('js') ||
                                filepath.endsWith('jsx')
                            ) {
                                return false
                            }
                            return true
                        }
                        return true
                    }
                }
            )
            const configPaths = [
                path.resolve(process.cwd(), 'tsconfig.json'),
                path.resolve(process.cwd(), 'jsconfig.json')
            ]
            const configPath = configPaths.find(p => fs.existsSync(p))

            if (!configPath) return

            // Fix tsc paths
            const p = this.spawn(
                'fix_tsc_path',
                [
                    'node',
                    require.resolve('tscpaths/cjs'),
                    '-p',
                    configPath,
                    '-s',
                    mhyConfig.srcFolder,
                    '-o',
                    mhyConfig.distFolder
                ],
                ['pipe', 'pipe', 'pipe'],
                false
            )
        })
    }

    processLine(line) {
        if (
            line &&
            !line.includes('could not replace') &&
            !line.includes('tscpaths') &&
            !line.includes('Replaced 0 paths')
        ) {
            return line
        }
    }

    actions = [
        {
            name: 'start',
            enabled: true,
            onRun: this.onStart
        }
    ]
}

const getSWC = () => SWC
export default getSWC
