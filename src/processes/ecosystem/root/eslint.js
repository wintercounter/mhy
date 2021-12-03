import path from 'path'
import fs from 'fs'
import 'eslint-global-patch'
import Process from '@/processes'

const eslintPackageJsonPath = path.resolve(__dirname, '../../../../', 'node_modules/eslint/package.json')
const eslintPackageJson = fs.readFileSync(eslintPackageJsonPath).toString()
if (!eslintPackageJson.includes(`"./bin/eslint.js": "./bin/eslint.js"`)) {
    fs.writeFileSync(
        eslintPackageJsonPath,
        eslintPackageJson.replace(
            `"./package.json": "./package.json"`,
            `"./package.json": "./package.json","./bin/eslint.js": "./bin/eslint.js"`
        )
    )
}

const getEslintCLICmd = args => {
    const {
        flags,
        argv: { pattern = [] }
    } = args

    // It's a file/path, use that
    if (!pattern.length) {
        pattern.push(`"${path.resolve(process.cwd(), 'src/**/!(*d).{js,jsx,ts,tsx}')}"`)
    }
    return ['node', require.resolve('eslint/bin/eslint.js'), ...flags, ...pattern]
}

class Eslint extends Process {
    constructor(args) {
        const { props: { defaultAction = 'start' } = {}, ...rest } = args
        super(args)
        this.run(defaultAction, { ...rest })
    }

    onStart = ({ name }, args) => {
        /*  const { default: writePkg } = await import('write-pkg')

        await writePkg(process.cwd(), {
            ...eslintPackageJson,
            exports: {
                './bin/eslint': './bin/eslint'
            }
        })*/
        this.spawn(name, getEslintCLICmd(args))
    }

    actions = [
        {
            name: 'start',
            enabled: true,
            onRun: this.onStart
        }
    ]
}

export default () => Eslint
