import Process from '@/processes'
import fs from 'fs'
import path from 'path'
import mhyConfig from '@/configs/mhy'

const getCmdWebpackCLI = () => [
    'node',
    require.resolve('webpack-cli/bin/cli'),
    '--config',
    require.resolve('@/configs/webpack'),
    '--profile',
    '--json'
]

const getCmdWebpackBundleAnalyzerCLI = flags => [
    'node',
    require.resolve('webpack-bundle-analyzer/lib/bin/analyzer'),
    ...flags
]

class WebpackBundleAnalyzer extends Process {
    constructor(args) {
        const { props: { defaultAction = 'generateStats' } = {}, ...rest } = args
        super(args)
        this.rest = rest
        this.run(defaultAction, { ...rest })
    }

    onGenerateStats = ({ name }, { flags = [] }) => {
        console.log('Gathering bundle stats')
        const p = this.spawn(name, getCmdWebpackCLI(flags), ['pipe'], false)
        const jsonPath = path.resolve(__dirname, 'stats.json')
        const bundlePath = path.resolve(process.cwd(), mhyConfig.buildFolder)
        let json = ''
        let all = ''
        let started = false

        this.on('data', d => {
            all = all + d
            if (!started && d.includes('{\n')) {
                const [, ...trimmed] = d.split('{\n')
                d = `{${trimmed.join('{\n')}`
                started = true
            }
            if (started) {
                json += d
            }
        })

        p.on('exit', () => {
            if (json.length === 0) {
                console.log(all)
                return
            }
            fs.writeFileSync(jsonPath, json)
            fs.writeFileSync(jsonPath + '.out.txt', all)

            console.log('Stats gathered successfully, analyzing...')
            this.run('start', { ...this.rest, flags: [...flags, jsonPath, bundlePath] })
        })
    }

    onStart = ({ name }, { flags = [] }) => this.spawn(name, getCmdWebpackBundleAnalyzerCLI(flags))

    actions = [
        {
            name: 'start',
            enabled: true,
            onRun: this.onStart
        },
        {
            name: 'generateStats',
            enabled: true,
            onRun: this.onGenerateStats
        }
    ]
}

export default () => WebpackBundleAnalyzer
