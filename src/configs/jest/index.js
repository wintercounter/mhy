import path from 'path'

import { loadConfig } from '@/utils'
import mhyConfig from '@/configs/mhy'

const jestConfig = loadConfig('jest', {
    setupTestFrameworkScriptFile: path.resolve(__dirname, './setup.js'),
    rootDir: process.cwd(),
    roots: [path.resolve(process.cwd(), mhyConfig.srcFolder)],
    watchPathIgnorePatterns: ['__.*__'],
    moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
    modulePaths: [
        path.resolve(process.cwd(), mhyConfig.srcFolder),
        path.resolve(process.cwd(), 'node_modules'),
        path.resolve(__dirname, '../../../node_modules')
    ],
    transform: {
        '^.+\\.[jt]sx?$': require.resolve('./preprocess')
    },
    transformIgnorePatterns: [],
    bail: true,
    testRegex: '\\.?(test|tests|spec|integration)\\.[jt]sx?$',
    collectCoverage: false,
    verbose: true,
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
        '\\.(s?css|less)$': 'identity-obj-proxy',
        '\\.(svgx?)$': path.resolve(__dirname, 'mocks/react-null.js')
    },
    collectCoverageFrom: ['**/*.js'],
    watchPlugins: process.env.MHY_ENV === 'ui' ? [path.resolve(__dirname, 'mhyWatchPlugin')] : []
})

export default jestConfig
