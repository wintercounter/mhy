import path from 'path'
import fs from 'fs'

import jsonMerger from 'json-merger'

let json
const fetchJson = () => {
    const packageJSON = path.resolve(process.cwd(), 'package.json')
    json = fs.existsSync(packageJSON) ? require(packageJSON).mhy || {} : {}
}

/*const applyJson = (module, env, o, j) => {
    try {
        j = j || json[module][env] || {}
    } catch (e) {
        return
    }

    for (const [k, v] of Object.entries(j)) {
        if (!Array.isArray(v) && v instanceof Object) {
            o[k] = o[k] || v || {}
            applyJson(module, env, o[k] || {}, v)
        } else {
            o[k] = v
        }
    }
}*/

const applyJson = (module, env, o) => {
    let j
    try {
        !json && fetchJson()
        j = json[module][env] || {}
    } catch {
        return o
    }

    return new jsonMerger().mergeObjects([o, j], {
        params: { require }
    })
}

export default applyJson
