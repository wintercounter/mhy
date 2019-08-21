import path from 'path'
import Process from '@/processes'

const getCmdInstallCLI = (flags = []) => ['npm', 'install', ...flags, '--no-save']

class Install extends Process {
    constructor(depType) {
        super()
        this.run('start', { depType })
    }

    onStart = ({ name }, { depType }) => {
        let depKey
        switch (depType) {
            case 'peer': {
                depKey = 'peerDependencies'
                break
            }
            case '':
            case 'mhy':
            default:
                depKey = 'mhyDependencies'
        }
        const deps = Object.entries(require(path.resolve(process.cwd(), 'package.json'))[depKey] || {}).map(
            ([name, version]) => `${name}@${version}`
        )

        if (deps.length) {
            this.spawn(name, getCmdInstallCLI(deps))
        } else {
            console.log(`'${depKey}' key in package.json does not exists or it's empty.`)
        }
    }

    actions = [
        {
            name: 'start',
            enabled: true,
            onRun: this.onStart
        }
    ]
}

const getInstall = () => Install
export default getInstall
