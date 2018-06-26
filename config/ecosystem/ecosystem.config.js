const path = require('path')

const apps = Object
	.values(require('../index').load('ecosystem'))
	.map(app => ({
	...app,
	name: `${path.basename(process.cwd())}-${app.name}`
}))

module.exports = { apps }