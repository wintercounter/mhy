export default () => ({
    runtimeChunk: 'single',
    splitChunks: {
        maxAsyncRequests: 25,
        maxInitialRequests: 25,
        automaticNameDelimiter: '~',
        maxSize: 800000,
        name: true,
        cacheGroups: {
            vendors: {
                chunks: 'all',
                test: /[\\/]node_modules[\\/]/,
                priority: -10,
                reuseExistingChunk: true
            },
            default: {
                chunks: 'all',
                priority: -20,
                reuseExistingChunk: true
            }
        }
    }
})
