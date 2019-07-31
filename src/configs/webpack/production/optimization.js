const TerserPlugin = require('terser-webpack-plugin')

export default (opts = {}) => ({
    ...opts,
    minimizer: [
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                safari10: true
            }
        })
    ]
})
