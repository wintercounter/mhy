module.exports = entry => {
	if (process.env.WEBPACK_SERVE) {
		entry.vendor.push('webpack-dev-server-status-bar')
	}
	return entry
}