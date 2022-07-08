import path from 'path'
const { moduleHome } = require('../../../../dist/index')

const getOptions = test => {
    const prettier = require('@/configs/prettier')
    return {
        test,
        include: Array.from(
            new Set([
                // Make items unique
                path.join(moduleHome, 'srcF'),
                path.join(process.cwd(), 'srcF')
            ])
        ),
        loader: require.resolve('prettier-loader'),
        // force this loader to run first if it's not first in loaders list
        enforce: 'pre',
        // avoid running prettier on all the files!
        // use it only on your source code and not on dependencies!
        exclude: /node_modules/,
        options: { ...(prettier.default || prettier) }
    }
}

export default rules => {
    const babylon = getOptions(/\.jsx?$/)
    const typescript = getOptions(/\.tsx?$/)
    babylon.options.parser = 'babylon'
    typescript.options.parser = 'typescript'

    return [...rules, babylon, typescript]
}
