import fs from 'fs'
import path from 'path'
import Process from '@/processes'

const CmdStorybookStartCLI = ['node', require.resolve('@storybook/react/bin'), '--no-manager-cache']

class StorybookStart extends Process {
    constructor(args) {
        const storybookConfigPath = require.resolve('@/configs/storybook')
        const sb = require(storybookConfigPath)
        const storybookConfig = sb.default || sb

        for (const [key, value] of Object.entries(storybookConfig.start)) {
            if (value !== null) {
                CmdStorybookStartCLI.push(`--${key}`)
                CmdStorybookStartCLI.push(value)
            }
        }

        const { props: { defaultAction = 'start' } = {}, ...rest } = args
        super(args)

        this.run(defaultAction, rest)
    }

    onStart = ({ name }) => this.spawn(name, CmdStorybookStartCLI)

    actions = [
        {
            name: 'start',
            enabled: true,
            onRun: this.onStart
        }
    ]
}

export default () => StorybookStart
