import path from 'path'
import glob from 'glob'

const applyEntries = async (o, basePath, globPattern = '', allowIndex = false) => {
    const entries = glob.sync(path.join(basePath, globPattern), {
        ignore: ['index'],
        nodir: true
    })

    for (const entry of entries) {
        let tmp = o
        if (entry.endsWith('index.js') || entry.endsWith('index.cjs')) {
            if (allowIndex) {
                await require(entry)(o, o)
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
                    tmp[v] = tmp = await require(entry)(tmp[v], o)
                } else {
                    tmp = tmp[v]
                }
            } else {
                // It's last item, require and execute default
                v = v.replace(/\.(js|cjs)$/g, '')
                tmp[v] = await require(entry)(tmp[v], o)
            }
        }
    }
}

export default applyEntries
