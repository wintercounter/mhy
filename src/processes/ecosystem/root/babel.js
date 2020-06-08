import path from 'path'
import copyDir from 'copy-dir'
import Process from '@/processes/index'
import _mhyConfig from '@/configs/mhy'

const getCmdBabelCLI = async (flags = []) => {
    const mhyConfig = await _mhyConfig
    return [
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
}

class Babel extends Process {
    constructor(args) {
        const { props: { defaultAction = 'start' } = {}, ...rest } = args
        super(args)
        this.run(defaultAction, { ...rest })
    }

    onStart = async ({ name }, { flags }) => {
        this.spawn(name, await getCmdBabelCLI(flags), 'pipe')
        this.on('data', handleCompileSuccess)
    }

    actions = [
        {
            name: 'start',
            enabled: true,
            onRun: this.onStart
        }
    ]
}

const handleCompileSuccess = async line => {
    if (!line.includes('Successfully')) return

    const mhyConfig = await _mhyConfig
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
}

const getBabel = () => Babel
export default getBabel
