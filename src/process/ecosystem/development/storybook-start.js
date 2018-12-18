import Process from '../../'

const CmdStorybookStartCLI = [
    'node',
    require.resolve('@storybook/react/bin/index.js')
]

class StorybookStart extends Process {
    static isDefault = true

    constructor(args) {
        const { start } = require('../../../config/storybook')

        for (const [key, value] of Object.entries(start)) {
            if (value !== null) {
                CmdStorybookStartCLI.push(`--${key}`)
                CmdStorybookStartCLI.push(value)
            }
        }

        const { props: { defaultAction = 'start' } = {}, ...rest } = args
        super(args)

        //console.log(CmdStorybookStartCLI)
        //process.exit(0)

        this.run(defaultAction, rest)
    }

    onStart = ({ name }) => this.spawn(name, CmdStorybookStartCLI)

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

export default () => StorybookStart
