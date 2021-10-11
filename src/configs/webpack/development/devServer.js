export default (d, o) => ({
    static: '/',
    host: 'localhost',
    port: 3000,
    hot: true,
    client: {
        progress: true
    },
    compress: false,
    historyApiFallback: {
        disableDotRule: true
    },
    allowedHosts: 'all'
})
