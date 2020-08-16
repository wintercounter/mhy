import { isFunction } from 'lodash-es'
import createCompiler from '@storybook/addon-docs/mdx-compiler-plugin'
import mhyWP from '@/configs/webpack'

const baseWebpackConfig = config => {
    mhyWP.resolve.modules = [...config.resolve.modules, ...mhyWP.resolve.modules, process.cwd()]
    mhyWP.resolve.alias = {
        ...mhyWP.resolve.alias,
        ...config.resolve.alias
    }
    config.resolve = mhyWP.resolve
    config.resolveLoader = mhyWP.resolveLoader
    config.module = mhyWP.module

    return config
}

const defaults = {
    //stories: [`**/story.tsx`],
    managerWebpack: baseWebpackConfig,
    webpackFinal: config => {
        config = baseWebpackConfig(config)

        config.module.rules.find(({ test }) => test.toString().includes('mdx')).use[1].options = {
            compilers: [createCompiler({})]
        }

        config.module.rules.push({
            test: /\.(stories|story|book)\.[tj]sx?$/,
            loader: require.resolve('@storybook/source-loader'),
            exclude: [/node_modules/],
            enforce: 'pre'
        })
        return config
    },
    addons: [
        '@storybook/addon-notes',
        '@storybook/addon-viewport',
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: false
            }
        },
        '@storybook/addon-controls'
    ]
}

// Import setup files
const importAll = r =>
    r.keys().forEach(m => {
        const d = r(m)
        const fn = d.default || d

        if (isFunction(fn)) {
            fn(defaults)
        }
    })
importAll(require.context('@', true, /storybook\.main\.[jt]sx?$/))

export default defaults
