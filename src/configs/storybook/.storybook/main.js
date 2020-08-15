import mhyWP from '@/configs/webpack'
import createCompiler from '@storybook/addon-docs/mdx-compiler-plugin'

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

export default {
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
