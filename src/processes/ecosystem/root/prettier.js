import path from 'path'
import Process from '@/processes'

const getPrettierCLICmd = args => {
    const {
        flags,
        argv: { pattern = [] }
    } = args

    // It's a file/path, use that
    if (!pattern.length) {
        pattern.push(`"${path.resolve(process.cwd(), 'src/**/*.{js,jsx,ts,tsx,css,scss,md,mdx}')}"`)
    }
    return [
        'node',
        require.resolve('prettier/bin-prettier'),
        `--config=${require.resolve('@/configs/prettier')}`,
        '--write',
        ...flags,
        ...pattern
    ]
}

class Prettier extends Process {
    get commandToUse() {
        return getPrettierCLICmd
    }

    constructor(args) {
        const { props: { defaultAction = 'start' } = {}, ...rest } = args
        super(args)
        this.run(defaultAction, { ...rest })
    }

    onStart = ({ name }, args) => this.spawn(name, this.commandToUse(args))

    // Feature test only
    processLine(d) {
        if (d.startsWith('change:')) {
            this.emit(process.env.MHY_UI_ACTION, process.env.MHY_UI_ACTION_CLEAR)
        }
        return d
    }

    actions = [
        {
            name: 'start',
            enabled: true,
            onRun: this.onStart
        }
    ]
}

export default () => Prettier
