import path from 'path'
import requireContext from 'node-require-context'
import { isFunction } from 'lodash'
import createCompiler from '@storybook/addon-docs/mdx-compiler-plugin'
import mhyWP from '@/configs/webpack'
import mhyConfig from '@/configs/mhy'

const srcPath = path.join(process.cwd(), mhyConfig.srcFolder)

const baseWebpackConfig = config => {
    mhyWP.resolve.modules = [...config.resolve.modules, ...mhyWP.resolve.modules, process.cwd()]
    mhyWP.resolve.alias = {
        ...mhyWP.resolve.alias,
        ...config.resolve.alias
    }
    config.resolve = mhyWP.resolve
    config.resolveLoader = mhyWP.resolveLoader
    config.module = mhyWP.module
    config.plugins.push(mhyWP.plugins.find(plg => /define/i.test(plg.constructor.name)))

    return config
}

const storiesGlob = `${srcPath.replace(/\\/g, '/')}/**/*@(story|stories|book).@(ts|tsx|js|jsx|mdx)`
const defaults = {
    stories: [storiesGlob],
    managerWebpack: baseWebpackConfig,
    webpackFinal: config => {
        config = baseWebpackConfig(config)

        config.module.rules.find(({ test }) => test.toString().includes('mdx')).use[1].options = {
            compilers: [createCompiler({})]
        }

        // Storybook doesnt need mini css extract
        config.module.rules.find(({ test }) => test.toString().includes('css')).use[0].loader = require.resolve(
            'style-loader'
        )

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
importAll(requireContext(srcPath, true, /storybook\.main\.[jt]sx?$/))

export default defaults
