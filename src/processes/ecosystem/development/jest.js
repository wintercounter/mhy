import path from 'path'
import Process from '@/processes'

const watchFlag = '--watch'
const watchAllFlag = '--watchAll'

const getJestCLICmd = flags => [
    'node',
    require.resolve('jest-cli/bin/jest.js'),
    '--passWithNoTests',
    '--colors',
    `--config=${require.resolve('@/configs/jest')}`,
    ...flags
]

class Jest extends Process {
    constructor(args) {
        const jestDir = path.dirname(require.resolve('@/configs/jest'))
        require('@/configs/babel/write')(jestDir)

        const { props: { defaultAction = 'start' } = {}, ...rest } = args
        super(args)
        this.run(defaultAction, { ...rest })
    }

    onStart = ({ name }, { flags = [] }) => {
        this.spawn(name, getJestCLICmd([...flags, process.env.MHY_ENV === 'ui' ? watchFlag : '']))
    }

    onWatchAll = ({ name }, { flags = [] }) => this.spawn(name, getJestCLICmd([...flags, watchAllFlag]))

    actions = [
        {
            name: 'start',
            enabled: true,
            onRun: this.onStart
        },
        {
            name: 'only-changed',
            label: 'Only changed',
            enabled: true,
            onRun: this.onStart
        },
        {
            name: 'watch-all',
            label: 'All',
            shortcut: 'a',
            enabled: true,
            onRun: this.onWatchAll
        }
    ]
}

export default () => Jest
