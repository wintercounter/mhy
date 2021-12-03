import path from 'path'
import fs from 'fs'

const first100Characters = str => {
    if (str.length > 100) {
        return str.substring(0, 100) + '...'
    }
    return str
}

const swcrc = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.swcrc'), 'utf8'))
swcrc.module = {
    type: 'commonjs'
}
const transformer = require('@swc/jest').createTransformer(swcrc)
const proc = transformer.process.bind(transformer)
transformer.process = function (...args) {
    const [code, path] = args
    console.log(path)
    if (!path.includes('node_modules')) {
        console.log(path)
        console.log(first100Characters(code).replace('\n', ''))
        console.log(!path.includes('node_modules') || code.match(/^(import |export )|import\(/gm))
    }

    if (!path.includes('node_modules') || code.match(/^(import |export )|import\(/gm)) {
        return proc(...args)
    }
    return code
}
module.exports = transformer
