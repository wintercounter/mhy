export default (d, o) => ({
    contentBase: '/',
    host: 'localhost',
    port: 3000,
    hot: true,
    inline: true,
    historyApiFallback: {
        disableDotRule: true
    },
    disableHostCheck: true,
    // Inherit the same watchOptions
    get watchOptions() {
        return o.watchOptions || {}
    }
})
