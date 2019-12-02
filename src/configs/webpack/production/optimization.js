import TerserPlugin from 'terser-webpack-plugin'

export default (opts = {}) => ({
    ...opts,
    runtimeChunk: 'single',
    splitChunks: {
        chunks: 'all',
        maxInitialRequests: 25,
        minSize: 20000,
        maxSize: 200000
    },
    minimizer: [
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                safari10: true
            }
        })
    ]
})
