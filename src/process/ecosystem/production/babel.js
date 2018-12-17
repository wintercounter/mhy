import path from 'path'
import Process from '@mhy/process/dist'
import copydir from 'copy-dir'

const getCmdBabelCLI = (flags = []) => [
    'node',
    require.resolve('@babel/cli/bin/babel.js'),
    path.resolve(process.cwd(), 'src'),
    '--out-dir',
    'dist',
    '--config-file',
    path.resolve(__dirname, '../../babel'),
    '--ignore',
    'node_modules,test,tests,dist,temp,tmp',
    '--delete-dir-on-start',
    '--extensions',
    '.js,.jsx,.ts,.tsx',
    ...flags
]

class Babel extends Process {
    static isDefault = true

    constructor(args) {
        const {
            args: [defaultAction = 'start'],
            flags
        } = args
        super(args)
        this.run(defaultAction, { flags })
    }

    onStart = ({ name }, { flags }) => {
        this.spawn(name, getCmdBabelCLI(flags)).on('exit', () => {
            copydir.sync(
                path.resolve(process.cwd(), 'src'),
                path.resolve(process.cwd(), 'dist'),
                function(stat, filepath, filename) {
                    if (stat === 'file') {
                        if (filename.endsWith('.d.ts')) {
                            return true
                        }
                        if (
                            filename.endsWith('ts') ||
                            filename.endsWith('tsx') ||
                            filename.endsWith('js') ||
                            filename.endsWith('jsx')
                        ) {
                            return false
                        }
                        return true
                    }
                    return true
                }
            )
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

module.exports.default = () => Babel
