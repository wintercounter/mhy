import path from 'path'

import mhyWP from '@/configs/webpack'
import createCompiler from '@storybook/addon-docs/mdx-compiler-plugin'
import { configure } from '@storybook/react'

/*const setSrcFolder = () => {
    const data = fs
        .readFileSync(path.resolve(__dirname, '_config.js'), 'utf8')
        .replace(/'src'/g, JSON.stringify(path.resolve(process.cwd(), mhyConfig.srcFolder)))*/

const baseWebpackConfig = config => {
    mhyWP.resolve.modules = [...config.resolve.modules, ...mhyWP.resolve.modules, process.cwd()]
    mhyWP.resolve.alias = {
        ...mhyWP.resolve.alias,
        ...config.resolve.alias
    }
    config.resolve = mhyWP.resolve
    config.module = mhyWP.module

    /* // Transpile css from anywhere
     config.module.rules.forEach(rule => {
         if (rule.test.toString().includes('css')) {
             rule.include = /./
         }
     })

     // No need to do eslint here...
     const eslint = config.module.rules.find(({ loader }) => loader && loader.includes('eslint'))
     if (eslint) {
         config.module.rules.splice(config.module.rules.indexOf(eslint), 1)
     }*/
    /*config.mode = 'development'*/

    return config
}

/*// Require all *.story.js file
const req = require.context('@', true, /\.?(story|stories|book)\.([jt]sx?|mdx)$/)
configure(req, module)*/

console.log(path.normalize(process.cwd()))

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
        }
    ]
}
