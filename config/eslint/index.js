const fs = require('fs')

module.exports = JSON.parse(fs.readFileSync('../../.eslintrc', 'utf8'))