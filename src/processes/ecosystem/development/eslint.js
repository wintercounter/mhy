import path from 'path'
import Process from '@/processes'

const getEslintCLICmd = args => {
    const {
        flags,
        argv: { pattern = [] }
    } = args
    console.log(path.resolve(__dirname, '../../../../node_modules'))

    // It's a file/path, use that
    if (!pattern.length) {
        pattern.push(`"${path.resolve(process.cwd(), 'src/**/!(*d).{js,jsx,ts,tsx}')}"`)
    }
    return [
        'node',
        require.resolve('eslint/bin/eslint.js'),
        '--resolve-plugins-relative-to',
        path.resolve(__dirname, '../../../../node_modules/eslint'),
        ...flags,
        ...pattern
    ]
}

class Eslint extends Process {
    constructor(args) {
        const { props: { defaultAction = 'start' } = {}, ...rest } = args
        super(args)
        this.run(defaultAction, { ...rest })
    }

    onStart = ({ name }, args) => this.spawn(name, getEslintCLICmd(args))

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

export default () => Eslint
