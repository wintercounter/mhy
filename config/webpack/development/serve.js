module.exports = () => ({
	clipboard: false,
	dev : {
		logLevel: 'warn'
	},
	port: 3000,
	hot: {
		autoConfigure: true,
		port: 3001
	},
	//http2: true, // unstable af
	host: 'localhost'
})