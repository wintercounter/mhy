import glob from 'glob'
import fs from 'fs'
import path from 'path'
import gm from 'global-modules'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = (module.exports.environment = process.env.NODE_ENV)
const packageJSON = path.resolve(process.cwd(), 'package.json')
const json = fs.existsSync(packageJSON)
    ? JSON.parse(fs.readFileSync(packageJSON, 'utf8')).mhy || {}
    : {}
export const moduleHome = path.resolve(__dirname)
const indexTemplatePath = 'src/index.html'
const indexTemplatePathProject = path.resolve(process.cwd(), indexTemplatePath)

let indexTemplatePathMhy
try {
    indexTemplatePathMhy = path.resolve(gm, `@mhy/mhy/${indexTemplatePath}`)
} catch (e) {
    indexTemplatePathMhy = path.resolve(
        `${
            process.env.NPM_CONFIG_PREFIX
        }/lib/node_modules/@mhy/mhy/${indexTemplatePath}`
    )
}

export const indexTemplate = fs.existsSync(indexTemplatePathProject)
    ? indexTemplatePathProject
    : indexTemplatePathMhy

export const load = (module, defaults = {}) => {
    applyEntries(module, 'root', defaults)
    applyEntries(module, environment, defaults)
    applyJSON(module, 'root', defaults)
    applyJSON(module, environment, defaults)
    return defaults
}

export const loadProcess = module => {
    const d = {}
    applyEntries(module, 'root', d, path.join(__dirname, 'ecosystem', 'root', `${module}.js`))
    applyEntries(module, environment, d, path.join(__dirname, 'ecosystem', environment, `${module}.js`))
    return d[module]
}

const applyEntries = (module, env, o, defaultEntries = path.join(__dirname, module, env, '**/*')) => {
    let entries = glob.sync(defaultEntries, {
        ignore: ['index.js'],
        nodir: true
    })
    for (const entry of entries) {
        const segments = entry.split(`/${env}/`)[1].split('/')
        let tmp = o
        segments.forEach((v, k) => {
            if (Array.isArray(tmp)) {
                // Value is array, no need to do anything with it
            } else if (k < segments.length - 1) {
                // It's not last item

                tmp[v] = tmp[v] || {}

                if (Array.isArray(tmp[v])) {
                    tmp[v] = tmp = require(entry).default(tmp[v])
                } else {
                    tmp = tmp[v]
                }
            } else {
                // It's last item, require and execute default
                v = v.replace('.js', '')
                tmp[v] = require(entry).default(tmp[v])
            }
        })
    }
}

const applyJSON = (module, env, o, j) => {
    try {
        j = j || json[module][env] || {}
    } catch (e) {
        return
    }

    for (const [k, v] of Object.entries(j)) {
        if (!Array.isArray(v) && v instanceof Object) {
            o[k] = o[k] || v || {}
            applyJSON(module, env, o[k] || {}, v)
        } else {
            o[k] = v
        }
    }
}
