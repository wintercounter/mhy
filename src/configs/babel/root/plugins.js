import mhyConfig from '@/configs/mhy'

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
        require.resolve('@babel/plugin-transform-regenerator'),
        require.resolve('babel-plugin-transform-function-bind'),
        require.resolve('@babel/plugin-proposal-export-default-from'),
        require.resolve('@babel/plugin-proposal-export-namespace-from')
    ]
    // Webpack is resolving modules on it's own (storybook uses Webpack also)
    if (!process.argv.some(v => !!v.match(/(webpack|storybook)/))) {
        r.push([
            require.resolve('babel-plugin-module-resolver'),
            {
                root: [],
                alias: Object.entries(mhyConfig.defaultAliases).reduce(function(acc, [k]) {
                    // If it's compiled directly with babel, use dist folder
                    acc[k] = k.replace('@', `./${process.argv.some(v => v.includes('babel')) ? 'dist' : 'src'}/`)
                    return acc
                }, {})
            }
        ])
    }
    return r
}
