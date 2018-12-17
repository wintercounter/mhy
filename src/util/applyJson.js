import path from 'path'
import fs from 'fs'

const packageJSON = path.resolve(process.cwd(), 'package.json')
const json = fs.existsSync(packageJSON)
    ? JSON.parse(fs.readFileSync(packageJSON, 'utf8')).mhy || {}
    : {}

const applyJson = (baseDir, module, env, o, j) => {
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
}

export default applyJson
