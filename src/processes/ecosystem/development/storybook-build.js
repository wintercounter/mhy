import fs from 'fs'
import path from 'path'
import Process from '@/processes'

const CmdStorybookBuildCLI = ['node', require.resolve('@storybook/react/bin/build.js')]

class StorybookBuild extends Process {
    constructor(args) {
        const { props: { defaultAction = 'start' } = {}, ...rest } = args
        super(args)

        this.defaultACtion = defaultAction
        this.rest = rest
        this.prepare()
    }

    async prepare() {
        const storybookConfigPath = require.resolve('@/configs/storybook')
        const storybookConfig = await require(storybookConfigPath)
        const babelRcPath = path.resolve(
            storybookConfigPath.substring(0, storybookConfigPath.lastIndexOf(path.sep)),
            '.storybook'
        )
        if (!fs.existsSync(path.resolve(babelRcPath, '.babelrc'))) {
            await require('@/configs/babel/write')(babelRcPath)
        }

        for (const [key, value] of Object.entries(storybookConfig.build)) {
            if (value !== null) {
                CmdStorybookBuildCLI.push(`--${key}`)
                CmdStorybookBuildCLI.push(value)
            }
        }

        this.run(this.defaultAction, this.rest)
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
