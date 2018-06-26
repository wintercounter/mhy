module.exports = () => ({
	vendor: [
		'formdata-polyfill',
		'babel-polyfill',
		'whatwg-fetch',
		'url-search-params-polyfill'
	],
	app : [
		'./src'
	]
})