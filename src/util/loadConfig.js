import { applyJson, applyEntries } from './'
import path from 'path'

const loadConfig = (module, defaults = {}) => {
    applyEntries(
        defaults,
        path.join(__dirname, '../config', module, 'root'),
        '**/*.js'
    )
    applyEntries(
        defaults,
        path.join(__dirname, '../config', module, process.env.NODE_ENV),
        '**/*.js'
    )
    applyJson(module, 'root', defaults)
    applyJson(module, process.env.NODE_ENV, defaults)
    return defaults
}

export default loadConfig
