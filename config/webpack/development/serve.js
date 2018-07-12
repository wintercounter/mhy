module.exports.default = () => ({
	clipboard: false,
	devMiddleware : {
		logLevel: 'warn'
	},
	port: 3000,
	hotClient: {
		port: 3001,
		autoConfigure: false
	},
	//http2: true, // unstable af
	host: 'localhost'
})