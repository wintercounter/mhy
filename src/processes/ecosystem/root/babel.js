import path from 'path'
import fs from 'fs-extra'
import copyDir from 'copy-dir'
import Process from '@/processes'
import mhyConfig from '@/configs/mhy'

const getCmdBabelCLI = (flags = []) => [
    'node',
    require.resolve('@babel/cli/bin/babel.js'),
    path.resolve(process.cwd(), mhyConfig.srcFolder),
    '--out-dir',
    mhyConfig.distFolder,
    '--config-file',
    require.resolve('@/configs/babel'),
    '--ignore',
    ['node_modules', 'test', 'tests', 'temp', 'tmp', '**/*.d.ts', mhyConfig.distFolder, mhyConfig.buildFolder].join(
        ','
    ),
    '--delete-dir-on-start',
    '--extensions',
    '.js,.jsx,.ts,.tsx',
    ...flags
]

class Babel extends Process {
    constructor(args) {
        const { props: { defaultAction = 'start' } = {}, ...rest } = args
        super(args)
        this.run(defaultAction, { ...rest })
    }

    onStart = ({ name }, { flags }) => {
        this.spawn(name, getCmdBabelCLI(flags), 'pipe', false)
        this.on('data', line => {
            if (!line.includes('Successfully')) return

            copyDir.sync(path.resolve(process.cwd(), mhyConfig.srcFolder), path.resolve(process.cwd(), mhyConfig.distFolder), {
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
            })

            const tsconfigPath = path.resolve(process.cwd(), 'tsconfig.json')
            if (!fs.existsSync(tsconfigPath)) {
                return
            }

            // Fix tsc paths
            const p = this.spawn(
                'fix_tsc_path',
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

const getBabel = () => Babel
export default getBabel
