import path from 'path'
import Process from '@/processes'
import FileTypes from '@/utils/fileTypes'

const getJestCLICmd = flags => [
    'node',
    require.resolve('jest-cli/bin/jest'),
    '--passWithNoTests',
    '--colors',
    `--config=${require.resolve('@/configs/jest')}`,
    ...flags
]

class Jest extends Process {
    constructor(args) {
        const jestDir = path.dirname(require.resolve('@/configs/jest'))
        require('@/configs/swc/write')(jestDir, FileTypes.JSON_NO_EXT, true)

        const { props: { defaultAction = 'start' } = {}, ...rest } = args
        super(args)
        this.run(defaultAction, { ...rest })
    }

    onStart = ({ name }, { flags = [] }) => {
        this.spawn(name, getJestCLICmd(flags))
    }

    actions = [
        {
            name: 'start',
            enabled: true,
            onRun: this.onStart
        }
    ]
}

export default () => Jest
