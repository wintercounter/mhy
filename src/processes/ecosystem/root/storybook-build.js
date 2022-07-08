import Process from '@/processes'

const CmdStorybookBuildCLI = ['node', require.resolve('@storybook/react/bin/build')]

class StorybookBuild extends Process {
    constructor(args) {
        const storybookConfigPath = require.resolve('@/configs/storybook')
        const sb = require(storybookConfigPath)
        const storybookConfig = sb.default || sb

        for (const [key, value] of Object.entries(storybookConfig.build)) {
            if (value !== null) {
                CmdStorybookBuildCLI.push(`--${key}`)
                CmdStorybookBuildCLI.push(value)
            }
        }

        const { props: { defaultAction = 'start' } = {}, ...rest } = args
        super(args)

        this.run(defaultAction, rest)
    }

    onStart = ({ name }, { flags = [] }) => this.spawn(name, [...CmdStorybookBuildCLI, ...flags])

    actions = [
        {
            name: 'start',
            enabled: true,
            onRun: this.onStart
        }
    ]
}

export default () => StorybookBuild
