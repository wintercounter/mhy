const path = require('path')
const fs = require('fs')
const { moduleHome } = require('../')
let babelrcPath = path.resolve(moduleHome, '.babelrc')
babelrcPath = fs.existsSync(babelrcPath)
	? babelrcPath
	: path.resolve(moduleHome, '../', '.babelrc')
const babelrc = JSON.parse(fs.readFileSync(babelrcPath, 'utf8'))

function prepare(input) {
	return input.map(p => {
		if (Array.isArray(p)) {
			p[0] = require.resolve(p[0])
			return p
		}
		return require.resolve(p)
	})
}

babelrc.presets = prepare(babelrc.presets)
babelrc.plugins = prepare(babelrc.plugins)

module.exports = require('babel-jest').createTransformer(babelrc);