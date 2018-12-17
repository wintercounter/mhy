let aliases
try {
    aliases = require('../../webpack').default.resolve.alias
} catch (e) {
    aliases = {}
}
aliases = Object.entries(aliases)

export default (defaults = []) => [
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
    require.resolve('@babel/plugin-proposal-export-namespace-from'),
    [
        require.resolve('babel-plugin-module-resolver'),
        {
            root: [],
            alias: aliases.reduce(function(acc, [k]) {
                const isDist = process.env.NODE_ENV === 'production'
                acc[k] = k.replace('@', `./${isDist ? 'dist' : 'src'}/`)
                return acc
            }, {})
        }
    ]
]
