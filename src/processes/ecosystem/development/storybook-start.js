import fs from 'fs'
import path from 'path'
import Process from '@/processes'

const CmdStorybookStartCLI = ['node', require.resolve('@storybook/react/bin/index.js')]

class StorybookStart extends Process {
    constructor(args) {
        super(args)

        this.args = args
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

        for (const [key, value] of Object.entries(storybookConfig.start)) {
            if (value !== null) {
                CmdStorybookStartCLI.push(`--${key}`)
                CmdStorybookStartCLI.push(value)
            }
        }

        const { props: { defaultAction = 'start' } = {}, ...rest } = this.args

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
