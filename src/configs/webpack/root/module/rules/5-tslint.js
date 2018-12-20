import path from 'path'
import fs from 'fs'

export default rules => [
    ...rules,
    {
        enforce: 'pre',
        test: /\.tsx?$/,
        loader: require.resolve('tslint-loader'),
        include: /src/,
        exclude: /node_modules|dist|build/,
        get options() {
            const configFile = path.resolve(__dirname, 'tslint.json')
            if (!fs.existsSync(configFile)) {
                require('@/configs/tslint/write')(__dirname)
            }
            return { configFile }
        }
    }
]
