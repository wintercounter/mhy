import path from 'path'
import FileTypes from '@/utils/fileTypes'

const getRules = rules => {
    const configFile = path.resolve(__dirname, '.eslintrc')
    require('@/configs/eslint/write')(__dirname, FileTypes.JSON_NO_EXT, true)

    return [
        {
            enforce: 'pre',
            test: /\.[jt]sx?$/,
            loader: require.resolve('eslint-loader'),
            include: /src/,
            exclude: /node_modules|dist|build/,
            options: {
                failOnWarning: true,
                failOnError: true,
                configFile
            }
        },
        ...rules
    ]
}

export default getRules
