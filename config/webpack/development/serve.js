module.exports = () => ({
	clipboard: false,
	dev : {
		publicPath: 'localhost',
		logLevel: 'debug'
	},
	port: 3000,
	content: './public',
	hot: {
		autoConfigure: true,
		port: 3001
	},
	http2: true,
	host: 'localhost'
})