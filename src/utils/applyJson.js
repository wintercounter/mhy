import path from 'path'
import fs from 'fs'

import jsonMerger from 'json-merger'

let json
const fetchJson = () => {
    const packageJSON = path.resolve(process.cwd(), 'package.json')
    json = fs.existsSync(packageJSON) ? require(packageJSON).mhy || {} : {}
}

const applyJson = (module, env, o) => {
    let j
    try {
        !json && fetchJson()
        j = json[module][env] || (Array.isArray(o) ? [] : {})
    } catch {
        return o
    }

    return new jsonMerger({
        params: { require },
        strict: true
    }).mergeObjects([o, j])
}

export default applyJson
