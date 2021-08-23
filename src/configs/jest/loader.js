import path from 'path'

import { loadConfig } from '@/utils'
import mhyConfig from '@/configs/mhy'

const srcPath = path.join(process.cwd(), mhyConfig.srcFolder)

const jestConfig = loadConfig('jest', {
    setupFilesAfterEnv: [
        path.resolve(__dirname, './setup.js'),
        ...require.context(srcPath, true, /jest\.setup\.[jt]sx?$/).keys()
    ],
    rootDir: process.cwd(),
    roots: [srcPath],
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
    watchPlugins: []
})

export default jestConfig
