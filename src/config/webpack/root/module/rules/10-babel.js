const path = require('path')
const { moduleHome } = require('../../../../')

module.exports.default = rules => [
    ...rules,
    {
        test: /\.[jt]sx?$/,
        include: Array.from(
            new Set([
                // Make items unique
                path.join(moduleHome, 'src'),
                path.join(process.cwd(), 'src')
            ])
        ),
        exclude: /node_modules/,
        use: [
            {
                loader: require.resolve('babel-loader'),
                options: require('../../../../babel')
            }
        ]
    }
]
