import fs from 'fs'
import path from 'path'
import Process from '@/processes'

const CmdStorybookBuildCLI = ['node', require.resolve('@storybook/react/bin/build.js')]

class StorybookBuild extends Process {
    constructor(args) {
        const storybookConfigPath = require.resolve('@/configs/storybook')
        const storybookConfig = require(storybookConfigPath)
        const babelRcPath = path.resolve(
            storybookConfigPath.substring(0, storybookConfigPath.lastIndexOf(path.sep)),
            '.storybook'
        )
        if (!fs.existsSync(path.resolve(babelRcPath, '.babelrc'))) {
            require('@/configs/babel/write')(babelRcPath)
        }

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

export default () => StorybookBuild
