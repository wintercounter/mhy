import path from 'path'
import { applyJson, applyEntries } from '@/utils'

const loadConfig = (module, defaults = {}) => {
    applyEntries(
        defaults,
        path.join(__dirname, '../configs', module, 'root'),
        '**/*.js'
    )
    defaults = applyJson(module, 'root', defaults)
    applyEntries(
        defaults,
        path.join(__dirname, '../configs', module, process.env.NODE_ENV),
        '**/*.js'
    )
    defaults = applyJson(module, process.env.NODE_ENV, defaults)
    return defaults
}

export default loadConfig
