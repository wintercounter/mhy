import path from 'path'
import glob from 'glob'

const applyEntries = (o, basePath, globPattern = '', allowIndex = false) => {
    const entries = glob.sync(path.join(basePath, globPattern), {
        ignore: ['index'],
        nodir: true
    })

    for (const entry of entries) {
        let tmp = o
        if (entry.endsWith('index.js') || entry.endsWith('index.cjs')) {
            if (allowIndex) {
                const fn = require(entry)
                ;(fn.default || fn)(o, o)
            }
            continue
        }
        const relative = path.relative(basePath, entry)
        const segments = relative.split(path.sep)
        for (let [k, v] of Object.entries(segments)) {
            if (Array.isArray(tmp)) {
                // Value is array, no need to do anything with it
            } else if (k < segments.length - 1) {
                // It's not last item

                tmp[v] = tmp[v] || {}

                if (Array.isArray(tmp[v])) {
                    const fn = require(entry)
                    tmp[v] = tmp = (fn.default || fn)(tmp[v], o)
                } else {
                    tmp = tmp[v]
                }
            } else {
                // It's last item, require and execute default
                v = v.replace(/\.(js|cjs)$/g, '')
                const fn = require(entry)
                tmp[v] = (fn.default || fn)(tmp[v], o)
            }
        }
    }
}

export default applyEntries
