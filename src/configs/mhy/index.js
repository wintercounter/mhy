import path from 'path'
import fs from 'fs'

import { loadConfig } from '@/utils'

const mhyConfig = loadConfig('mhy', {
    defaultIndexHtml: path.resolve(__dirname, '../..', 'resources', 'index.html'),
    get indexHtml() {
        const projectIndexHtml = path.resolve(process.cwd(), this.srcFolder, 'index.html')
        return fs.existsSync(projectIndexHtml) ? projectIndexHtml : this.defaultIndexHtml
    },
    srcFolder: 'src',
    distFolder: 'dist',
    buildFolder: 'build',
    defaultIgnoreList: [
        '/logs',
        '*.log',
        'npm-debug.log*',
        'yarn-debug.log*',
        'yarn-error.log*',
        'pids',
        '*.pid',
        '*.seed',
        '*.pid.lock',
        'lib-cov',
        'coverage',
        '.nyc_output',
        '.grunt',
        'bower_components',
        '.lock-wscript',
        'build/Release',
        'jspm_packages',
        'typings',
        '.npm',
        '.eslintcache',
        '.node_repl_history',
        '*.tgz',
        '.yarn-integrity',
        '.env',
        '.next',
        '.idea',
        '.vscode',
        'node_modules',
        '/.babelrc',
        '/prettier.json',
        '/.prettierrc',
        '/jest.config.js',
        '/tslint.json',
        '/.eslintrc',
        '/tsconfig.json',
        '/webpack.config.js'
    ],
    get defaultAliases() {
        const pr = path.resolve
        const src = this.srcFolder
        const cwd = process.cwd()
        return {
            '@': pr(cwd, `${src}/`),

            // Everything below here is deprecated!!!
            '@assets': pr(cwd, `${src}/assets/`),
            '@components': pr(cwd, `${src}/components/`),
            '@configs': pr(cwd, `${src}/configs/`),
            '@constants': pr(cwd, `${src}/constants/`),
            '@core': pr(cwd, `${src}/core/`),
            '@entities': pr(cwd, `${src}/entities/`),
            '@fields': pr(cwd, `${src}/fields/`),
            '@forms': pr(cwd, `${src}/forms/`),
            '@layouts': pr(cwd, `${src}/layouts/`),
            '@overlays': pr(cwd, `${src}/overlays/`),
            '@pages': pr(cwd, `${src}/pages/`),
            '@processes': pr(cwd, `${src}/processes/`),
            '@resources': pr(cwd, `${src}/resources/`),
            '@services': pr(cwd, `${src}/services/`),
            '@styles': pr(cwd, `${src}/styles/`),
            '@utils': pr(cwd, `${src}/utils/`),
            '@validators': pr(cwd, `${src}/validators/`)
        }
    },
    ecosystem: ['webpack-dev-server', 'tsc', 'jest', 'storybook-start']
})

export default mhyConfig
