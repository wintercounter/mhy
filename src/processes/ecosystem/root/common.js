import Process from '@/processes'

const getCLICmd = (args, bin) => {
    const {
        argv
    } = args

    return [
        'node',
        require.resolve(bin),
        ...(argv.args.map(v => `"${v}"`))
    ]
}

class Common extends Process {
    constructor(args, bin) {
        const { props: { defaultAction = 'start' } = {}, ...rest } = args
        super(args)
        this.bin = bin
        this.run(defaultAction, { ...rest })
    }

    onStart = ({ name }, args) => {
        console.log('args', args, getCLICmd(args, this.bin))
        return this.spawn(name, getCLICmd(args, this.bin))
    }

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

export default () => Common
