export default entry => {
    if (process.env.WEBPACK_DEV_SERVER) {
        entry.app.push(require.resolve('webpack-dev-server-status-bar'))
    }
    return entry
}
