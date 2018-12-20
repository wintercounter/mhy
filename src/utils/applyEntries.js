import path from 'path'
import glob from 'glob'

const applyEntries = (o, basePath, globPattern = '') => {
    const entries = glob.sync(path.join(basePath, globPattern), {
        ignore: ['index'],
        nodir: true
    })

    for (const entry of entries) {
        if (entry.endsWith('index.js')) continue
        const relative = path.relative(basePath, entry)
        const segments = relative.split(path.sep)
        let tmp = o
        segments.forEach((v, k) => {
            if (Array.isArray(tmp)) {
                // Value is array, no need to do anything with it
            } else if (k < segments.length - 1) {
                // It's not last item

                tmp[v] = tmp[v] || {}

                if (Array.isArray(tmp[v])) {
                    tmp[v] = tmp = require(entry)(tmp[v])
                } else {
                    tmp = tmp[v]
                }
            } else {
                // It's last item, require and execute default
                v = v.replace('.js', '')
                tmp[v] = require(entry)(tmp[v])
            }
        })
    }
}

export default applyEntries
