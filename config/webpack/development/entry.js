module.exports.default = entry => {
	if (process.env.WEBPACK_SERVE) {
		entry.vendor.push(require.resolve('webpack-dev-server-status-bar'))
		entry.app.push(require.resolve('webpack-hot-client/client'))
	}
	return entry
}