import path from 'path'
import fs from 'fs'

import { writeFile } from '../../../../../util'
import eslintConfig from '../../../../eslint'

writeFile(__dirname, 'tslint.json', eslintConfig, writeFile.JSON)
const configFile = path.resolve(__dirname, 'tslint.json')

export default rules => [
    ...rules,
    {
        enforce: 'pre',
        test: /\.tsx?$/,
        loader: require.resolve('tslint-loader'),
        include: /src/,
        exclude: /node_modules|dist|build/,
        options: { configFile }
    }
]
