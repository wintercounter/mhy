import path from 'path'
import fs from 'fs'

import { writeFile } from '../../../../../util'
import eslintConfig from '../../../../eslint'

writeFile(__dirname, '.eslintrc', eslintConfig, writeFile.JSON)
const configFile = path.resolve(__dirname, '.eslintrc')

const getRules = rules => [
    ...rules,
    {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: require.resolve('eslint-loader'),
        include: /src/,
        exclude: /node_modules|dist|build/,
        options: { configFile }
    }
]

export default getRules
