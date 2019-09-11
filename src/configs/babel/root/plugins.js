import path from 'path'
import fs from 'fs'

import mhyConfig from '@/configs/mhy'

// Temporary ugly hack! Babel plugin macro can only resolve from process.cwd() as root.
// We just simply patching the sourcecode until there's a better option for this.
const macrosPluginPath = require.resolve('babel-plugin-macros')
fs.readFile(macrosPluginPath, 'utf8', function(err, data) {
    fs.writeFile(
        macrosPluginPath,
        data.replace(
            'return resolve.sync(source, {',
            `return resolve.sync(source,{
                 paths: [p.resolve(__dirname, '../../'), p.resolve(process.cwd(), 'node_modules')],
            `
        ),
        'utf8',
        () => {}
    )
})

export default (defaults = []) => {
    const r = [
        ...defaults,
        require.resolve('babel-plugin-macros'),
        require.resolve('@babel/plugin-syntax-dynamic-import'),
        require.resolve('babel-plugin-transform-remove-strict-mode'),
        require.resolve('@babel/plugin-proposal-class-properties'),
        require.resolve('@babel/plugin-transform-object-assign'),
        [
            require.resolve('@babel/plugin-syntax-decorators'),
            {
                legacy: true
            }
        ],
        require.resolve('babel-plugin-syntax-async-functions'),
        require.resolve('babel-plugin-transform-function-bind'),
        require.resolve('@babel/plugin-proposal-export-default-from'),
        require.resolve('@babel/plugin-proposal-export-namespace-from')
    ]
    // Webpack is resolving modules on it's own (storybook uses Webpack also)
    // Node process will use `module-resolve`
    if (!process.argv.some(v => !!v.match(/(webpack|storybook|nodeProcessSetup)/))) {
        const isBabel = process.argv.some(v => v.includes('babel'))
        const alias = Object.entries(mhyConfig.defaultAliases).reduce(function(acc, [key, entry]) {
            // Leave alone every path which is outside cwd
            const e = path.resolve(entry)
            if (!e.includes(process.cwd())) {
                acc[key] = entry
                return acc
            }

            // Search for last occurrence of src folder and replace it to dist
            if (isBabel) {
                const entrySegements = entry.split(path.delimiter).reverse()
                const srcIndex = entrySegements.findIndex(_ => _ === mhyConfig.srcFolder)
                entrySegements[srcIndex] = mhyConfig.distFolder
                entry = entrySegements.reverse().join(path.delimiter)
            }
            acc[key] = `./${path.relative(process.cwd(), path.resolve(entry))}`
            return acc
        }, {})
        r.push([
            require.resolve('babel-plugin-module-resolver'),
            {
                root: [],
                alias
            }
        ])
    }
    return r
}
